import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const secure = process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465;
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
    logger: true,
    debug: true,
});

transporter.verify()
    .then(() => console.log('SMTP transporter is ready'))
    .catch(err => console.error('SMTP configuration error', err));

app.post('/api/franchise', async (req, res) => {
    const { name, mobile, city, state } = req.body;

    if (!name || !mobile || !city || !state) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const message = `
    New Franchise Application

    Name: ${name}
    Mobile: ${mobile}
    City: ${city}
    State: ${state}
  `;

    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: 'New Franchise Application',
            text: message,
            envelope: {
                from: process.env.EMAIL_FROM,
                to: process.env.EMAIL_TO,
            },
            replyTo: process.env.SMTP_USER,
            headers: {
                'X-Mailer': 'Zupharm Franchise Form',
            },
        });

        console.log('Email send info:', info);
        return res.status(200).json({ success: true, info });
    } catch (error) {
        console.error('Email send failed', error);
        return res.status(500).json({ error: 'Unable to send email.' });
    }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Backend listening on http://localhost:${port}`);
});