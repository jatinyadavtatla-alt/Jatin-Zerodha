import React from "react";

function Education(){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                        <img src="media/images/education copy.svg" alt="educationCover" />
                </div>
                <div className="col" style={{paddingTop:"30px"}} >
                    <h2 >
                        Free and open market education
                    </h2>
                    <p>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        <br />
                        <br />

                        <a style={{textDecoration:"none"}} href="https://zerodha.com/varsity/">
                            Varsity
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                            <br />
                            <br />
                            <br />
                            <br />
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                        <br/>
                        <br />
                        <a style={{textDecoration:"none"}} href="https://tradingqna.com/">
                            Tranding Q&A
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education;