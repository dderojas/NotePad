var bcrypt = require('bcrypt');
var models = require('../../database/index.js');
var saltRounds = 10;

module.exports = {
  signUp: (username, password, res) => {

    bcrypt.hash(password, saltRounds).then((hash) => {
      models.users.findOrCreate({
        where: {
          userName: username,
          passWord: hash
        }
      })
      .spread((user, created) => {
        console.log(user.get({
          plain: true
        }));
        console.log(created,'created');
        res.status(200).json(user);
      });
    })
  },
  logIn: (username, password, res) => {
    models.users.findOne({
      where: {
        userName: username
      }
    })
    .then((user) => {
      if(user.userName) {
        var hash = user.passWord;
        bcrypt.compare(password, hash)
          .then((result) => {
            res.status(200).json(result);
          });
      }
    })
    .catch((err) => {
      console.log(err,'Username does not exist');
      res.status(400).json(err);
    })
  }
}