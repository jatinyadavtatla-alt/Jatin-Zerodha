import React from "react";

function Team(){
    return (
        <div>
            <h2 className="text-center m-5 " style={{fontFamily:"sans-serif"}}>People</h2>
        <div className="container ">
            <div className="row my-5">
            <div className="col-4 m-4 text-center"  >
                <img src="media/images/nithinKamath copy.jpg" alt="nithinKamath" style={{borderRadius:"50%",width:"80%",marginLeft:"20px"}}/>
                
                <h4 >
                    <br/>
                    Nithin Kamath</h4>
                
                <h5>Founder, CEO</h5>
            </div>
            <div className="col py-3 px-4" >
                <p>
                    Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    <br/>
                    <br/>
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    <br/>
                    <br/>
                    Playing basketball is his zen.
                    <br/>
                    <br/>
                    Connect on
                     <a href="https://rainmatter.com/" target="_blank" style={{textDecoration:"none"}}> Homepage </a>
                     /
                      <a href="https://rainmatter.com/" target="_blank" style={{textDecoration:"none"}}> TradingQnA </a>
                      / <a href="https://rainmatter.com/" target="_blank" style={{textDecoration:"none"}}> Twitter </a>
                </p>
            </div>
            </div>
            <div className="row my-5 text-center" >
                <div className="col">
                <img src="media/images/Nikhil.jpg" alt="nithinKamath" style={{borderRadius:"50%",width:"70%",paddingBottom:"20px"}}/>
                <h5>Nikhil Kamath</h5>
                <p text-grey>
                    Co-founder & CFO
                </p>
                </div>
                <div className="col">
                <img src="media/images/Kailash.jpg" alt="nithinKamath" style={{borderRadius:"50%",width:"70%",paddingBottom:"20px"}}/>
                <h5>Dr. Kailash Nadh</h5>
                <p text-grey>CTO</p>
                </div>
                <div className="col">
                <img src="media/images/Venu.jpg" alt="nithinKamath" style={{borderRadius:"50%",width:"70%",marginLeft:"20px",paddingBottom:"20px"}}/>
                <h5>Venu Madhav</h5>
                <p text-grey>COO</p>
                </div>
            </div>
            <div className="row my-5 text-center" >
                <div className="col">
                <img src="media/images/Seema.jpg" alt="nithinKamath" style={{borderRadius:"50%",width:"70%",paddingBottom:"20px"}}/>
                <h5>Seema Patil</h5>
                <p text-grey>Director</p>
                </div>
                <div className="col">
                <img src="media/images/Karthik.jpg" alt="nithinKamath" style={{borderRadius:"50%",width:"70%",paddingBottom:"20px"}}/>
                <h5>Karthik Rangappa</h5>
                <p text-grey>Chief of Education</p>
                </div>
                <div className="col">₹
                <img src="media/images/Austin.jpg" alt="nithinKamath" style={{borderRadius:"50%",width:"70%",marginLeft:"20px",paddingBottom:"20px"}}/>
                <h5>Austin Prakesh</h5>
                <p text-grey>Director Strategy</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Team;