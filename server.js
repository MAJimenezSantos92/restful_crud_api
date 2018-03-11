// server.js
let express        = require('express');
let MongoClient    = require('mongodb').MongoClient;
let bodyParser     = require('body-parser');
let db             = require('./config/db.js');
let app            = express();

// server.js
let port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  // Make sure you add the database name and not the collection name
  db = database.db("pruebasmangel")
  require('./app/routes')(app, db);
  app.listen(port, () => {
    console.log('We are live on ' + port);
	
	
  });               
})



