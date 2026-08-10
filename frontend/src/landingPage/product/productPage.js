import React from "react";
import Navbar from "../Navbar copy";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./universe";
import Fotter from "../Fotter";

function productpage(){
    return (
        <>
        <Navbar />
        <Hero />
        <LeftSection />
        <RightSection />
        <Universe />
        <Fotter/>
        </>
    )
}

export default productpage;