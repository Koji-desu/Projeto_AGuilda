const fs = require('fs')
const { Usuario } = require('../app/models/')
const {validationResult} = require('express-validator')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcryptjs')
const validacoes = require('../middlewares/validadorDeForm')

const controller = {
    cadastrarUser: async (req, res)=>{
        const erros = validationResult(req); // Validar os dados digitados
        if(!erros.isEmpty()){ // Caso há erros renderizar a view e mapeando os erros
           
            return res.render('cadastro', {erros: erros.errors})
        } 
        

        // Capturar os dados digitados no form
        const {nome, email, senha} = req.body
        const hash = bcrypt.hashSync(senha, 10)


        const resultado = await Usuario.create({
            nome,
            email,
            senha:hash
        });
        res.redirect('/login')
    },
    logar: async (req, res)=>{
        const {email, senha} = req.body // Capturar as informações digitadas no body pelo usuario
        const usuario = await Usuario.findOne({
            where: {email: email} // Verificar no banco de dados se existe algum email identico ao que foi digitado no body
        }) 
        if(!usuario ){ // Caso o usuario não exista, enviar uma mensagem derro (!!!temporario!!!)
            res.locals.loginError=true
            
            return res.render('login')
        }
        
        const senhaCorreta= bcrypt.compareSync(senha, usuario.senha) // fazer a comparação entre a senha digitada e os hashs do banco de dados

        if(!senhaCorreta){ // Caso o usuario não exista, enviar uma mensagem derro (!!!temporario!!!)
            res.locals.loginError=true
            
            return res.render('login')
        }

        // Caso o usuario esteja cadastrado dar uma session para ele e redirecionar ele para a Home

        req.session.usuario = usuario

        return res.redirect('/')
    }
}

module.exports = controller