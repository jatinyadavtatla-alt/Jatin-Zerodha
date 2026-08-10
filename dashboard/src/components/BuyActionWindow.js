import React, { useState } from "react";
import api from "../utils/api";

function BuyActionWindow({ stock, mode, onClose, onOrderPlaced }) {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(stock.price);
  const [submitting, setSubmitting] = useState(false);

  const increment = () => setQty((prev) => prev + 1);
  const decrement = () => setQty((prev) => (prev > 1 ? prev - 1 : 1));

  const marginRequired = (qty * price * 0.2).toFixed(2);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await api.post("/newOrder", {
        name: stock.name,
        qty,
        price,
        mode,
      });
      if (onOrderPlaced) onOrderPlaced(); // lets parent refresh the Orders list if it's open
      onClose();
    } catch (err) {
      console.error("Failed to place order:", err);
      alert("Something went wrong placing the order.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "8px",
          width: "380px",
          padding: "20px",
          boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h5 style={{ margin: 0 }}>
            {mode === "BUY" ? "Buy" : "Sell"} {stock.name}
          </h5>
          <button
            onClick={onClose}
            style={{ border: "none", background: "none", fontSize: "18px", cursor: "pointer" }}
          >
            ×
          </button>
        </div>

        <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: "13px", color: "#6b7280" }}>Qty.</label>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
              <button
                onClick={decrement}
                style={{
                  width: "28px",
                  height: "28px",
                  border: "1px solid #e6e6e6",
                  borderRadius: "4px",
                  background: "#f7f7f7",
                  cursor: "pointer",
                }}
              >
                −
              </button>
              <input
                type="number"
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                style={{
                  width: "50px",
                  textAlign: "center",
                  padding: "6px",
                  border: "1px solid #e6e6e6",
                  borderRadius: "4px",
                }}
              />
              <button
                onClick={increment}
                style={{
                  width: "28px",
                  height: "28px",
                  border: "1px solid #e6e6e6",
                  borderRadius: "4px",
                  background: "#f7f7f7",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ fontSize: "13px", color: "#6b7280" }}>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #e6e6e6",
                borderRadius: "4px",
                marginTop: "4px",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div style={{ fontSize: "13px", color: "#6b7280" }}>
            Margin required
            <br />
            <span style={{ fontWeight: 600, color: "#1a1a1a" }}>₹{marginRequired}</span>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={handleSubmit}
              disabled={submitting}
              style={{
                padding: "10px 24px",
                border: "none",
                borderRadius: "6px",
                fontWeight: 600,
                color: "#fff",
                background: mode === "BUY" ? "#387ed1" : "#eb5b3c",
                cursor: submitting ? "default" : "pointer",
                opacity: submitting ? 0.7 : 1,
              }}
            >
              {submitting ? "Placing..." : mode === "BUY" ? "Buy" : "Sell"}
            </button>
            <button
              onClick={onClose}
              style={{
                padding: "10px 20px",
                border: "1px solid #e6e6e6",
                borderRadius: "6px",
                background: "#f7f7f7",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyActionWindow;