import React from "react";

function RightSection(){
    return (
        <div>
            <div className="container ">
                <div className="row" style={{marginLeft:"40px" }}>
                <div className="col-4 mx-3" style={{marginTop:"190px" }}>
                    <h2>Kite Connect API</h2>
                <p>
                    Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</p>
                <a style={{textDecoration:"none"}} href="https://developers.kite.trade/signup" >
                Kite Connect
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
                </div>
                <div className="col-7" style={{marginLeft:"55px", marginTop:'90px' }}>
                    <a href="https://developers.kite.trade/signup">
                        <img src="/media/images/kiteconnect.png" alt="conosle" />
                    </a>
                </div>
                </div>
            </div>
            <div className="container ">
            
            </div>
            <div className="row "  >
                <div className="col-7" style={{marginTop:'50px', marginLeft:"110px"}} >
                   <a href="https://play.google.com/store/apps/details?id=com.zerodha.varsity">
                    <img src="media/images/Varsity.png" alt="kite"/>
                   </a>
                </div>
                <div className="col  " style={{marginTop:"90px",marginRight:"90px"}}>
                    <h2>Varsity mobile</h2>
                    <br/>
                    <p>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
                    <div className="row">
                    </div>
                    <br/>
                    <div className="row">
                    <div className="col">
                       <a target="_blank" href="https://play.google.com/store/apps/details?id=com.zerodha.varsity ">
                <img src="/media/images/googlePlayBadge copy.svg" alt="googlePlayBadge"/>
              </a>
                    </div>
                    <div className="col">
                         <a target="_blank" href="https://apps.apple.com/in/app/zerodha-varsity/id1474610753">
                <img src="/media/images/appstoreBadge.svg" alt="appstoreBadge"/>
              </a>
                    </div>
                    </div>
                </div>

            </div>
            <div className="text-center m-5 fs-5" >
            <p class="landing-subheading text-center">Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/" style={{textDecoration:'none'}}>Zerodha.tech</a> blog.</p>
                 </div>
        </div>
    )
}

export default RightSection;