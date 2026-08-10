import React from "react";

function Universe(){
    return (
       <div>
        <div className="text-center" style={{marginTop:'100px'}}>
            <h2>The Zerodha Universe</h2>
            <p className="center"> Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className="container m-5">
        <div className="row m-5 " style={{marginLeft:'90px'}}>
            <div className="col-4">
                <a target="_blank" href="https://www.zerodhafundhouse.com/"  style={{textDecoration:'none'}}>
                <img src="/media/images/zerodhaFundhouse.png" alt="zerodhaFundhouse" style={{width:'250px'}}/> 
                 <p className="text-center" >Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
              </a>
            </div>
            <div className="col-4">
            <a target="_blank" href="https://sensibull.com/" style={{textDecoration:'none' }}>
                <img src="/media/images/sensibullLogo copy.svg" alt="sensibull" style={{width:'250px'}}/> 
                 <p className="text-center" style={{textDecoration:'none'}}>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
              </a>
            </div>
            <div className="col-4">
                <a target="_blank" href="https://www.tijorifinance.com/" style={{textDecoration:'none'}}>
                <img src="/media/images/tijori.svg" alt="tijori" style={{width:'200px'}}/> 
                 <p className="text-center" style={{textDecoration:'none'}}>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
              </a>
            </div>
        </div>
       <div className="row m-5 " style={{marginLeft:'90px'}}>
            <div className="col-4">
                <a target="_blank" href="https://www.streak.tech/"  style={{textDecoration:'none'}}>
                <img src="/media/images/streakLogo copy.png" alt="streakLogo" style={{width:'200px'}}/> 
                 <p className="text-center" >Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
              </a>
            </div>
            <div className="col-4">
            <a target="_blank" href="https://smallcase.zerodha.com/" style={{textDecoration:'none' }}>
                <img src="/media/images/smallcaseLogo copy.png" alt="smallcaseLogo" style={{width:'200px'}}/> 
                 <p className="text-center" style={{textDecoration:'none'}}>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
              </a>
            </div>
            <div className="col-4">
                <a target="_blank" href="https://joinditto.in/" style={{textDecoration:'none'}}>
                <img src="/media/images/dittoLogo copy.png" alt="ditto" style={{width:'200px'}}/> 
                 <p className="text-center" style={{textDecoration:'none'}}>Personalized advice on life
and health insurance. No spam
and no mis-selling.
</p>
              </a>
            </div>
        </div>
        </div>
       </div>
    )
}

export default Universe;