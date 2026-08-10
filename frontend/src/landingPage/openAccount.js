import React from "react";
import { Link } from "react-router-dom";


function OpenAccount(){
    return (
        <div>
    <div className="container p-5">
      <div className="row text-center">
        <h2 className="mt-5 mb-3 tx">Open a Zerodha account</h2>
        <p className="hero-description">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button className="hero-signup-btn" >
         <Link to={"/signup/email"}>Sign up for free</Link>   
            </button>
      </div>
    </div>
        </div>
    )
}

export default OpenAccount;