const Sequelize = require('sequelize');
var models = require('./users.js');

module.exports = {
  important: (sequelize, dataTypes) => {

    const Important = sequelize.define('important', {
        message: {
          type: Sequelize.TEXT
        }
    });

    Important.associate = (models) => {
      Important.belongsTo(models.user, {
        foreignKey: 'userId'
      });
    }

    return Important;
  }

}