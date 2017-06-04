# react_springboot_simple_chat

A simple react chat with spring boot as a backend using STOMP to communicate trhough sockets.

It's build on top of docker containers for convenience.

## File structure

On the root there are 2 folders **api** and **front** the first is the spring boot socket api, the second a react webpack based app.

The Dockerfiles on the root are used for the build and development inside docker containers.

## How to run.

### The easy way

If you want to run using the docker infrastructure you can simply do

```sh
docker-compose up
```
This will download the api dependencies and the node dependencies, after that is done the frontend will be on localhost:8080 and the backend on localhost:3000

### The local way

If you want to run on your local infrastructure and you have Java and Node you can open 2 terminalls and do the following:

```sh
cd front
npm install
npm start ## or npm test
```

And
```sh
cd api
./gradlew bootRun
```

### The "I want a terminal but I don't want to install all your dependencies locally way".
This way will run the images but will run then on a shared volume on front an api, this way the file dependencies will be installed on a shared folder but the dependencies programs will not.

For this to work we start the 2 containers and let them sleep, then we xec to use the bash on them so we can run any command as if Node, Java, Gradle and so on were installed locally.

```sh
docker-compose -f docker-compose-dev.yml up
```

On a terminal to use the front:

```sh
docker-compose exec front bash
# You will be on the bash terminal of the front (node) image
npm install # needed since it was not installed before
npm start # Or npm test
```

On another terminal to run the api
```sh
docker-compose exec api bash
gradle bootRun
```
