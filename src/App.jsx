import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import Home from '@/pages/Home.jsx';
import About from '@/pages/About.jsx';
import Products from '@/pages/Products.jsx';
import Distributorship from '@/pages/Distributorship.jsx';
import WhyUs from '@/pages/WhyUs.jsx';
import Manufacturing from '@/pages/Manufacturing.jsx';
import Contact from '@/pages/Contact.jsx';
// 1. Import the Blogs component
import Blogs from '@/pages/Blogs.jsx'; 

const App = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/about"         element={<About />} />
        <Route path="/products"      element={<Products />} />
        <Route path="/distributorship"     element={<Distributorship />} />
        <Route path="/why-us"        element={<WhyUs />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/contact"       element={<Contact />} />
        {/* 2. Add the route for the blogs page */}
        <Route path="/blogs"         element={<Blogs />} /> 
      </Routes>
    </MainLayout>
  </Router>
);

export default App;