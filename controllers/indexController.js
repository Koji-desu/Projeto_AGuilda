const usuarios = require('../database/usuarios.json')
const {check, validationResult, body} = require('express-validator')
const bcrypt = require('bcryptjs')

const controller = {
    logged: (req, res)=>{

        // Capturar se o usuario está com uma sessão ativa
        if(req.session.usuario != undefined){

        // Se sim enviar informações para a view para assim imprimir o header correto. Mais info em partials/Header
            return res.render('index', {usuarios: req.session.usuario})
        }else{ 
            // Caso não tenha uma sessão ativa renderizar a view padrão
            return res.render('index')
        }
    
    },
    cadastro: (req,res)=>{ 
        res.render('cadastro')
    },
    login: (req, res)=>{
        res.render('login')
    },
    logar: (req, res)=>{
        const {email, senha} = req.body // Capturar as informações digitadas no body pelo usuario
        const usuario = usuarios.find(u => u.email == email) // Verificar no banco de dados se existe algum email identico ao que foi digitado no body
        if(usuario === undefined ){ // Caso o usuario não exista, enviar uma mensagem derro (!!!temporario!!!)
            return res.send("email ou senha incorreto, tente novamente!")
        }
        
        const senhaCorreta= bcrypt.compareSync(senha, usuario.hash) // fazer a comparação entre a senha digitada e os hashs do banco de dados

        if(!senhaCorreta){ // Caso o usuario não exista, enviar uma mensagem derro (!!!temporario!!!)
            return res.send("email ou senha incorreto, tente novamente!")
        }

        // Caso o usuario esteja cadastrado dar uma session para ele e redirecionar ele para a Home

        req.session.usuario = usuario

        return res.redirect('/')
    },
    

    anuncios: (req, res)=>{
        res.render('anuncios', {usuarios: req.session.usuario})
    },
    hub: (req, res)=>{
        res.render('hub', {usuarios: req.session.usuario})
    },
    logout: (req, res)=>{
        req.session.usuario = undefined // definir a session como indefinida quando o usuario clicar em logout e redirecionar ele a home
        res.redirect('/')
    }
}

    module.exports = controller