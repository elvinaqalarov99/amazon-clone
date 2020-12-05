import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    if (email === "" && password === "")
      alert("Register a new user or Sign in");
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) history.push("/");
      })
      .catch((err) => alert(err));
  };

  const register = (e) => {
    e.preventDefault();
    if (email === "" && password === "")
      alert("Register a new user or Sign in");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) history.push("/");
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of use & Sale.
          Please see our Privacy Notice, our Cookies and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
