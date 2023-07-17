import React, { useState } from "react";
import Alert from "./Alert";

const Signin = ({ loadUser, onRouteChange }) => {
  const [state, setState] = useState({
    signInEmail: "",
    signInPassword: "",
    showAlert: false,
    alertMessage: "",
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
    const { signInEmail, signInPassword } = state;
    if (!signInEmail || !signInPassword) {
      setState((prevState) => ({
        ...prevState,
        showAlert: true,
        alertMessage: "Please enter both email and password.",
      }));
      return;
    }

    try {
      fetch(`${process.env.REACT_APP_SERVER}/signin`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: signInEmail,
          password: signInPassword,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (user._id) {
            loadUser(user);
            onRouteChange("home");
          } else {
            setState((prevState) => ({
              ...prevState,
              showAlert: true,
              alertMessage: "Invalid Credentials.",
            }));
          }
        });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleCloseAlert = () => {
    setState((prevState) => ({
      ...prevState,
      showAlert: false,
      alertMessage: "",
    }));
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
        {state.showAlert && (
          <Alert message={state.alertMessage} onClose={handleCloseAlert} />
        )}
      </div>
    </div>
  );
};

export default Signin;
