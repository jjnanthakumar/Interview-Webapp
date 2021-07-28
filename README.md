

Live Demo (https://interviewapp11.herokuapp.com/). This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Backend is written using Express and for SMS notification @Twillio (https://www.twilio.com/)

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
<br />
also navigate to src/server/index.js file and run the following command to view it here (http://localhost:4000)
### `nodemon index.js`

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

![Alt Text](snaps/1.png?raw=true "Title")
![Alt Text](snaps/2.png?raw=true "Title")
![Alt Text](snaps/3.png?raw=true "Title")

## DataBase Schema

![Alt Text](snaps/4.png?raw=true "Title")

## Twillio SMS Notification
 please change the Twillio credentials and replace them with your own in the server/index.js file.<br/>
 Interview creation SMS will be sent to candidate on scheduling.
![Alt Text](snaps/5.png?raw=true "Title")

## Scope for Improvement
Resume Upload/Download functionality, MongoDB Integration or Firebase RealTime DB
