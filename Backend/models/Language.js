
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Language = sequelize.define('languages', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Language;
