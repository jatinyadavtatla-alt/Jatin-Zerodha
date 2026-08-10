import React from "react";


function Awards(){
    return (
        <div className="container mt-5">
            <div className="row">
                <diV className="col-5">
                    <h2>Trust with confidence</h2>
                    <h3>
                    Customer-first always
                    </h3>
                    <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India'slargest broker; contributing to 15% of daily retail exchange volumes in India</p>
                    
                    <h3>No spam or gimmicks </h3>
                    
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.<a  href="https://example.com" style={{ color: "#155bb0",cursor:"hover",textDecoration:"none" }} className="highlight">Our philosophies.</a></p>

                    <h3>The Zerodha universe</h3>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3>Do better with money</h3>
                    <p>With initiatives like <a href="https://example.com"  style={{ color: "#387ed1",textDecoration:"none", }} className="highlight">Nudge</a> and <a href="https://example.com" style={{ color: "#387ed1",textDecoration:"none" }} className="highlight">Kill Switch</a> Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    
                </diV>
                <diV className="col-7">
                    <div>
                    <img src="media/images/ecosystem copy.png" alt="ecosystem" style={{width:"100%"}}/>
                    </div>
                    <div className="row ">
                        <p className="col text-center ">
                            <a style={{textDecoration:"none"}} href="https://example.com">
                            Expolore our products
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </p>
                        <p className="col text-center pl-5">
                            <a style={{textDecoration:"none"}} href="https://kite-demo.zerodha.com/dashboard">
                            Try Kite demo
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                            
                        </p>
                        
                    </div>
                </diV>
            </div>
            <div className="row" style={{backgroundColor:"rgb(236, 250, 254)"}}>
                
                <div  className="col">
                <img  style={{width:"100%",height:"100%"}} src="media/images/kc-logo-landing.svg " alt="kc-logo-landing"></img>
                
                </div>
                <p  className="col " >Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more.
                    <a style={{textDecoration:"none"}} href="https://example.com">
                            Expolore
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                     </p>
                <img style={{width:"50%",height:"5 0%"}} className="col" src="media/images/kc-banner-image.svg" alt="kc-banner"></img>
            </div>
        </div>
        
    )
}

export default Awards;