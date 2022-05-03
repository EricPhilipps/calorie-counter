const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Calorie extends Model {}

Calorie.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        food_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'date',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'calorie'
    }
);

module.exports = Calorie;