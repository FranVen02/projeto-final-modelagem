const express = require('express')
const cors = require('cors')

require('dotenv').config()

const conn = require('./db/conn')
const app = express()

const compraController = require('./controller/Compra.controller')
const produtoController = require('./controller/Produto.controller')
const usuarioController = require('./controller/Usuario.controller')

const PORT = process.env.PORT2
const hostname = process.env.DB_HOST

// ------------------------------------------- Middleware -------------------------------------------

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// --------------------------------------------------------------------------------------------------

app.post('/compra', compraController.cadastrar)
app.get('/compra', compraController.listar)
app.delete('/compra/:id', compraController.apagar)
app.put('/compra/:id', compraController.atualizar)

app.post('/produto', produtoController.cadastrar)
app.get('/produto', produtoController.listar)
app.delete('/produto/:id', produtoController.apagar)
app.put('/produto/:id', produtoController.atualizar)
app.get('/produto', produtoController.consultar)

app.post('/usuario', usuarioController.cadastrar)
app.get('/usuario', usuarioController.listar)
app.delete('/usuario/:id', usuarioController.apagar)
app.put('/usuario/:id', usuarioController.atualizar)
app.get('/usuario', usuarioController.consultar)

app.get('/', (res) =>{

    res.status(200).json({message: 'Aplicação rodando!'})
})

// --------------------------------------------------------------------------------------------------

conn.sync()

.then(() =>{

    app.listen(PORT, hostname, () =>{

        console.log(`Aplicação rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err) =>{

    console.error('Erro de conexão com a aplicação.', err)
})