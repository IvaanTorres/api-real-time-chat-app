# **CHANGELOG**

All notable changes to this project will be documented in this file.

The format is partially based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## **[v1.6.0] - 2022-10-04**
- ### **CI**
  - [2022-10-04] Deploy to Railway ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/b0210b374ed1b382335cc318a9524a1fcde59ccc))
  - [2022-10-04] Deploy to Railway ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/c9b933c384c405159d60d3a672290b8cbde65a50))
## **[v1.5.0] - 2022-05-13**
- ### **Fix**
  - [2022-05-13] Set up CORS ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/2e8e7114593918cee41cce95d32085da1122eca6))

- ### **CI**
  - [2022-05-13] Update pipeline and prepare tests for it ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/c9d567291279474ea1e8e38eb6ce511e1df01c98))
  - [2022-05-13] update pipeline and prepare tests for it. add github secrets for db credentials ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/81307b329e75b824c2986967637e9cc009cd6f6f))
  - [2022-05-13] add automatic deployment to Heroku in the prepush git hook for the moment ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/1b2ac2cdc984ea928584a00cdcbb5a8d23910736))
  
- ### **Docs**
  - [2022-05-05] Add MIT license ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/64a0d59ed80e14862cce38f5db15e5de76c06b1a))

## **[v1.1.0] - 2022-04-27**
- ### **Feat**
  - [2022-04-18] Return the connected users and return the user instance instead of the tag itself ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/d7fa544cf8d57a60c0a6423f079f53248e357d66))

- ### **Test**
  - [2022-04-27] Add integration tests ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/e22807d272725d91c2542739d343506df0ec9400))

- ### **CI**
  - [2022-04-27] Update the Docker image tag ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/885c0061ae4a801f152347763955d66383736819))

## **[v1.0.0] - 2022-04-16**
- ### **Feat**
  - [2022-04-15] Create the socket events to store the given messages ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/d358d261c0bd967a5b093a4d8ce6c0d0412f0e42))
  - [2022-04-15] Create the Tag model and send the object trough the event ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/c524eed186d5016a8fa4b42ed0d1da0957c61002))

- ### **Fix**
  - [2022-04-13] Change the restart of the docker images, the work badly ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/e3934362f680724a1d95a8ea713fa3a43fd3f1e6))
  - [2022-04-16] Heroku crashes ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/1599cfb12646b01a8ce1a6a8c115271f6c3aaddb))

- ### **Chore**
  - [2022-04-12] Set mongodb atlas in PROD mode and docker PROD mode ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/fc103252fc27f350da8917c2f0a8b1989d8e1187))

- ### **CI**
  - [2022-04-12] Change API APP Docker image version to 0.1.1 ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/2bcf7be56368c2b771037ec53f6d20c92cc1f433))

## **[v0.1.1] - 2022-04-10**

- ### **Fix**
  - [2022-04-10] Set CORS inside the utils function ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/e6ef769336cc85aeb592d60413243c1d14cd5638))
## **[v0.1.0] - 2022-04-09**

- ### **Feat**
  - [2022-03-12] Setup project and add local DEV and PROD docker ENV ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/e1a2b2a18fe1ac54930f3b48c11a3f92b82b6829))
  - [2022-03-19] Prepare sockets environment ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/0eaa9aef6aee0d1cf1e3ab2c6b270cf24e728226))
  - [2022-03-19] Prepare sockets environment (fix) ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/b3f56432b276e3b2a559530787a51b8188dddb05))
  - [2022-03-27] Set up ENV variables for DEV and PROD environments ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/f21537ea9893bec0d9f7c5623aaea7e2c5954f05))

- ### **Fix**
  - [2022-03-13] Can't access to .env variables when deploying the docker image ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/501cc4e0f81fed2fc1e5485315266979db05a4a5))
  - [2022-03-27] Deploy in Heroku fails ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/501cc4e0f81fed2fc1e5485315266979db05a4a5))
  - [2022-04-08] Jest not recognised in actions pipeline ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/56e4afa9c3bc898d425cc5ed5942359f14d54a41))
  - [2022-04-08] Fix deployment ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/e52820252e67980450ec7eb933e5c3697e10f8b5))

- ### **Style**
  - [2022-03-18] Add ESlint ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/ec5701887353ad810e5c49d0beda9cb59d0550c1))
  - [2022-03-18] Add script block to lint when commiting in DEV ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/3edfbad4f24c5df9799731345fd5d8e383c06662))

- ### **CI**
  - [2022-03-13] Add UI APP to the docker-compose files ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/215016eb39bd8a4535b4506141dc10bc80cc3beb))
  - [2022-03-13] Add Husky and Git Hooks ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/842634f02dfb71e0d617dca418ab1bfd6bfed56b))
  - [2022-03-18] Add SonarQube docker image to the docker-compose files ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/d8780bf75cabc1c63d0f3113e469c3e662b83e5f))
  - [2022-03-21] Finish up the Docker config to make possible the mix develop between UI and API ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/a1b60d3261b6c58aa0ba8941b4bd60e3ee7987f9))

- ### **CD**
  - [2022-03-13] Deploy to Heroku ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/d462aa29863dbfdd14b0a5d66e29972f11d9df47))

- ### **Test**
  - [2022-03-18] Add Jest and SonarQube ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/9109b9d66ac9cf88f666d6293b0dac22d373c7cc))
  - [2022-04-08] Add tests ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/64dc8c60315a09c6d62b9079cf0d0923930aab79))

- ### **Chore**
  - [2022-03-20] Clean up the project structure to start to develop with sockets ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/b11d3e31831b2dccea4b714e55031493874180b9))
  - [2022-04-01] Set CORS ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/09bd84d438e27dcc44fe37d46cf80e7286268550))

- ### **Docs**
  - [2022-03-14] Change package.json information ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/b46394b6fc40b2c22d5cff9924f958ae822014c9))
  - [2022-03-29] Add comments and fix security hotspots ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/f1e183f64368619ddd38a3d06671707957836d31))
  - [2022-04-09] Create the CHANGELOG and modify the README ([View commit](https://github.com/IvaanTorres/api-real-time-chat-app/commit/adbfde179fe367c487fc2522be816dc6be00332b))

