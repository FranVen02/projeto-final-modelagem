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

const listar = async (req, res) =>{

    try{

        const dados = await Usuario.findAll()
        res.status(200).json(dados)
    }catch(err){

        console.error('Erro ao listar dados.', err)
        res.status(500).json({message: 'Erro ao listar os dados.', err})
    }
}

const apagar = async (req, res) =>{

    const codUser = req.params.id

    try{

        const dados = await Usuario.findByPk(codUser)
        if(dados){

            await Usuario.destroy({where: {codUser : codUser}})
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

    let codUser = req.params.id
    let valores = req.body

    try{

        let dados = await Usuario.findByPk(codUser)
        if(dados){

            await Usuario.update(valores, {where: {codUser: codUser}})
            res.status(200).json(valores)
        }else{

            res.status(404).json({message: 'Dados não encontrados.'})
            console.log('Dados não encontrados.')
        }
    }catch(err){

        res.status(500).json({message: 'Erro na atualização dos dados.', err})
        console.error('Erro na atualização dos dados.', err)
    }
}

const consultarNome = async (req, res) =>{

    const firstName = req.params.firstName
    try{

        const dados = await Usuario.findOne({where: {firstName: firstName}})
        if(dados){

            console.log('Usuário não encontrado.')
            res.status(200).json({message: 'Usuário não encontrado.'})
        }else{

            console.log('Usuário não encontrado.')
            res.status(404).json({message: 'Usuário não encontrado.'})
        }
    }catch(err){

        console.error('Erro ao encontrar usuário por nome: ', err)
        res.status(500)
    }
}




module.exports = { cadastrar, listar, apagar, atualizar, consultarNome }

