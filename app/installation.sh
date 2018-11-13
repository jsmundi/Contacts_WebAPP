#!/bin/bash

#Install the NPM 
echo "Installing NPM Modules"
meteor npm install 

#Run Lint
echo "Installing Lint"
meteor npm run lint

#Start the Server
echo "Starting Meteor Web App"
meteor npm run start 
