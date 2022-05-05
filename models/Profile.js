const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model {}

Profile.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile'
    }
);

module.exports = Profile;