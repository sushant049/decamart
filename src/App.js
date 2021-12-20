import React from 'react';
import { Route, BrowserRouter as Router, Routes, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './components/header/index';
// import Footer from './components/footer/index';

import HomePage from './pages/homePage/index';
import CartPage from './pages/cartPage/index';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/cart" exact element={<CartPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
