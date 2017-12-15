![Swarm City](https://github.com/swarmcity/sc-boardwalk-production/blob/master/images/icons/icon-48x48.png?raw=true "Swarm City")


# Swarm City
### SwarmCitySite

# Environment handling

Some variables ( like the websocket endpoint ) are compiled into the ```environment``` library. By default the production settings are used.

To override this setting you can:

- change settings in the file ```environment-dev.js```
- run in your console ```$export NODE_ENV=dev```
- and run ```webpack``` again.

This will compile a new ```environment.min.js``` with your settings.

