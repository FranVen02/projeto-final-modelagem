const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    PORT: process.env.PORT1
})

sequelize.authenticate()

.then(() =>{

    console.log('Conexão com o banco de dados realizada com sucesso.')
})
.catch((err) =>{

    console.error('Erro de conexão com o banco de dados.', err)
})

module.exports = sequelize