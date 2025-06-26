const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Language = require('./Language');

const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dob: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  intrested: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  qualification: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  experience: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  virtual_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  id_no: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  id_proof: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  profile_pic: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    defaultValue: 'active',
  },
  user_type: {
    type: DataTypes.ENUM('admin', 'mentor', 'mentee'),
    defaultValue: 'mentor',
  },
  original_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  social_login: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  //  Define foreign key columns
  language_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
    model: 'languages',
    key: 'id'
  }
  },
  
  
}, {
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
});

// Define associations

User.belongsTo(Language, { foreignKey: 'language_id', as: 'language' });



module.exports = {
  sequelize,
  User,
  Language,
  
};
