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
        allowNull: false
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
        type: DataTypes.STRING(5),
        allowNull: true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    brand: {
        type: DataTypes.STRING(30),
        allowNull:false
    },
    thumbnail: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
}, {
    timestamps: false,
    tablename: 'produtos'
})

module.exports = Produto