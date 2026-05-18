import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home.jsx';
import Vision from '@/pages/Vision.jsx';
import Products from '@/pages/Products.jsx';
import Manufacturing from '@/pages/Manufacturing.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/products" element={<Products />} />
      <Route path="/manufacturing" element={<Manufacturing />} />
    </Routes>
  </Router>
);

export default App;.
