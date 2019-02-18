var express = require('express');
var allNotes = require('./controllers/allNotes.js');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var cookieSession = require('cookie-session');
var models = require('../database/index.js');
var session = require('express-session');
var user = require('./controllers/user.js');


var app = express();
app.use(express.static(`${__dirname}/../client/dist/`));
app.use(bodyParser.json());
app.use(cookieSession({
  keys:['something']
}));

app.get('/everything',(req, res) => {

  allNotes.getAllNotes(res);

});

app.post('/important', (req, res) => {

  models.important.findOrCreate({
    where: {
      message: req.body.importantInput
    }
  })
  .spread((user, created) => {
    console.log(user.get({
      plain: true
    }))
    console.log(created,'createTest');
  });

  res.status(200).json(res, 'good post');
});

app.post('/normal', (req, res) => {

  models.normal.findOrCreate({
    where: {
      message: req.body.normalInput
    }
  })
  .spread((user, created) => {
    console.log(user.get({
      plain: true
    }))
    console.log(created,'createTest');
  });

  res.status(200).json(res, 'good post');
});

app.post('/signUp', (req, res) => {
  console.log('signUp test',req.body);
  user.signUp(req.body.Username, req.body.Password, res);
});

app.post('/logIn', (req, res) => {
  console.log('logIn test', req.body);
  user.logIn(req.body.Username, req.body.Password, res);
});


models.sequelize.sync({force: true}).then(() => {
  app.listen(3000, function() {
    console.log('connected all set!');
  });
});

