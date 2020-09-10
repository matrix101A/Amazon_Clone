import React, { useState } from "react";
import "./login.css";

import { auth } from "./firebase";
import { Link, useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(history);
        history.push("/");
      })
      .catch((error) => console.log(error));
    //some fancy firebase stuff......
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //sucess !!
        if (auth) {
          history.push("/");
        }
        console.log(auth);
      })
      .catch((error) => console.log(error));
    //some fancy firebase stuff......
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In!</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In !
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon Fake's Conditions of Use and
          Privacy Notice.Pleack check o ur pricacy notice .
        </p>
        <button className="login__RegisterButton" onClick={register}>
          Create your account now !
        </button>
      </div>
    </div>
  );
}

export default Login;
