const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const net = require('net');
const os = require('os');
var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyparser = require('body-parser');
var jsonparser = bodyparser.json();
var hparser = bodyparser.text({type: 'text/plain'});
var urlencode = bodyparser.urlencoded({extended: true});

app.use(morgan('dev'));
app.use(jsonparser);
app.use(hparser);
app.use(express.static(path.join(__dirname, 'markup')));
app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'scripts')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', function (req, res) {
	res.send();
});
app.post('/thank-you.html', jsonparser, function (req, res) {
	let name = req.body.name;
	let surname = req.body.surname;
	let email = req.body.email;
	try { client.db("dbName").collection("collectionName").insertOne({_id: name.toString()});
		client.db("dbName").collection("collectionName").insertOne({_id: surname.toString()});
		client.db("dbName").collection("collectionName").insertOne({_id: email.toString()});}
	finally {
	console.log('received: ', name, surname, email);
	nextCommand();
	res.status(303).location('/thank-you.html').send({'Content-Type': 'text/html', message: 'Thank you'});
}});
app.listen(3000);
console.log('Express started on port 3000');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+connectionType:connectionString...";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
function nextCommand() { { try { client.connect();
	client.db("admin").command({ping: 1});
	console.log("pinged deployment!!");
} catch(e) {
	console.error(e);
}
}
}
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await console.log('still connected'); //client.close();
  }
}
run().catch(console.dir);
