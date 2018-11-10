const Sequelize = require('sequelize');

module.exports = (sequelize, dataTypes) => {

    const User = sequelize.define('user', {
      userName: {
        type: Sequelize.TEXT
      }
    });

    return User;
}


