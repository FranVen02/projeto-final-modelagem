const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Compra = db.define('compra', {

    // Primary Key
    codSell: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    // Atributos gerais
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

    // Foreign Keys
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios', // Nome da tabela
            key: 'codUser' // Nome da chave referenciada
        }
    },
    produto_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'produtos', // Nome da tabela
            key: 'codProd' // Nome da chave referenciada
        }
    }
}, {
    timestamps: false,
    tablename: 'compras'
})

module.exports = Compra