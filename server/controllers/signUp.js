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
        res.status(200).json('user created');
      });
    })
  }
}