import { useState } from 'react'
import './App.css'
import Header from './Header/Header';
import Products from './Products/Products';
import Footer from './Footer/Footer';
import Signup from './Signup/Signup';
import Cart from './Cart/Cart';
import Successbanner from './Banners/Sucessbanner';
import Infobanner from './Banners/Infobanner';
import Signin from './Signin/Signin';
import Notfound from './Notfound/Notfound';
import Slider from './Slider/Slider';
// import Alertbanner from './Banners/Alertbanner';


function App() {

  return (
    <>
      <Header />
      {/* <Slider /> */}
      <Products />
      <Products />
      <Footer />
      {/* <Signup />
      <Cart />
      <Successbanner />
      <Infobanner />
      <Alertbanner />
      <Signin />
      <Notfound />
      <Product /> */}
    </>
  )
}

export default App
