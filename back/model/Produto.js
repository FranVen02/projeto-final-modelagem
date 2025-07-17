const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto', {

    codProd: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(256),
        allowNull: true
    },
    category: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false
    },
    discountPercentage: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    brand: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false,
    tablename: 'produtos'
})

module.exports = Produto