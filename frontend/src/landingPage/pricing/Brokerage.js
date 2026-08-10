import React, { useState } from "react";

const chargesData = {
  Equity: {
    columns: ["Equity delivery", "Equity intraday", "F&O - Futures", "F&O - Options"],
    rows: [
      {
        label: "Brokerage",
        values: [
          "Zero Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order",
        ],
      },
      {
        label: "STT/CTT",
        values: [
          "0.1% on buy & sell",
          "0.025% on the sell side",
          "0.05% on the sell side",
          "0.15% of the intrinsic value on options that are bought and exercised; 0.15% on sell side (on premium)",
        ],
      },
      {
        label: "Transaction charges",
        values: [
          "NSE: 0.00307% | BSE: 0.00375%",
          "NSE: 0.00307% | BSE: 0.00375%",
          "NSE: 0.00183% | BSE: 0",
          "NSE: 0.03553% (on premium) | BSE: 0.0325% (on premium)",
        ],
      },
      {
        label: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
      },
      {
        label: "SEBI charges",
        values: ["₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
      },
      {
        label: "Stamp charges",
        values: [
          "0.015% or ₹1500 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      },
    ],
  },
  Currency: {
    columns: ["Currency Futures", "Currency Options"],
    rows: [
      { label: "Brokerage", values: ["0.03% or Rs. 20/executed order, whichever is lower", "Flat ₹20 per executed order"] },
      { label: "STT/CTT", values: ["No STT", "No STT"] },
      { label: "Transaction charges", values: ["NSE: 0.0009%", "NSE: 0.035% (on premium)"] },
      { label: "GST", values: ["18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"] },
      { label: "SEBI charges", values: ["₹10 / crore", "₹10 / crore"] },
      { label: "Stamp charges", values: ["0.0001% on buy side", "0.0001% on buy side"] },
    ],
  },
  Commodity: {
    columns: ["Commodity Futures", "Commodity Options"],
    rows: [
      { label: "Brokerage", values: ["0.03% or Rs. 20/executed order, whichever is lower", "Flat ₹20 per executed order"] },
      { label: "STT/CTT", values: ["0.01% on sell side (non-agri)", "0.05% on sell side"] },
      { label: "Transaction charges", values: ["MCX: 0.0026%", "MCX: 0.05% (on premium)"] },
      { label: "GST", values: ["18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"] },
      { label: "SEBI charges", values: ["₹10 / crore", "₹10 / crore"] },
      { label: "Stamp charges", values: ["0.002% on buy side", "0.003% on buy side"] },
    ],
  },
};

function Brokerage() {
  const [activeTab, setActiveTab] = useState("Equity");
  const current = chargesData[activeTab];

  return (
    <div style={{margin:"90px"}}>
      <div className="d-flex gap-4 border-bottom mb-4 " >
        {Object.keys(chargesData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="btn btn-link text-decoration-none px-0 pb-2"
            style={{
              color: activeTab === tab ? "#387ed1" : "#1a1a1a",
              borderBottom: activeTab === tab ? "2px solid #387ed1" : "2px solid transparent",
              borderRadius: 0,
              fontSize: "1.1rem",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              {current.columns.map((col) => (
                <th key={col} className="fw-semibold">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {current.rows.map((row) => (
              <tr key={row.label}>
                <td className="text-secondary fw-semibold" style={{ width: "160px" }}>{row.label}</td>
                {row.values.map((val, i) => (
                  <td key={i}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4">
        <a href="#">Calculate your costs upfront</a> using our brokerage calculator
      </p>
    </div>
  );
}

export default Brokerage;