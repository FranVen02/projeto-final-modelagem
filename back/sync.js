require('dotenv').config()
const conn = require('./db/conn')
const { Compra, Produto, Usuario } = require('./model/rel')

async function syncDataBase() {

    try{

        await conn.sync({force: true})
        console.log('Tabelas criadas e banco de dados sincronizado!')
    }catch(err){

        console.error('Erro na sincronização com o banco de dados.', err)
    }finally{

        await conn.close()
        console.log('Banco de dados fechado!')
    }
}syncDataBase()