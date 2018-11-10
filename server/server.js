var express = require('express');
var bodyParser = require('body-parser');
// var sequelize = require('sequelize');
var models = require('../database/index.js');

var app = express();
app.use(express.static(`${__dirname}/../client/dist/`));
app.use(bodyParser.json());

models.sequelize.sync({force: true}).then(() => {
  app.listen(3000, function() {
    console.log('connected all set!');
  });
});

