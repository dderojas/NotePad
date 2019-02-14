var models = require('../../database/index.js');

module.exports = {
  signUp: (username, password, res) => {
    models.users.findOrCreate({
      where: {
        userName: username
      }
    })
    .spread((user, created) => {
      console.log(user.get({
        plain: true
      }));
      console.log(created,'created');
      res.status(200).json('user created');
    });
  }
}