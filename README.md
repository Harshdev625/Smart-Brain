# Face Recognition Brain

Face Recognition Brain is an application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The purpose of this application is to detect and recognize faces within images using the advanced face recognition capabilities provided by the Clarifai API. The application utilizes the Clarifai API's face detection model to accurately identify and locate faces within the provided images, providing precise bounding box coordinates for each detected face.

## Installation

To run the web application locally, you need to have Node.js installed on your device. Once installed, follow these steps:

1. Clone the repository: `git clone https://github.com/Harshdev625/Face-Recognition-Brain`
2. Create an account on the [Clarifai API](https://clarifai.com/).
3. Create a `.env` file in the root folder.
4. In the `.env` file, create the following variables:
   - `REACT_APP_API_PAT='Your API Key'`
   - `REACT_APP_API_USER_ID_NAME='Your API Username'`
   - `REACT_APP_USER_APP='Your API App Name'`
   - `REACT_APP_SERVER='http://localhost:3000'`

   Replace `'Your API Key'`, `'Your API Username'`, and `'Your API App Name'` with your actual API key, API username, and your app name respectively. If your server is deployed elsewhere, replace `'http://localhost:3000'` with the URL of your deployed server.

5. Now you are ready to start running the application. Use the following commands:
   ```shell
   npm install
   npm run start
   ```

6. Face Recognition Brain is now running on localhost.

7. For Backend visit [Face-Recognition-Brain-Backend-Mongo](https://github.com/Harshdev625/Face-Recognition-Brain-Backend-Mongo)
8. Find a Picture of a Person and 'Copy image address'.
9. Paste the Image Address into the white textbox (in the middle of the screen) and Click 'Detect' Button
10. Watch the facial recognition box appear over the person like magic.

# Contributing
Contributions to the Face Recognition Brain application are welcome! If you encounter any bugs, issues, or have ideas for enhancements, please open an issue on the repository. Additionally, pull requests with improvements are highly appreciated.

# Tech Stack Used


# Preview
<img width="959" alt="Screenshot 2023-07-15 144144" src="https://github.com/Harshdev625/NewsMonkey/assets/98793412/3c88457c-8cca-46a2-81c5-10237da8da2f">
<img width="959" alt="Screenshot 2023-07-15 144310" src="https://github.com/Harshdev625/NewsMonkey/assets/98793412/c1dace79-2820-47ef-b24d-e84dcbe23371">
<img width="956" alt="Screenshot 2023-07-15 144516" src="https://github.com/Harshdev625/NewsMonkey/assets/98793412/07b562f7-0937-47f8-95ba-40f0c313350f">