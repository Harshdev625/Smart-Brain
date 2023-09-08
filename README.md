# Smart Brain

Smart Brain is an application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The purpose of this application is to detect and recognize faces within images using the advanced face recognition capabilities provided by the Clarifai API. The application utilizes the Clarifai API's face detection model to accurately identify and locate faces within the provided images, providing precise bounding box coordinates for each detected face.

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
   ``` shell
   npm install
   npm run start
   ```

6. Smart Brain is now running on localhost.

7. For Backend visit [Face-Recognition-Brain-Backend-Mongo](https://github.com/Harshdev625/Face-Recognition-Brain-Backend-Mongo)
8. Find a Picture of a Person and 'Copy the image address'.
9. Paste the Image Address into the white textbox (in the middle of the screen) and Click the 'Detect' Button
10. Watch the facial recognition box appear over the person like magic.

# Tech Stack Used
![HTML](https://github.com/Harshdev625/Face-Recognition-Brain/assets/98793412/ace2021c-62ef-4854-b7f2-732afa9b9c66)
![CSS](https://github.com/Harshdev625/Face-Recognition-Brain/assets/98793412/94a44a9c-ef80-488d-967d-daa3ae13e201)
![javascript](https://github.com/Harshdev625/Face-Recognition-Brain/assets/98793412/73b36ddd-02bb-4508-8c84-57834435f04d)
![bootstrap](https://github.com/Harshdev625/Face-Recognition-Brain/assets/98793412/b07ea413-996a-431b-a1de-c398af6fe546)
![React](https://github.com/Harshdev625/Face-Recognition-Brain/assets/98793412/ddf1fda1-720f-4e89-9f18-3aa3d8e2fb94)

# Preview
https://github.com/Harshdev625/Face-Recognition-Brain/assets/98793412/2fe93e85-fdc7-4248-a97f-2c90ef4965dc

# Contributing
Contributions to the Smart Brain application are welcome! If you encounter any bugs or issues or have ideas for enhancements, please open an issue on the repository. Additionally, pull requests with improvements are highly appreciated.

<p align='center'>
(If you liked the project, give it a star 😃)
</p>
