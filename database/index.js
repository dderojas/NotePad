const Sequelize = require('sequelize');
const sequelize = new Sequelize('notes','postgres','', {
  host: 'localhost',
  port: 5433,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
console.log('HEYDUDE');
 const models = {
  users: sequelize.import(`${__dirname}/models/users.js`),
  important: sequelize.import(`${__dirname}/models/important.js`),
  normal: sequelize.import(`${__dirname}/models/normal.js`)
 }
console.log('HEYMAN');

 Object.keys(models).forEach((modelName) => {
  if('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
 });

 models.sequelize = sequelize;

sequelize
.authenticate()
.then(() => {
  console.log('database connected!');
})
.catch((err) => {
  console.log(`can't connect to database`, err);
});

module.exports = models;

  // models parameter in the associate function?

  // sequelize expects every model to export a function that
  // returns a table definition.

  // models.sequelize = sequelize ???
  // .spread???