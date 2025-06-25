const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Specialization = sequelize.define('Specialization', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true  
  }
}, {
  timestamps: false,
  tableName: 'specializations'
});

module.exports = Specialization;
