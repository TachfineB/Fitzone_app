import bill from "./bill.png";
import binance from "./binance.png";
import card from "./card.png";
import coinbase from "./coinbase.png";
import dropbox from "./dropbox.png";
import logo from "./logo.png";
import quotes from "./quotes.svg";
import robot from "./robot.png";
import send from "./Send.svg";
import shield from "./Shield.svg";
import star from "./Star.svg";
import menu from "./menu.svg";
import close from "./close.svg";
import google from "./google.svg";
import apple from "./apple.svg";
import arrowUp from "./arrow-up.svg";
import discount from "./Discount.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import linkedin from "./linkedin.svg";
import twitter from "./twitter.svg";
import people01 from "./people01.png";
import people02 from "./people02.png";
import people03 from "./people03.png";
import showers from "./showers.jpg"
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
  bill,
  binance,
  card,
  coinbase,
  dropbox,
  logo,
  quotes,
  robot,
  send,
  shield,
  star,
  menu,
  close,
  google,
  apple,
  showers,
  arrowUp,
  discount,
  facebook,
  instagram,
  linkedin,
  twitter,
  people01,
  people02,
  people03,
};
