// models/Wishlist.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Community = require('./Community');

const Wishlist = sequelize.define('Wishlist', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  communityId: { type: DataTypes.INTEGER, allowNull: false },
}, {
  timestamps: true,
  uniqueKeys: {
    unique_wishlist: {
      fields: ['userId', 'communityId'],
    },
  },
});

Wishlist.belongsTo(User, { foreignKey: 'userId' });
Wishlist.belongsTo(Community, { foreignKey: 'communityId' });

module.exports = Wishlist;
