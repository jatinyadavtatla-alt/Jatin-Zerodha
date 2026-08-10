import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar copy";
import Fotter from "../Fotter";
import api from "../../utils/api";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/login", formData);
      if (res.data.success) {
        window.location.href = "http://localhost:3001"; // dashboard app
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <section className="py-5">
        <div className="container" style={{ maxWidth: "420px" }}>
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h2 className="fw-bold mb-1 text-center">Login</h2>
              <p className="text-secondary text-center mb-4">
                New account? <Link to="/signup/email">Sign up here</Link>
              </p>

              <form onSubmit={handleSubmit}>
                <label className="form-label small text-secondary">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control mb-3"
                  required
                />

                <label className="form-label small text-secondary">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control mb-4"
                  required
                />

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 fw-semibold"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>

              {error && (
                <p className="text-danger small text-center mt-3 mb-0">{error}</p>
              )}

              <hr className="my-4" />

              <p className="text-secondary small text-center mb-0">
                By logging in, you agree to the Zerodha{" "}
                <a href="">terms</a> & <a href="">privacy policy</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Fotter />
    </div>
  );
}

export default Login;