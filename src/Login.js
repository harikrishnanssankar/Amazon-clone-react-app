import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e =>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      history.push('/')
    })
    .catch(error => alert(error.message))

    //firebase login

  }
  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      console.log(auth);
      if (auth) {
        history.push('/')
      }

    })
    .catch(error => alert(error.message))
  }
  return (
    <div className="login">
      <div className="login__create">
        <Link to="/">
          <img
            className="login__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
            alt=""
          />
        </Link>
        <div className="login__container">
          <h1>Sign-In</h1>
          <form>
            <h5>Email(phone for mobile accounts)</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type='submit' onClick={signIn} className="login__signInButton">Sign In</button>
            <p>
              By continuing, you agree to Amazon-clone Conditions of Use and
              Privacy Notice.
            </p>
          </form>
        </div>
        <div className="login__container_2">
          <p>
            <span>New to Amazon?</span>
          </p>
          <button onClick={register} className="login__registerButton">
            Create your Amazon account
          </button>
        </div>
      </div>
      <div className="login__footer">
        <div className="login__footerLine1">
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>Help</p>
        </div>
        <div className="login__footerLine2">
          <p>&copy: 2020, Amazon-clone.Inc</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
