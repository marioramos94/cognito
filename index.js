const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

//const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(__dirname + '/public'));


app.listen(port, () => console.log(`Server listening on port ${port}!`))
