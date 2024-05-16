import React from "react";
import Slider from "../Slider/Slider";
import Offers from "./Offers";
import Products from '../Products/Products.jsx'

function Home() {
  return (
    <>
    <div className="p-2 lg:p-10">
    <Slider />
    <Products />
    <Offers />
    </div>
    </>
  )
}

export default Home