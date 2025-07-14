const Produto = require('./Produto')
const Compra = require('./Compra')
const Usuario = require('./Usuario')

Produto.hasMany(Compra, {
    foreignkey: 'produto_id',
    as: 'produtosCompra',
    onDelete: 'CASCADE'
})

Compra.belongsTo(Produto, {
    foreignkey: 'produto_id',
    as: 'comprasProduto',
    allowNull:false
})

Usuario.hasMany(Compra, {
    foreignkey: 'usuarios_id',
    as: 'usuariosCompra',
    onDelete: 'CASCADE'
})

Compra.belongsTo(Usuario, {
    foreignkey: 'usuario_id',
    as: 'comprasUsuario',
    allowNull:false
})

module.exports = { Compra, Produto, Usuario }