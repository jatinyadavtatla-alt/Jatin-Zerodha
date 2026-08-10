import React from "react";
import Hero from "./hero";
import Awards from "./Awards";
import Pricing from "./pricing";
import Education from "./Education";
import OpenAccount from "../openAccount";
import Fotter from "../Fotter";
import Navbar from "../Navbar copy";

function HomePage(){
    return (
        <>
        <Navbar />
        <Hero />
        <Awards />
        <Pricing />
        <Education />
        <OpenAccount />
        <Fotter />
        </>
    )
}

export default HomePage;