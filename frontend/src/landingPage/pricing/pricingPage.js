import React from "react";
import Navbar from "../Navbar copy";
import Hero from "./hero";
import Brokerage from "./Brokerage";
import Fotter from "../Fotter";
import PricingPage2 from "./Pricingpage2";

function PricingPage(){
    return (
        <>
        <Navbar />
        {/* <Hero /> */}
        <Brokerage />
        <PricingPage2/>
        <Fotter />
        </>
    )
}

export default PricingPage;