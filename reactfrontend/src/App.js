import React from 'react';

import {BrowserRouter,Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SiginScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">Grocery App</Link>
        
      </div>
      <div className="header-links">
       <Link to ="/cart">Cart</Link>
        {userInfo ? (
              <Link to="/profile">{userInfo.username}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Bevarages</a>
        </li>

        <li>
          <a href="index.html">Bread/Bakery</a>
        </li>
        <li>
            <a href="index.html">Canned/Jarred goods</a>
        </li>
        <li>
            <a href="index.html">Dairy Products</a>
        </li>
        <li>
            <a href="index.html">Fruits and Vegetables</a>
        </li>
        <li>
            <a href="index.html">Personal Care</a>
        </li>
        <li>
            <a href="index.html">Cleaners</a>
        </li>
        <li>
            <a href="index.html">Household</a>
        </li>


      </ul>
    </aside>
    <main className="main">
      <div className="content">
      <Route path = "/product/:id"  component={ProductScreen}/>
      <Route path="/cart/:id?" component={CartScreen}/>
      <Route path = "/" exact={true} component={HomeScreen}/>
      <Route path ="/signin" component={SigninScreen}/>
      <Route path ="/register" component={RegisterScreen}/>
      <Route path ="/shipping" component={ShippingScreen}/>
     <Route path="/payment" component={PaymentScreen}/> 
     <Route path="/placeorder" component={PlaceOrderScreen}/> 


      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
