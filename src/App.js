import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Navigation from './components/Navigation.js';
import Signin from './components/Signin.js';
import Register from './components/Register.js';
import FaceRecognition from './components/FaceRecognition.js';
import Logo from './components/Logo.js';
import ImageLinkForm from './components/ImageLinkForm.js';
import Rank from './components/Rank.js';
import './App.css';

const returnClarifaiRequestOptions = (imageURL) => {
  const PAT = process.env.REACT_APP_API_PAT;
  const USER_ID = process.env.REACT_APP_API_USER_ID_NAME;
  const APP_ID = process.env.REACT_APP_USER_APP;
  const IMAGE_URL = imageURL;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL
          }
        }
      }
    ]
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Key ' + PAT
    },
    body: raw
  };
  return requestOptions;
};

const initialState = {
  input: '',
  imageURL: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });
    fetch(
      'https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs',
      returnClarifaiRequestOptions(this.state.input)
    )
    .then((response) => response.json())
      .then((response) => {
        console.log('hi', response);
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then((response) => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            });
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((error) => console.log('error', error));
  };

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ initialState });
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageURL, route, box } = this.state;
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home'
          ? <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageURL={imageURL} />
          </div>
          : (
            route === 'signin'
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
