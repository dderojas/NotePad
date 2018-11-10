const Sequelize = require('sequelize');
var users = require('./users.js');

module.exports = (sequelize, dataTypes) => {

    const Important = sequelize.define('important', {
        message: {
          type: Sequelize.TEXT
        }
    });

    Important.associate = (models) => {
      Important.belongsTo(models.users, {
        foreignKey: 'userId'
      });
    }

    return Important;
}