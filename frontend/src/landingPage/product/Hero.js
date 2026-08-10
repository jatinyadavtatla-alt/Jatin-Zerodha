import React from "react";

function Hero(){
    return (
         <div className="container ">
            <div className="row text-center " style={{padding:"100px",fontFamily:"sans-serif" ,borderBottom: "1px solid #d4d3d3d4"}}>
                <h2>
                    Zerodha Products
                </h2>
                <p style={{fontSize:"20px"}}>
                    Sleek, modern, and intuitive trading platforms
                    <br/>
                     </p>  
                    <p>
                    Check out our <a style={{textDecoration:"none"}} href="https://www.investopedia.com/terms/o/offering.asp">
                        investment offerings
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                    
                    
                </p>
            </div>
            <div className="row m-5"  >
                <div className="col-7" style={{marginTop:'50px'}} >
                   <a href="https://kite-demo.zerodha.com/dashboard">
                    <img src="media/images/kite.png" alt="kite"/>
                   </a>
                </div>
                <div className="col  " style={{marginTop:"90px",marginLeft:"90px"}}>
                    <h2>KITE</h2>
                    <br/>
                    <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                    <div className="row">
                    <div className="col">
                        <a style={{textDecoration:"none"}} href="https://kite-demo.zerodha.com/dashboard">
                        Try Demo
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                    </div>
                    <div className="col">
                        <a style={{textDecoration:"none"}} href="https://kite.trade/docs/kite/">
                            Learn More
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                    </div>
                    </div>
                    <br/>
                    <div className="row">
                    <div className="col">
                       <a target="_blank" href="https://play.google.com/store/apps/details?id=com.zerodha.kite3 ">
                <img src="/media/images/googlePlayBadge copy.svg" alt="googlePlayBadge"/>
              </a>
                   
                    </div>
                    <div className="col">
                         <a target="_blank" href="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802">
                <img src="/media/images/appstoreBadge.svg" alt="appstoreBadge"/>
              </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;