import React from "react";

function Hero() {
  return (
    <div>
      {/* Header */}
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="fw-bold">Charges</h1>
          <p className="text-secondary fs-5">List of all charges and taxes</p>
        </div>
      </section>

      {/* Highlight stats */}
      <section className="py-4">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="display-5 fw-bold" style={{ color: "#f5a623" }}>
                ₹0
              </div>
              <h5 className="fw-semibold mt-2">Free equity delivery</h5>
              <p className="text-secondary small">
                All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
              </p>
            </div>

            <div className="col-md-4">
              <div className="display-5 fw-bold" style={{ color: "#f5a623" }}>
                ₹20
              </div>
              <h5 className="fw-semibold mt-2">Intraday and F&amp;O trades</h5>
              <p className="text-secondary small">
                Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across
                equity, currency, and commodity trades. Flat ₹20 on all option trades.
              </p>
            </div>

            <div className="col-md-4">
              <div className="display-5 fw-bold" style={{ color: "#f5a623" }}>
                ₹0
              </div>
              <h5 className="fw-semibold mt-2">Free direct MF</h5>
              <p className="text-secondary small">
                All direct mutual fund investments are absolutely free — ₹0 commissions &amp; DP charges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;