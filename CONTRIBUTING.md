# Contributing

All contributions are welcome

* Please search issues and pull requests before adding something new to avoid duplicating efforts and conversations.
* If you are new, please only pick issues that have a time estimate and have no-one assigned to them.
* Assign yourself
* Fork the repository to your own account
* Clone the repository
* Create a branch: #[issue-number]_[issue-title]
* (for example: #719_amount-doesnt-scale)
* Make changes
* Lint your code: npm run lint
* Submit a pull request with tests on develop branch
* In your pull request, link the issue in the description


## Installing the environment


Follow the instructions on:
https://github.com/swarmcity/SwarmCityInstaller
Clone the installer project to a folder by the command 
➢	Swarmcity init
![](https://i.imgur.com/FfOXa16.png)
 
* On windows, make sure that you use / not \ as folder separator for the ‘workpath’
* Again on windows, it is better to set the ‘Workpath’ to be a folder under your Windows User directory, to prevent permissions issues with docker.

➢	Swarmcity build

The build will take about 30-60 minutes to run.
After build is finished you should see 4 swarmcity images in ‘docker images’
![](https://i.imgur.com/w3MYzjq.png)

 
Run the environment by the command ‘swarmcity start’:
 ![](https://i.imgur.com/RNyg5Rl.png)

You now should be able to access the swarmcity localhost site from your browser, hooray!
http://localhost:8081/
![](https://i.imgur.com/KPIdOAm.png)
 
‘Docker ps’ should look something like this:
 ![](https://i.imgur.com/QFKlOFG.png)

Pay attention to the PORTS sections, to make sure that your dockers are connected correctly. 

## virtualbox

The default 20Gb used by docker is not enough, you will need to increase the disk space, to allow storing the chain data (around 31Gb for rinkeby/kovan as of May 2018).

Windows 7 (docker toolbox): You might need to open ports manually on the ‘default’ machine (the one that docker uses)
![](https://i.imgur.com/nhlKpGA.png)

 
Windows 10: It is probably better to use “docker for windows”. The above opening the ports step might not be needed 

## Advanced
We had issues with the ‘swarmcity build’ script which required few manual tweaks. 
The solution ended up manually setting the ‘docker-compose.yaml’, replacing the ${WORKSPACE} with the ‘C:/Users/[user]/Swarmdev’, the folder where you installed the files 
![](https://i.imgur.com/NPJAip5.png)


If you have issues with the ‘swarmcity build’ script, you can run it manually:
$ docker-compose -f docker-compose.dev.yaml up

In Swarmdev\SwarmCitySite\Dockerfile you can find the Dockerfile which you might want to edit if the build keeps failing.
 
 ![](https://i.imgur.com/m4Q0g2O.png)


## Project orientation
The swarmcity script will download the latest SwarmCitySite and SwarmCityAPI to the folder you specified in the init phase.
SwarmCitySite connects to SwarmCityAPI through socket.io  
SwarmCityAPI  connects to the kovan testnet to get blockchain data. Data is cached inside the API block with LevelDB to speed up the retrieval of info to the UI.  
SwarmCitySite uses Polymer 2 Webcomponents and Nodejs. If you know javascript, you should be able to pick up Polymer fairly quickly. It uses webcomponents to encapsulate HTML elements on the page, making the code very modular and easy to understand. 

## How to get help
The Dev Team is always happy to help other developers who want to get involved. If you feel that you want to contribute, and you have a question, feel free to reach out to #devhive in Riot. You can get a peek at the project by reviewing Github. To hang out where our community is, join us in Swarm City Slack.



