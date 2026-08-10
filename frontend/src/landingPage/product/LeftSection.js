import React from "react";

function LeftSection(){
    return (
        <div>
            <div className="container ">
                <div className="row" style={{marginLeft:"40px" }}>
                <div className="col-4 mx-3" style={{marginTop:"190px" }}>
                    <h2>Console</h2>
                <p>
                    The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.
                </p>
                <a style={{textDecoration:"none"}} href="https://kite.zerodha.com/connect/login?api_key=console&sess_id=wtwm0MVbKTNmNCHiyg327fEkQ81qWzB1" >
                Learn More 
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
                </div>
                <div className="col-7" style={{marginLeft:"40px" }}>
                    <a href="https://console.com/">
                        <img src="media/images/console copy.png" alt="conosle" />
                    </a>
                </div>
                </div>
            </div>
            <div className="container ">
            
            </div>
            <div className="row "  >
                <div className="col-7" style={{marginTop:'50px', marginLeft:"110px"}} >
                   <a href="https://coin.zerodha.com/">
                    <img src="media/images/coin.png" alt="kite"/>
                   </a>
                </div>
                <div className="col  " style={{marginTop:"90px",marginRight:"90px"}}>
                    <h2>Coin</h2>
                    <br/>
                    <p>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
                    <div className="row">
                    <div className="col">
                        <a style={{textDecoration:"none"}} href="https://kite.zerodha.com/connect/login?api_key=coinweb&sess_id=yoK3qQndSKUpabgN4S1hgxVd20g3NKzq">
                        Coin
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                    </div>
                    </div>
                    <br/>
                    <div className="row">
                    <div className="col">
                       <a target="_blank" href="https://play.google.com/store/apps/details?id=com.zerodha.coin ">
                <img src="/media/images/googlePlayBadge copy.svg" alt="googlePlayBadge"/>
              </a>
                    </div>
                    <div className="col">
                         <a target="_blank" href="https://apps.apple.com/in/app/coin-by-zerodha-mutual-funds/id1392892554">
                <img src="/media/images/appstoreBadge.svg" alt="appstoreBadge"/>
              </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LeftSection;