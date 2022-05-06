const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dates extends Model {}

Dates.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        day: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        month: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },

    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'dates'
    }
);

module.exports = Dates;