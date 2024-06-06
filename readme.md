NodeJS (express) + MongoDB Boiler plate

Things you need to install first!!!!
- Git	       https://git-scm.com/download/win
- NodeJS        https://nodejs.org/en/
- MongoDB       https://www.mongodb.com/download-center



The installation is very easy, just click next next next........

after installing, create a new folder
right click on the new folder and select "Git Bash here"
then issue the command 

- git clone https://github.com/johnfrades/nodejsmongodb.git



So, after you install Git, NodeJS, MongoDB and you cloned the git repo.
On your git-bash, issue the command "npm install", this will install the dependencies that's included on the package JSON file, i've already included it. You don't need to install each every dependencies.



Dependencies included:
- mongoose
- express
- ejs
- body-parser


Mongoose
	-- This helps NodeJS communicate with MongoDB

Express
	-- A framework for NodeJS to produce an easy and clean way to start-up a server

EJS (Embedded Javascript)
	-- an HTML template with an added feature of you can embedd javascript into it

Body-parser
	-- To get the data you put into the input field





Things to do to before starting the server
- Open CMD and issue the command "mongod", this will start the mongodb service on your local machine
- On your git-bash, issue the command "node index.js" this will start the server, make the your git-bash is on the directory of your file. So double check on it.



If you have any questions, just email me guys!