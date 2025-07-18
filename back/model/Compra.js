const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Compra = db.define('compra', {

    codSell: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    buyDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    unitPrice: {
        type: DataTypes.FLOAT(10,2),
        allowNull: false
    },
    appliedDiscount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    finalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    payment: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    status:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'codUser'
        }
    },
    produto_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'produtos',
            key: 'codProd'
        }
    }
}, {
    timestamps: false,
    tablename: 'compras'
})

module.exports = Compra