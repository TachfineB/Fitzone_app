import Navbar from "./components/Navbar";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Business from "./components/Business";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//<React.StrictMode>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
};