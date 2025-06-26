
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Community = require('./Community');

const Comment = sequelize.define('comment', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  content: { type: DataTypes.TEXT, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  communityId: { type: DataTypes.INTEGER, allowNull: false },
}, {
  timestamps: true,
});

Comment.belongsTo(User, { foreignKey: 'userId' });
Comment.belongsTo(Community, { foreignKey: 'communityId' });

module.exports = Comment;
