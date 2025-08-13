const Produto = require('./Produto')
const Compra = require('./Compra')
const Usuario = require('./Usuario')

Produto.hasMany(Compra, {
    foreignKey: 'produto_id',
    as: 'produtosCompra',
    onDelete: 'CASCADE'
})

Compra.belongsTo(Produto, {
    foreignKey: 'produto_id',
    as: 'comprasProduto',
    allowNull:false
})

Usuario.hasMany(Compra, {
    foreignKey: 'usuario_id',
    as: 'usuariosCompra',
    onDelete: 'CASCADE'
})

Compra.belongsTo(Usuario, {
    foreignKey: 'usuario_id',
    as: 'comprasUsuario',
    allowNull:false
})

module.exports = { Compra, Produto, Usuario}