const Sequelize = require('sequelize');
var users = require('./users.js');

module.exports = (sequelize, dataTypes) => {
  const Normal = sequelize.define('normal', {
    message: {
      type: Sequelize.TEXT
    }
  });

  Normal.associate = (models) => {
    Normal.belongsTo(models.users, {
      foreignKey: 'userId'
    });
  }

  return Normal;
}