import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to homepage...
        history.push("/");
      })
      .catch((e) => alert(e.message));
    setEmail("");
    setPassword("");
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in, redirect to homepage...
        history.push("/");
      })
      .catch((e) => e.message);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-sign-in-btn" type="submit" onClick={login}>
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button className="login-register-btn" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
