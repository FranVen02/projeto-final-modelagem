const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Usuario = db.define('usuario', {

    codUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(30),
        allowNull:false
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    tablename: 'usuarios'
})

module.exports = Usuario