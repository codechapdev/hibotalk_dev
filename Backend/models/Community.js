const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const {User} = require('./User'); 

const Community = sequelize.define('Community', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  thumbnailUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likesCount: {
  type: DataTypes.INTEGER,
  defaultValue: 0,
   },
  commentsCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
   },
  mentorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  }
}, {
  timestamps: true,
});

Community.belongsTo(User, { foreignKey: 'mentorId', as: 'mentor' });

module.exports = Community;
