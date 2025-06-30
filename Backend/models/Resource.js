// models/Resource.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Specialization = require('./Specialization');
const {User} = require('./User');

const Resource = sequelize.define('resources', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  heading: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subHeading: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'specializations',
      key: 'id',
    },
  },
  mentorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  coursePricing: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  specialDiscount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  resourceType: {
    type: DataTypes.ENUM('pdf', 'video'),
    allowNull: false,
  },
  thumbnailUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: true,
});

// Relation
Resource.belongsTo(Specialization, { foreignKey: 'categoryId', as: 'category' });
Resource.belongsTo(User,{ foreignKey: 'mentorId', as: 'mentor' });

module.exports = Resource;
