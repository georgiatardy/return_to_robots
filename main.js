// // =================Packages=====================

const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data');
const fs = require('fs');
const app = express();
const robots = require('./routes/robots');
const db = require('./db');
let url = 'mongodb://localhost:27017/robotDatabase';


// ======Boilerplate, Calling modules to be used======

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'));

// ========Retrieving robot info from database========


app.use('/', robots);


db.connect(url, (err, connection) => {
      if (!err)
        console.log('connected to Mongo.');


      app.listen(3000, function() {
        console.log('App is running!');
      });
    })
