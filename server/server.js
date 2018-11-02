var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(`${__dirname}/../client/dist/`));
app.use(bodyParser.json());

app.listen(3000, function() {
  console.log('connected all set!');
});