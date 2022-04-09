# Thunder Link -  A Real-time Chat App

This is the Thunder Link Sockets API APP to provide data to the Thunder Link UI APP

Link to the project in production: [Link](http://api-thunder-link.herokuapp.com/)

## Features

- Express and NodeJS Vanilla
- MongoDB database
- TypeScript
- Socket.IO
- Jest and SonarQube
- Docker environments
- CI/CD with Docker and GitHub Actions
- Deploy Continuous to Heroku
- ENV config
- Use of ESlint and Husky (Git hooks)

## Config
You have the ENV files and the Docker ENV variables there to be changed in any moment to change the config project data to access the services, etc.
## Installation and run the project
Clone the repo and type:
```
npm install
```
### Local environment
It creates a local docker image for the API and takes from the registery the UI APP, MongoDB (local) and SonarQube.

**You can change the docker compose file to set the local environment to DEV or PROD stages**
```
npm run docker:local
```
### Local environment (just the API)
It creates a local docker image for the API.

**You can change the docker compose file to set the local environment to DEV or PROD stages**
```
npm run docker:local:api
```
### Local environment without UI
It creates a local docker image for the API and takes from the registery MongoDB (local) and SonarQube.

**You can change the docker compose file to set the local environment to DEV or PROD stages**
```
npm run docker:local:not-ui
```
### Local environment (just the services)
It takes from the registery the services (MongoDB (local) and SonarQube).

```
npm run docker:services
```
### Production environment
It takes from the registery the UI APP, the API APP, MongoDB (local) and SonarQube.

```
npm run docker:prod
```
***If the runtime fails, try to run the following command:**
```
npm run build
```


## Author

Linkedin: [linkedin.com/in/ivan-torres-garcia](linkedin.com/in/ivan-torres-garcia)
