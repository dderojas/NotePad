var express = require('express');
var bodyParser = require('body-parser');
var models = require('../database/index.js');

var app = express();
app.use(express.static(`${__dirname}/../client/dist/`));
app.use(bodyParser.json());

app.get('/everything',(req, res) => {

  models.important.findAll()
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((error) => {
    res.status(400).send(error);
  });
});

app.post('/important', (req, res) => {
  console.log(req.body, 'got body');
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
  console.log(req.body, 'got body');
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


models.sequelize.sync({force: true}).then(() => {
  app.listen(3000, function() {
    console.log('connected all set!');
  });
});

