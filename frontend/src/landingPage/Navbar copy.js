import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // Close on click outside or Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }
    function handleEscape(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary border-bottem"
        style={{ backgroundColor: "#ffffff", padding: "20px", position: "relative" }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/" style={{ paddingLeft: "50px" }}>
            <img src="media/images/logo.svg" alt="logo" style={{ width: "25%" }} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/product">Product</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/support">Support</Link>
              </li>

              {/* Menu icon button that opens the mega menu */}
              <li class="nav-item" style={{ position: "relative" }}>
                <button
                  ref={btnRef}
                  onClick={() => setMenuOpen((prev) => !prev)}
                  aria-expanded={menuOpen}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    padding: "6px",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>

                {/* Mega menu panel */}
                {menuOpen && (
                  <div
                    ref={menuRef}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 12px)",
                      right: 0,
                      width: "720px",
                      maxWidth: "90vw",
                      background: "#fff",
                      border: "1px solid #e6e6e6",
                      boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                      borderRadius: "8px",
                      padding: "28px 32px",
                      zIndex: 100,
                    }}
                  >
                    {/* Top row: product icons */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "16px",
                        paddingBottom: "24px",
                        borderBottom: "1px solid #e6e6e6",
                        marginBottom: "24px",
                      }}
                    >
                      {[
                        { title: "Kite", subtitle: "Trading platform" },
                        { title: "Console", subtitle: "Backoffice" },
                        { title: "Connect", subtitle: "Trading APIs" },
                        { title: "Coin", subtitle: "Mutual funds" },
                      ].map((item) => (
                        <a
                          key={item.title}
                          href=""
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            gap: "6px",
                            padding: "8px",
                            borderRadius: "6px",
                            textDecoration: "none",
                            color: "inherit",
                          }}
                          onMouseOver={(e) => (e.currentTarget.style.background = "#f7f7f7")}
                          onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          <div style={{ fontWeight: 600, fontSize: "14px" }}>{item.title}</div>
                          <div style={{ fontSize: "12px", color: "#6b7280" }}>{item.subtitle}</div>
                        </a>
                      ))}
                    </div>

                    {/* Bottom: link columns */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "24px",
                      }}
                    >
                      <div>
                        <h4 style={{ fontSize: "13px", margin: "0 0 12px" }}>Utilities</h4>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                          <li style={{ marginBottom: "10px" }}>
                            <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "14px" }}>Calculators</a>
                          </li>
                          <li style={{ marginBottom: "10px" }}>
                            <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "14px" }}>Brokerage calculator</a>
                          </li>
                          <li style={{ marginBottom: "10px" }}>
                            <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "14px" }}>Margin calculator</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ fontSize: "13px", margin: "0 0 12px" }}>Updates</h4>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                          <li style={{ marginBottom: "10px" }}>
                            <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "14px" }}>Blog</a>
                          </li>
                          <li style={{ marginBottom: "10px" }}>
                            <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "14px" }}>Circulars</a>
                          </li>
                          <li style={{ marginBottom: "10px" }}>
                            <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "14px" }}>Markets</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ fontSize: "13px", margin: "0 0 12px" }}>Education</h4>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                          <li style={{ marginBottom: "10px" }}>
                            <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "14px" }}>Varsity</a>
                          </li>
                          <li style={{ marginBottom: "10px" }}>
                            <a href="#" style={{ textDecoration: "none", color: "#6b7280", fontSize: "14px" }}>Trading Q&A</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;