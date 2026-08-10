import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// component importing
import HomePage from './landingPage/home/HomePage';
import PricingPage from './landingPage/pricing/pricingPage';
import AboutPage from './landingPage/about/AboutPage';
import ProductPage from './landingPage/product/productPage';
import SignUp from './landingPage/singup/singUp';
import SupportPage from './landingPage/support/SupportPage';
import SignUpWithEmail from './landingPage/singup/Signupwithemail';
import Login from './landingPage/singup/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup/email" element={<SignUpWithEmail/>}/>
      <Route path="/support" element={<SupportPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/SignIn" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
);