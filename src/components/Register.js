import React, { useState } from "react";
import Alert from "./Alert";

const Register = ({ loadUser, onRouteChange }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
    showAlert: false,
    alertMessage: "",
  });

  const onNameChange = (event) => {
    setState((prevState) => ({ ...prevState, name: event.target.value }));
  };

  const onEmailChange = (event) => {
    setState((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const onPasswordChange = (event) => {
    setState((prevState) => ({ ...prevState, password: event.target.value }));
  };

  const handleCloseAlert = () => {
    setState((prevState) => ({
      ...prevState,
      showAlert: false,
      alertMessage: "",
    }));
  };

  const onSubmitSignIn = () => {
    const { email, password, name } = state;
    if (!email || !password || !name) {
      setState((prevState) => ({
        ...prevState,
        showAlert: true,
        alertMessage: "Please fill in all the fields.",
      }));
      return;
    }

    try {
      fetch(`${process.env.REACT_APP_SERVER}/register`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          name,
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
        <p className="heading">Register</p>
        <div className="container">
          <label className="form-title" htmlFor="name">
            Name
          </label>
          <br />
          <input
            className="input-area"
            type="text"
            name="name"
            id="name"
            onChange={onNameChange}
            onFocus={(event) => {
              event.target.style.background = "black";
            }}
            onBlur={(event) => {
              event.target.style.background = "";
            }}
          />
        </div>
        <div className="container ">
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
        <div className="container">
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
            Register
          </button>
        </div>
        {state.showAlert && (
          <Alert message={state.alertMessage} onClose={handleCloseAlert} />
        )}
      </div>
    </div>
  );
};

export default Register;
