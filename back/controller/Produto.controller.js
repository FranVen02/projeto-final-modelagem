const Produto = require('../model/Produto')

const cadastrar = async (req, res) =>{

    const valores = req.body
    try{

        const dados = await Produto.create(valores)
        console.log('Cadastro realizado com sucesso!')
        res.status(200).json(dados)
    }catch(err){

        console.error('Erro no cadastro dos dados.', err)
        res.status(500).json({message: 'Erro no cadastro dos dados.', err})
    }
}

const listar = async (req, res) =>{

    try{

        const dados = await Produto.findAll()
        res.status(200).json(dados)
    }catch(err){

        console.error('Erro ao listar dados.', err)
        res.status(500).json({message: 'Erro ao listar os dados.', err})
    }
}

const apagar = async (req, res) =>{

    const codProd = req.params.codProd

    try{

        const dados = await Produto.findByPk(codProd)
        if(dados){

            await Produto.destroy({where: {codProd: codProd}})
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

    const codProd = req.params.codProd
    const valores = req.body

    try{

        let dados = await Produto.findByPk(codProd)
        if(dados){
            await Produto.update(valores, {where: {codProd: codProd}})
            res.status(200).json({message: 'Dados atualizados com sucesso.', valores})
        }else{

            res.status(404).json({message: 'Dados não encontrados.'})
            console.log('Dados não encontrados.')
        }
    }catch(err){

        res.status(500).json({message: 'Erro na atualização dos dados.', err})
        console.error('Erro na atualização dos dados.', err)
    }
}

const consultarId = async (req, res) =>{

    const codProd = req.params.codProd
    try{

        const dados = await Produto.findOne({where: {codProd: codProd}})
        if(dados){

            console.log(dados)
            res.status(200).json(dados)
        }else{

            console.log('Produto não encontrado.')
            res.status(404).json({message: 'Produto não encontrado.'})
        }
    }catch(err){

        console.error('Erro ao encontrar produto por código de registro: ', err)
        res.status(500)
    }
}

module.exports = { cadastrar, listar, apagar, atualizar, consultarId }

