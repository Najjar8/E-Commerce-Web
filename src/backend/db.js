const { Sequelize } = require('sequelize');
const path = require('path');

// Specify the full path to the database file
const databasePath = path.resolve('C:/Users/levi8/database.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: databasePath
});

sequelize.authenticate()
  .then(() => console.log('Connected to SQLite'))
  .catch(err => console.error('Unable to connect to SQLite:', err.message));

module.exports = sequelize;
