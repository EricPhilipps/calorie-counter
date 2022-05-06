const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Profile extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Profile.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
        },
    },
    {
        hooks: {
          beforeCreate: async (newProfileData) => {
            newProfileData.password = await bcrypt.hash(newProfileData.password, 10);
            return newProfileData;
          },
          beforeUpdate: async (updatedProfileData) => {
            updatedProfileData.password = await bcrypt.hash(updatedProfileData.password, 10);
            return updatedProfileData;
          },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile',
      }
);

module.exports = Profile;