"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// models/User.ts
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
class User extends sequelize_1.Model {
}
User.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false, // Obligatorio
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false, // Obligatorio
        unique: true, // Debe ser único
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false, // Obligatorio
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true, // Opcional
    },
    identification: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true, // Opcional
    },
    birthdate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true, // Opcional
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true, // Opcional
    },
}, {
    sequelize: connection_1.sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
});
exports.default = User;
