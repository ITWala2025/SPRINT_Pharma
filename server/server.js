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
    const { name, mobile, email, city, state, product, businessType, message } = req.body;

    if (!name || !mobile || !email || !city || !state) {
        return res.status(400).json({ error: 'Name, mobile, email, city and state are required.' });
    }

    const emailText = `
New Franchise Application

Name: ${name}
Email: ${email}
Mobile: ${mobile}
City: ${city}
State: ${state}
Product Interest: ${product || 'N/A'}
Business Type: ${businessType || 'N/A'}
Message: ${message || 'N/A'}
`;

    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: 'New Franchise Application',
            text: emailText,
            html: `<p><strong>New Franchise Application</strong></p>
<ul>
  <li><strong>Name:</strong> ${name}</li>
  <li><strong>Email:</strong> ${email}</li>
  <li><strong>Mobile:</strong> ${mobile}</li>
  <li><strong>City:</strong> ${city}</li>
  <li><strong>State:</strong> ${state}</li>
  <li><strong>Product Interest:</strong> ${product || 'N/A'}</li>
  <li><strong>Business Type:</strong> ${businessType || 'N/A'}</li>
  <li><strong>Message:</strong> ${message || 'N/A'}</li>
</ul>`,
            envelope: {
                from: process.env.EMAIL_FROM,
                to: process.env.EMAIL_TO,
            },
            replyTo: email || process.env.SMTP_USER,
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