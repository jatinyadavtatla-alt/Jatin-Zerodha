import React from "react";

function Pricing(){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-5 mt-4">
                    <h2>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                        <br/>
                    <a style={{textDecoration:"none"}} href="https://example.com">
                            See Pricing
                            
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                    </p>

                </div>
                <div className="col-2" style={{display:"grid"}}>
                    <img src="media/images/pricing0 copy.svg" alt="pricing 0"/>
                    <p style={{gridColumn:"auto"}}>Free account
                        opening</p>
                </div>
                
                <div className="col-3" style={{width:"17%",display:"grid"}}>
                    <img src="media/images/intradayTrades copy.svg" alt="pricing 20"/>
                    <p>Free equity delivery
                        and direct mutual funds</p>
                </div>
                <div className="col-2 " style={{display:"grid"}}>
                <img src="media/images/pricing0 copy.svg" alt="pricing 0"/>
                    <p >Intraday and
                            F&O</p>

                </div>
                
            </div>
        </div>
    )
}

export default Pricing;