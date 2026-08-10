import React, { useState } from "react";
import Fotter from "../Fotter";
import Navbar from "../Navbar copy";
import OpenAccount from "../openAccount";

function SignUp() {
  const [phone, setPhone] = useState("");

  return (
    <div>
        <Navbar/>
        
      {/* Hero / OTP section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-6 ">
              <h1 className="fw-bold mb-3" style={{ fontSize: "2.75rem" }}>
                Open a free demat and trading account online
              </h1>
              <p className="text-secondary fs-5 mb-5">
                Start investing brokerage free and join a community of 1.6+
                crore investors and traders
              </p>

              {/* Placeholder illustration area representing the product mockups */}
              <div
                className="rounded d-flex align-items-center justify-content-center"
                style={{ minHeight: "320px" }}
              >
                <img src="/media/images/account_open.svg" alt="open account" />
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1 " st>
              <h3 className="fw-bold mb-1">Signup now</h3>
              <p className="text-secondary mb-4">Or track your existing application</p>

              <div className="border rounded d-flex mb-3 overflow-hidden">
                <span className="d-flex align-items-center px-3 bg-white border-end fw-semibold">
                  🇮🇳 +91
                </span>
                <input
                  type="tel"
                  className="form-control border-0"
                  placeholder="Enter your mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={10}
                  style={{ boxShadow: "none" }}
                />
              </div>

              <button className="btn btn-primary w-100 py-2 fw-semibold mb-4">
                Get OTP
              </button>

              <p className="text-secondary small mb-0">
                By proceeding, you agree to the Zerodha <a href="#">terms</a> &{" "}
                <a href="#">privacy policy</a>
              </p>

              <hr />

              <p className="small mb-0">
                Looking to open NRI account? <a href="#">Click here</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment options */}
      <section className="py-5 border-top">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Investment options with Zerodha demat account
          </h2>

          <div className="row g-5 align-items-center mb-5">
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-4">
                <div style={{ width: "120px", height: "100px" }}
                >
                    <img src="/media/images/stocks-acop.svg" alt="stocks-acop"/>
                </div>
                <div>
                  <h4 className="fw-semibold">Stocks</h4>
                  <p className="text-secondary mb-0">
                    Invest in all exchange-listed securities
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-4">
                <div  style={{ width: "120px", height: "100px" }}
                >
                   <img src="/media/images/mf-acop.svg" alt="mf-acop"/>
                </div>
                <div>
                  <h4 className="fw-semibold">Mutual funds</h4>
                  <p className="text-secondary mb-0">
                    Invest in commission-free direct mutual funds
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-5 align-items-center mb-5">
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-4">
                <div style={{ width: "120px", height: "100px" }}>
                    <img src="/media/images/ipo-acop.svg" alt="ipo-acop"/>
                </div>
                <div>
                  <h4 className="fw-semibold">IPO</h4>
                  <p className="text-secondary mb-0">
                    Apply to the latest IPOs instantly via UPI
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-4">
                <div
                  style={{ width: "120px", height: "100px" }}
                >
                    <img src="/media/images/fo-acop.svg" alt="future and options"/>
                </div>
                <div>
                  <h4 className="fw-semibold">Futures &amp; options</h4>
                  <p className="text-secondary mb-0">
                    Hedge and mitigate market risk through simplified F&amp;O trading
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn-primary px-4 py-2 fw-semibold">
              Explore Investments
            </button>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-5 border-top">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Steps to open a demat account with Zerodha
          </h2>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div
                className=" rounded d-flex align-items-center justify-content-center"
                style={{ minHeight: "320px" }}
              >
                <img src="/media/images/steps-acop.svg" alt="steps-acop"/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-start gap-3 pb-4 mb-4 border-bottom">
                <span className="badge rounded-pill bg-light text-dark border fs-6 fw-semibold px-3 py-2">
                  01
                </span>
                <h5 className="fw-semibold mb-0 pt-1">Enter the requested details</h5>
              </div>
              <div className="d-flex align-items-start gap-3 pb-4 mb-4 border-bottom">
                <span className="badge rounded-pill bg-light text-dark border fs-6 fw-semibold px-3 py-2">
                  02
                </span>
                <h5 className="fw-semibold mb-0 pt-1">Complete e-sign &amp; verification</h5>
              </div>
              <div className="d-flex align-items-start gap-3">
                <span className="badge rounded-pill bg-light text-dark border fs-6 fw-semibold px-3 py-2">
                  03
                </span>
                <h5 className="fw-semibold mb-0 pt-1">Start investing!</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-5 border-top">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div
                className=" rounded d-flex align-items-center justify-content-center mb-4"
                style={{ minHeight: "260px" }}
              >
               <img src="/media/images/acop-benefits (1).svg" alt="acop"/>
              </div>
              <h2 className="fw-bold">Benefits of opening a Zerodha demat account</h2>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="mb-4">
                <h5 className="fw-semibold">Unbeatable pricing</h5>
                <p className="text-secondary">
                  Zero charges for equity &amp; mutual fund investments. Flat ₹20
                  fees for intraday and F&amp;O trades.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="fw-semibold">Best investing experience</h5>
                <p className="text-secondary">
                  Simple and intuitive trading platform with an easy-to-understand
                  user interface.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="fw-semibold">No spam or gimmicks</h5>
                <p className="text-secondary">
                  Committed to transparency — no gimmicks, spam, "gamification",
                  or intrusive push notifications.
                </p>
              </div>
              <div>
                <h5 className="fw-semibold">The Zerodha universe</h5>
                <p className="text-secondary mb-0">
                  More than just an app — gain free access to the entire
                  ecosystem of our partner products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account types */}
      <section className="py-5 border-top">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Explore different account types</h2>
          <div className="row g-4">
            {[
              { icon: "👤", title: "Individual Account", desc: "Invest in equity, mutual funds and derivatives" },
              { icon: "👪", title: "HUF Account", desc: "Make tax-efficient investments for your family" },
              { icon: "🌐", title: "NRI Account", desc: "Invest in equity, mutual funds, debentures, and more" },
              { icon: "🧒", title: "Minor Account", desc: "Teach your little ones about money & invest for their future with them" },
              { icon: "🏢", title: "Corporate / LLP / Partnership", desc: "Manage your business surplus and investments easily" },
            ].map((item) => (
              <div className="col-md-4" key={item.title}>
                <div className="border rounded p-4 h-100">
                  <div
                    className="bg-light rounded-circle d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "48px", height: "48px" }}
                  >
                    {item.icon}
                  </div>
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p className="text-secondary small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5 border-top">
        <div className="container" style={{ maxWidth: "900px" }}>
          <h2 className="fw-bold mb-5">FAQs</h2>
          <div className="accordion" id="faqAccordion">
            {[
              { q: "What is a Zerodha account", a: "A Zerodha account refers to a combined demat and trading account that lets you buy, sell, and hold securities digitally." },
              { q: "What documents are required to open a demat account?", a: "PAN, Aadhaar linked to your mobile number, a cancelled cheque or bank statement, and income proof if trading in Futures & options." },
              { q: "Is Zerodha account opening free?", a: "Yes, opening an account with Zerodha is completely free." },
              { q: "Are there any AMC (Account Maintenance Charges) for a demat account?", a: "AMC charges may apply depending on the account type; check the pricing page for current details." },
              { q: "Can I open a demat account without a bank account?", a: "No, a bank account in your name is required to open a demat account." },
              { q: "What is a Basic Services Demat Account (BSDA)?", a: "A BSDA is a demat account with reduced charges for investors holding securities below a certain value threshold." },
              { q: "Can I open a demat and trading account using the mobile app?", a: "Yes, the entire account opening process can be completed using the mobile app." },
            ].map((item, i) => (
              <div key={i}>
                <hr className="text-primary" style={{ opacity: 1, borderTop: "2px solid #4b7bec", width: "80px" }} />
                <div className="accordion-item border-0">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed px-0 fw-normal fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${i}`}
                    >
                      {item.q}
                    </button>
                  </h2>
                  <div id={`faq${i}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body px-0 text-secondary">{item.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OpenAccount/>
            <Fotter/>
    </div>
  );
}

export default SignUp;