import React, { useState, useEffect } from "react";
import api from "../utils/api";

function ProtectedRoute({ children }) {
  const [status, setStatus] = useState("loading"); // 'loading' | 'authed' | 'unauthed'

  useEffect(() => {
    api
      .get("/api/auth/verify")
      .then((res) => {
        setStatus(res.data.status ? "authed" : "unauthed");
      })
      .catch(() => setStatus("unauthed"));
  }, []);

  if (status === "loading") {
    return <div style={{ padding: "40px", textAlign: "center" }}>Loading...</div>;
  }

  if (status === "unauthed") {
    window.location.href = "http://localhost:3000/SignIn";
    return null;
  }

  return children;
}

export default ProtectedRoute;