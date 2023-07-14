import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import Navigation from "./components/Navigation.js";
import Signin from "./components/Signin.js";
import Register from "./components/Register.js";
import FaceRecognition from "./components/FaceRecognition.js";
import Logo from "./components/Logo.js";
import ImageLinkForm from "./components/ImageLinkForm.js";

const returnClarifaiRequestOptions = (imageURL) => {
  const PAT = process.env.REACT_APP_API_PAT;
  const USER_ID = process.env.REACT_APP_API_USER_ID_NAME;
  const APP_ID = process.env.REACT_APP_USER_APP;
  const IMAGE_URL = imageURL;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };
  return requestOptions;
};

const initialState = {
  input: "",
  imageURL: "",
  box: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

const App = () => {
  const [state, setState] = useState(initialState);
  const clearImage = () => {
    console.log("Clear Image function called");
    setState((prevState) => ({
      ...prevState,
      input: "",
      imageURL: "",
      box: {},
    }));
  };

  const loadUser = (data) => {
    setState((prevState) => ({
      ...prevState,
      user: {
        id: data._id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    }));
  };

  const calculateFaceLocation = (data) => {
    const clarifaiFaces = data.outputs[0].data.regions.map(
      (region) => region.region_info.bounding_box
    );
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    const faceBoxes = clarifaiFaces.map((clarifaiFace) => {
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - clarifaiFace.right_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height,
      };
    });

    return faceBoxes;
  };

  const displayFaceBox = (boxes) => {
    setState((prevState) => ({ ...prevState, box: boxes }));
  };

  const onInputChange = (event) => {
    setState((prevState) => ({ ...prevState, input: event.target.value }));
  };

  const onButtonSubmit = () => {
    setState((prevState) => ({ ...prevState, imageURL: prevState.input }));

    try {
      fetch(
        "https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs",
        returnClarifaiRequestOptions(state.input)
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response) {
            try {
              fetch(
                "https://face-recognition-brain-backend.onrender.com/image",
                {
                  method: "put",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    id: state.user.id,
                  }),
                }
              )
                .then((response) => response.json())
                .then((count) => {
                  setState((prevState) => ({
                    ...prevState,
                    user: { ...prevState.user, entries: count },
                  }));
                });
            } catch (error) {
              console.log("Error:", error);
            }
          }
          displayFaceBox(calculateFaceLocation(response));
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const onRouteChange = (route) => {
    if (route === "signout") {
      setState(initialState);
      clearImage();
    } else if (route === "home") {
      setState((prevState) => ({ ...prevState, isSignedIn: true }));
    }
    setState((prevState) => ({ ...prevState, route: route }));
  };

  const { isSignedIn, imageURL, route, box } = state;
  return (
    <div className="App">
      <ParticlesBg type="cobweb" color="#f1ebeb" bg={true} />
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      <Logo />
      {route === "home" ? (
        <div>
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
            name={state.user.name}
            entries={state.user.entries}
            clearImage={clearImage}
          />
          <FaceRecognition
            box={box}
            imageURL={imageURL}
            clearImage={clearImage}
          />
        </div>
      ) : route === "signin" ? (
        <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : (
        <Register loadUser={loadUser} onRouteChange={onRouteChange} />
      )}
    </div>
  );
};

export default App;
