![Swarm City](https://github.com/swarmcity/sc-boardwalk-production/blob/master/images/icons/icon-48x48.png?raw=true "Swarm City")


# Swarm City Site

## Introduction
The Site is created with Polymer 2 web components, and is differentially served by the PRPL server to ensure the right.

## Environment handling

Some variables ( like the websocket endpoint ) are compiled into the ```environment``` library. By default the production settings are used.

To override this setting you can:

- change settings in the file ```environment-dev.js```
- run in your console ```$export NODE_ENV=dev```
- and run ```webpack``` again.

This will compile a new ```environment.min.js``` with your settings.

