## Steps to start project

1. Download Project files
2. Open project folder in VSCode
3. Open command line or terminal
4. cd into "frontendassignment"
5. npm install 
6. npm start
7. The project opens at localhost:3000

## Description

The project consists of a static web page with a sign up form. The main app.js file contains two components; a header component and a signupform component.
The header component contains the brand logo. The signupform component contains the main form content of the page. 
A user has to fill all the fields before form submission, and form validation is done for all the input fields. 
After submission of the form, a request is sent to https://reqres.in/api/request, and the response is logged onto the console, which consists of the details that the user has entered, along with some extra information. (AJAX is used to submit the form data.)
The user also has the option to sign up using the Google and Facebook Web Client SDK.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
