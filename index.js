var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//You need this to use body-parser, i dont know the deeper meaning of this command
//But just keep in mind that this command make the body-parser work 
//so that this index.js server script can get the input data you've inputted on EJS files
app.use(bodyParser.urlencoded({extended:true}));


// This line of command will connect your nodejs to your mongodb
// you can change the name of the database, just edit out the "nameofthedatabase" to your liking
mongoose.connect('mongodb://localhost/nameofthedatabase');


// This is your database schema, you can add more like address, mobile phone and etc...
var sampleSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	age: Number
});


// after you create the schema, always convert it to mongoose model for much cleaner code
// the "sample" will be the name of your collection inside your database
// if there's an uppercase inside, it will automatically lowercase it, mongodb uses lowercase on collections
// and will add an "s" to the end, so if you didn't change "sample", you should see "samples" on your database
// if you change it to "person", you'll see "persons".. 
var Sample = mongoose.model("sample", sampleSchema);




// This is your homepage, will render the homepage.ejs
app.get("/", function(req, res){
	res.render("homepage.ejs")
});


// This is the addperson page, renders the addperson.ejs
app.get("/addperson", function(req, res){
	res.render("addperson.ejs");
});




//This will query the mongodb and find all data on the Sample model. If no error found, it will render the viewdata.ejs
//and you should see the persons you've add. If you're not seeing anything, make sure you added a person first by going to
// /addperson path

// theData: foundData... theData is the variable you'll use on your viewdata.ejs, and theData contains whatever the foundData
//contains. If you want to know what's inside of foundData, check your git-bash/CMD, i've added the console.log(foundData)
//so when you go to /viewperson, it should log to the console 
app.get("/viewperson", function(req, res){
	Sample.find({}, function(err, foundData){
		if(err){
			console.log(err);
		} else {
			console.log(foundData);
			res.render("viewdata.ejs", {theData: foundData});
		}
	});
});





//There are 2 ways to get the input from the input field, see below for methods
//currently Method 1 is active, so please refer to addperson.ejs
//if you want to use method 2, comment out the Method 1 then uncomment the Method 2, then go to 
//addperson.ejs, comment out the Method 1 form, and uncomment the Method 2 form


//Method 1

app.post("/dataadd", function(req, res){
	Sample.create(req.body.thedata, function(err, newData){
		if(err){
			console.log(err);
		} else {
			console.log(newData);
			res.send("Successfully create a new data");
		}
	});
});


//Method 2

// app.post("/dataadd", function(req, res){
// 	var theData = {
// 		firstname: req.body.firstname,
// 		lastname: req.body.surname,
// 		age: req.body.edad
// 	}

// 	Sample.create(theData, function(err, newData){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(newData);
// 			res.send("Successfully create a new data");
// 		}
// 	});
// });










//This is the important part. If you start the server, whatever port number is inputted there, it will listen to it
//Since it's "3000", your server resides on localhost:3000
app.listen("3000", function(req, res){
	console.log("Server started at PORT 3000");
});

//to start the server, on your command prompt/Git-bash, issue the command "node index.js" without the ""