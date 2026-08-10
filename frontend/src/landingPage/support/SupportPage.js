// import React from "react";
// import Navbar from "../Navbar copy";
// import createTicket from "./createTicket";
// import Hero from "./hero";
// import Fotter from "../Fotter";

// function supportpage(){
//     return (
//         <>
//         <Navbar />
//         <Hero />
//         <createTicket />
//         <Fotter />
//         </>
//     )
// }

// export default supportpage;







import React, { useState } from "react";
import Navbar from "../Navbar copy";
import Fotter from "../Fotter";
import Hero from "./hero";

const categories = [
  {
    icon: "➕",
    title: "Account Opening",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    icon: "👤",
    title: "Your Zerodha Account",
    items: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],
  },
  {
    icon: "⤺",
    title: "Kite",
    items: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
    ],
  },
  {
    icon: "₹",
    title: "Funds",
    items: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
  },
  {
    icon: "◎",
    title: "Console",
    items: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
    ],
  },
  {
    icon: "🕐",
    title: "Coin",
    items: [
      "Mutual funds",
      "National Pension Scheme (NPS)",
      "Fixed Deposit (FD)",
      "Features on Coin",
      "Payments and Orders",
      "General",
    ],
  },
];

function CategoryAccordion({ category, isOpen, onToggle }) {
  return (
    <div className="border rounded mb-3">
      <button
        onClick={onToggle}
        className="w-100 d-flex justify-content-between align-items-center px-4 py-3 bg-white border-0"
        style={{ fontSize: "1.1rem" }}
      >
        <span>
          <span className="me-3">{category.icon}</span>
          {category.title}
        </span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <ul className="list-unstyled px-4 pb-4 mb-0">
          {category.items.map((item) => (
            <li key={item} className="mb-3">
              <a href="#" className="text-primary text-decoration-none">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SupportPage() {
  const [openCategory, setOpenCategory] = useState("Account Opening");

  const toggleCategory = (title) => {
    setOpenCategory((prev) => (prev === title ? null : title));
  };

  return (
    <div>
      <Navbar />
      <Hero />

      <section className="pb-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              {categories.map((category) => (
                <CategoryAccordion
                  key={category.title}
                  category={category}
                  isOpen={openCategory === category.title}
                  onToggle={() => toggleCategory(category.title)}
                />
              ))}
            </div>

            <div className="col-lg-4">
              <div
                className="border-start border-warning border-3 p-3 mb-4"
                style={{ background: "#fdf6ec" }}
              >
                <ul className="list-unstyled mb-0">
                  <li className="mb-3">
                    <a href="#" className="text-primary text-decoration-none">
                      [Resolved] Issue with price updates and order placement in certain option strikes on BSE
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary text-decoration-none">
                      Latest Intraday leverages and Square-off timings
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border rounded p-3">
                <h6 className="fw-bold mb-3">Quick links</h6>
                <ol className="ps-3 mb-0">
                  <li className="mb-3">
                    <a href="#" className="text-primary text-decoration-none">
                      Track account opening
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="text-primary text-decoration-none">
                      Track segment activation
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="text-primary text-decoration-none">
                      Intraday margins
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="text-primary text-decoration-none">
                      Kite user manual
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary text-decoration-none">
                      Learn how to create a ticket
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Fotter />
    </div>
  );
}

export default SupportPage;