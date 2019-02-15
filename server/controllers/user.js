var models = require('../../database/index.js');
var bcrypt = require('bcrypt');
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
    // find hashed password via username
    console.log(username,'before something');
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
            console.log(result,'good or bad password');
            res.status(200).json(result);
          });
      }
    })
    .catch((err) => {
      console.log(err,'something error');
    })
  }
}