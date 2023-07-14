import React, { useState } from "react";

const Signin = ({ loadUser, onRouteChange }) => {
  const [state, setState] = useState({
    signInEmail: "",
    signInPassword: "",
  });

  const onEmailChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      signInEmail: event.target.value,
    }));
  };

  const onPasswordChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      signInPassword: event.target.value,
    }));
  };

  const onSubmitSignIn = () => {
    try {
      fetch("https://face-recognition-brain-backend.onrender.com/signin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: state.signInEmail,
          password: state.signInPassword,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (user._id) {
            loadUser(user);
            onRouteChange("home");
          }
        });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="container display">
      <div className="container homepage">
        <p className="heading">Sign In</p>
        <div>
          <label className="form-title" htmlFor="email-address">
            Email
          </label>
          <br />
          <input
            className="input-area"
            type="email"
            name="email-address"
            id="email-address"
            onChange={onEmailChange}
            onFocus={(event) => {
              event.target.style.background = "black";
            }}
            onBlur={(event) => {
              event.target.style.background = "";
            }}
          />
        </div>
        <div>
          <label className="form-title" htmlFor="password">
            Password
          </label>
          <br />
          <input
            className="input-area"
            type="password"
            name="password"
            id="password"
            onChange={onPasswordChange}
            onFocus={(event) => {
              event.target.style.background = "black";
            }}
            onBlur={(event) => {
              event.target.style.background = "";
            }}
          />
        </div>
        <div>
          <button
            onClick={onSubmitSignIn}
            type="submit"
            value="Sign in"
            className="signin-button"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
