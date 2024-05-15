import React from "react";
import Slider from "../Slider/Slider";
import Offers from "./Offers";
import Products from '../Products/Products.jsx'

function Home() {
  return (
    <>
    <Slider />
    <Products />
    <Offers />
    </>
  )
}

export default Home