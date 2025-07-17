const Usuario = require('../model/Usuario')

const cadastrar = async (req, res) =>{

    const valores = req.body
    try{

        const dados = await Usuario.create(valores)
        console.log('Cadastro realizado com sucesso!')
        res.status(200).json(dados)
    }catch(err){

        console.error('Erro no cadastro dos dados.', err)
        res.status(500).json({message: 'Erro no cadastro dos dados.', err})
    }
}

const listar = async (res) =>{

    try{

        const dados = await Usuario.findAll()
        res.status(200).json(dados)
    }catch(err){

        console.error('Erro ao listar dados.', err)
        res.status(500).json({message: 'Erro ao listar os dados.', err})
    }
}

const apagar = async (req, res) =>{

    const codProd = req.params.id

    try{

        const dados = await Usuario.findByPk(codUser)
        if(dados){

            await Usuario.destroy({where: {codProd: codProd}})
            res.status(204).json({message: 'Dados excluídos com sucesso.'})
        }else{

            res.status(404).json({message: 'Dados não encontrados.'})
            console.log('Dados não encontrados.')
        }
    }catch(err){

        res.status(500).json({message: 'Erro na exclusão dos dados.', err})
        console.error('Erro na exclusão dos dados.', err)
    }
}

const atualizar = async (req, res) =>{

    const codProd = req.params.id
    const valores = req.body

    try{

        const dados = await Usuario.findByPk(codProd)
        if(dados){

            await Usuario.update(valores, {where: {codProd: codProd}})
            dados = await Usuario.findByPk(codProd)
            res.status(200).json({message: 'Dados atualizados com sucesso.', dados})
        }else{

            res.status(404).json({message: 'Dados não encontrados.'})
            console.log('Dados não encontrados.')
        }
    }catch(err){

        res.status(500).json({message: 'Erro na atualização dos dados.', err})
        console.error('Erro na atualização dos dados.', err)
    }
}

const consultar = async (req, res) => {

    const codUser = req.params.id
    try{

        const produto = await Produto.findByPk(codUser)
        if(produto){

            res.status(200).json(produto)
        }else{

            res.status(404).json({ message: 'Compra com o ID ' + codUser + ' não encontrada.' })
        }
    }catch(err){

        console.error('Erro ao buscar o produto!', err)
        res.status(500).json({message: 'Erro ao buscar o produto!', err})
    }
}




module.exports = { cadastrar, listar, apagar, atualizar, consultar }

