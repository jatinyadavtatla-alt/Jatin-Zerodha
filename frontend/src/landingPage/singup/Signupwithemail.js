import React, { useState } from "react";
import Navbar from "../Navbar copy";
import Fotter from "../Fotter";
import api from "../../utils/api";
import { Link } from "react-router-dom";

function SignUpWithEmail() {
  const [formData, setFormData] = useState({
    UserName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/signup", formData);
      if (res.data.success) {
        window.location.href = "http://localhost:3001"; // dashboard app
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div>
      <Navbar />
      <section className="py-5">
        <div className="container" style={{ maxWidth: "480px" }}>
          <h2 className="fw-bold mb-1 text-center">Sign up with Email</h2>
          <p className="text-secondary text-center mb-4">
            Create your account using your email and a password
          </p>
          <p>Already registered 
            <Link style={{textDecoration:"none"}} to={"/SignIn"}>SignIn</Link>
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="UserName"
              placeholder="Username"
              value={formData.UserName}
              onChange={handleChange}
              className="form-control mb-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control mb-3"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control mb-3"
            />

            <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold mb-3">
              Sign Up
            </button>
          </form>

          {error && <p className="text-danger small text-center">{error}</p>}

          <p className="text-secondary small text-center mb-0">
            By proceeding, you agree to the Zerodha <a href="#">terms</a> &{" "}
            <a href="#">privacy policy</a>
          </p>
          {/* <button className="hero-signup-btn" >
                   <Link to={"/loginPage"}>Sign up for free</Link>   
                      </button> */}
        </div>
      </section>
      <Fotter />
    </div>
  );
}

export default SignUpWithEmail;