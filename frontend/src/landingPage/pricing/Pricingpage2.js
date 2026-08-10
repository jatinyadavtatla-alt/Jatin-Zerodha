import React from "react";
import Navbar from "../Navbar copy";
import Fotter from "../Fotter";
// import Brokerage from "./Brokerage";

function PricingPage2() {
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
              <div className="display-5 fw-bold" style={{ color: "#f5a623" }}>₹0</div>
              <h5 className="fw-semibold mt-2">Free equity delivery</h5>
              <p className="text-secondary small">
                All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
              </p>
            </div>
            <div className="col-md-4">
              <div className="display-5 fw-bold" style={{ color: "#f5a623" }}>₹20</div>
              <h5 className="fw-semibold mt-2">Intraday and F&amp;O trades</h5>
              <p className="text-secondary small">
                Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across
                equity, currency, and commodity trades. Flat ₹20 on all option trades.
              </p>
            </div>
            <div className="col-md-4">
              <div className="display-5 fw-bold" style={{ color: "#f5a623" }}>₹0</div>
              <h5 className="fw-semibold mt-2">Free direct MF</h5>
              <p className="text-secondary small">
                All direct mutual fund investments are absolutely free — ₹0 commissions &amp; DP charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brokerage table with tabs */}
      <section className="py-4">
        <div className="container">
          {/* <Brokerage /> */}
        </div>
      </section>

      {/* Charges for account opening */}
      <section className="py-5 border-top">
        <div className="container">
          <h3 className="fw-bold mb-4">Charges for account opening</h3>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Type of account</th>
                  <th>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Individual account</td>
                  <td><span className="badge bg-success">FREE</span></td>
                </tr>
                <tr>
                  <td>Minor account</td>
                  <td><span className="badge bg-success">FREE</span></td>
                </tr>
                <tr>
                  <td>NRI account</td>
                  <td>₹500</td>
                </tr>
                <tr>
                  <td>HUF account</td>
                  <td><span className="badge bg-success">FREE</span> (online) / ₹500 (offline)</td>
                </tr>
                <tr>
                  <td>Partnership, LLP, and Corporate accounts (offline only)</td>
                  <td>₹500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Demat AMC */}
      <section className="py-5 border-top">
        <div className="container">
          <h3 className="fw-bold mb-4">Demat AMC (Annual Maintenance Charge)</h3>
          <div className="border-start border-primary border-3 ps-3 mb-4">
            <p className="fw-semibold mb-0">Free for first year*</p>
          </div>
          <p>From second year onwards, for BSDA accounts:</p>
          <div className="table-responsive mb-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Value of holdings</th>
                  <th>AMC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Above ₹10 lakh</td>
                  <td>₹300 per year + 18% GST, charged quarterly</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-secondary small">
            For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.
          </p>
          <p className="text-secondary small">
            To learn more about BSDA, <a href="#">click here</a>. To learn more about AMC, <a href="#">click here</a>.
          </p>
          <p className="text-secondary small">*Resident individual accounts only.</p>
        </div>
      </section>

      {/* Optional value added services */}
      <section className="py-5 border-top">
        <div className="container">
          <h3 className="fw-bold mb-4">Charges for optional value added services</h3>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Billing Frequency</th>
                  <th>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tickertape</td>
                  <td>Monthly / Quarterly / Annual</td>
                  <td>Free: 0 | Pro: 249/699/2399</td>
                </tr>
                <tr>
                  <td>Smallcase</td>
                  <td>Per transaction</td>
                  <td>Buy &amp; Invest More: 100 | SIP: 10</td>
                </tr>
                <tr>
                  <td>Kite Connect</td>
                  <td>Monthly</td>
                  <td>Connect: 500 | Personal: Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Charges explained */}
      <section className="py-5 border-top">
        <div className="container">
          <h3 className="fw-bold mb-4">Charges explained</h3>
          <div className="row g-5">
            <div className="col-lg-6">
              <h6 className="fw-semibold">Securities/Commodities transaction tax</h6>
              <p className="text-secondary small">
                Tax by the government when transacting on the exchanges. Charged as above on both buy
                and sell sides when trading equity delivery. Charged only on selling side when trading
                intraday or on F&amp;O.
              </p>
              <p className="text-secondary small">
                When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important
                to keep a tab.
              </p>

              <h6 className="fw-semibold mt-4">Transaction/Turnover Charges</h6>
              <p className="text-secondary small">
                Charged by exchanges (NSE, BSE, MCX) on the value of your transactions, with rates that
                vary by exchange group and are revised periodically.
              </p>

              <h6 className="fw-semibold mt-4">NRI brokerage charges</h6>
              <ul className="text-secondary small">
                <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&amp;O (whichever is lower).</li>
                <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>₹500 + GST as yearly account maintenance charges (AMC).</li>
              </ul>

              <h6 className="fw-semibold mt-4">Account with debit balance</h6>
              <p className="text-secondary small">
                If the account is in debit balance, any order placed will be charged ₹40 per executed
                order instead of ₹20 per executed order.
              </p>

              <h6 className="fw-semibold mt-4">Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6>
              <ul className="text-secondary small">
                <li>Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
                <li>Options - ₹0.01 per crore + GST traded value (premium value).</li>
                <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
              </ul>

              <h6 className="fw-semibold mt-4">Margin Trading Facility (MTF)</h6>
              <ul className="text-secondary small">
                <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount, applied from T+1 day until the day MTF stocks are sold.</li>
                <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
              </ul>
            </div>

            <div className="col-lg-6">
              <h6 className="fw-semibold">GST</h6>
              <p className="text-secondary small">
                Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges).
              </p>

              <h6 className="fw-semibold mt-4">SEBI Charges</h6>
              <p className="text-secondary small">
                Charged at ₹10 per crore + GST by the Securities and Exchange Board of India for regulating the markets.
              </p>

              <h6 className="fw-semibold mt-4">DP (Depository participant) charges</h6>
              <p className="text-secondary small">
                ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading
                account ledger when stocks are sold, irrespective of quantity. Female demat account
                holders (as first holder) enjoy a discount of ₹0.25 per transaction on the CDSL fee.
                Debit transactions of mutual funds &amp; bonds get an additional discount of ₹0.25 on
                the CDSL fee.
              </p>

              <h6 className="fw-semibold mt-4">Pledging charges</h6>
              <p className="text-secondary small">₹30 + GST per pledge request per ISIN.</p>

              <h6 className="fw-semibold mt-4">AMC (Account maintenance charges)</h6>
              <p className="text-secondary small">
                Free for the first year on all new resident individual accounts. For BSDA demat accounts,
                zero charges if the holding value is less than ₹4,00,000. For non-BSDA demat accounts,
                ₹300/year + 18% GST, charged quarterly (90 days).
              </p>

              <h6 className="fw-semibold mt-4">Corporate action order charges</h6>
              <p className="text-secondary small">
                ₹20 plus GST charged for OFS / buyback / takeover / delisting orders placed through Console.
              </p>

              <h6 className="fw-semibold mt-4">Off-market transfer charges</h6>
              <p className="text-secondary small">₹25 per transaction.</p>

              <h6 className="fw-semibold mt-4">Physical CMR request</h6>
              <p className="text-secondary small">
                First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.
              </p>

              <h6 className="fw-semibold mt-4">Payment gateway charges</h6>
              <p className="text-secondary small">₹9 + GST (not levied on transfers done via UPI).</p>

              <h6 className="fw-semibold mt-4">Delayed Payment Charges</h6>
              <p className="text-secondary small">
                Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.
              </p>

              <h6 className="fw-semibold mt-4">Trading using 3-in-1 account with block functionality</h6>
              <ul className="text-secondary small">
                <li>Delivery &amp; MTF Brokerage: 0.5% per executed order.</li>
                <li>Intraday Brokerage: 0.05% per executed order.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-5 border-top">
        <div className="container">
          <h4 className="fw-bold mb-3">Disclaimer</h4>
          <p className="text-secondary small">
            For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who
            opt to receive physical contract notes will be charged ₹20 per contract note plus courier
            charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All
            statutory and regulatory charges will be levied at actuals. Brokerage is also charged on
            expired, exercised, and assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or
            ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value
            will be charged for contracts where physical delivery happens. For netted off positions in
            physically settled contracts, a brokerage of 0.1% will be charged.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PricingPage2;