const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Url = sequelize.define('Url', {
  original_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  short_url: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = Url;
