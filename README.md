

# react-axios
React Axios demonstrates the ability of [Axios](https://github.com/axios/axios) a Promise based HTTP client, that acts as a [Promise API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) wrapper between the browser and node.js

*This application was built with React, runs on Node, and connects an API through [Axios](https://www.npmjs.com/package/axios) NPM package*

## Contents
* [About](#about)
* [Build](#build)
* [Overview](#overview)
  * [Requirements](#requirements)
  * [Installation](#installation)
* [Scripts](#scripts)
* [Additional](#additional)

## About
Writing a promise API with universal requests is optimized through this package wrapper that utalizes Node.js to connect to the browser through HTTP. 

Manage application data & state through various server configurations. GET & POST requests faciliate the flow of data through the application from the database to the application and back, asynchronously. 

#### Solution:
* GET & POST promises handled through Node.js
* HTTP requests from the server to the browser
* JSON data for requests that adapt through promises

A promise based HTTP request allows the developer to build applications that transform the active state of the data with input from the server, exchanging the visual & data outcomes in the browser.

## Build
This application is built using React & Node with a Promise request that is configured with GET/PUSH through Axios. Exchanging the request with the server is in a JSON format allows for the application to construct objects. The DOM layer is structured by a React-based version of Bootstrap, by including specified components within the application.
* [Axios](https://www.npmjs.com/package/axios)
* [Reactstrap](https://www.npmjs.com/package/reactstrap)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)

## Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) which means all components, classes, and functions work within an unejected react application. You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/). To get started fork, download, or git clone this repository to retrieve the codebase.

### Requirements

This application and its components were built through Yarn, with React, and run on Node.js all prerequisites are listed below, the rest are active in the directory of the project file and become accessible with the script `yarn install`.
* Yarn
* Node


### Installation

1. Install Yarn Package Manager
https://yarnpkg.com/

2. Clone the repo
    ```sh
    git clone https://github.com/collectedview/react-axios.git
    ```
    ```
3. Install the directory through yarn in your console
    ```sh
    yarn install
    ```

## Scripts

In the project directory, you can run:

##### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Additional
Discovering the full usage of Axios can be implemented by reflecting on the use-case of API based development discovered through Serverless applications and a working knowledge of a Promise based API. Learn more about Axios and this use-case in the article ["Axios"](https://medium.com/swlh/axios-246b916c3100).


