
# Zoomtopia UI Demo 2021

Used in conjuction with [Zoomtopia API 2021](https://github.com/brandonabajelo-zoom/zoomtopia-api-2021) for Zoomtopia Session: How To Use Meeting SDKs To Integrate Zoom Meetings Into Your Application.

## Installation

`git clone https://github.com/brandonabajelo-zoom/zoomtopia-ui-2021.git`

## Setup

1. Enter project directory

`cd zoomtopia-ui-2021`

2. Install dependencies

`npm install` or `yarn install`

3.  In the root directory of the project, create a `.env` file where you will store your relevant keys and variables. This file should also be added to your `.gitignore` file so your keys are not exposed to github

`touch .env`

4. Inside this `.env` file, provide the following keys.

`REACT_APP_ZOOM_API_KEY=xxxxx` [Api Key Generation](https://marketplace.zoom.us/develop/create)

`REACT_APP_SIGNATURE_ENDPOINT=xxxxx` [Signature Generation](https://github.com/zoom/websdk-sample-signature-node.js)

`REACT_APP_USER_ID=xxxxx` Zoom User ID

5. Once your `.env` is configured properly, run the app and navigate to [http://localhost:3000](http://localhost:3000)

`npm start` or `yarn start`
