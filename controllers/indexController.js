const usuarios = require('../database/usuarios.json')
const {check, validationResult, body} = require('express-validator')
const bcrypt = require('bcryptjs')

const controller = {
    logged: (req, res)=>{

        // // Capturar se o usuario está com uma sessão ativa
        // if(req.session.usuario != undefined){

        // // Se sim enviar informações para a view para assim imprimir o header correto. Mais info em partials/Header
            // return res.render('index', {usuarios: req.session.usuario})
        // }else{ 
            // Caso não tenha uma sessão ativa renderizar a view padrão
            return res.render('index')
    // }
    
    },
    cadastro: (req,res)=>{ 
        res.render('cadastro', {erros: []})
    },
    login: (req, res)=>{
        res.render('login')
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
    },
    perfil: (req, res)=>{
        res.render('perfil', {usuarios: req.session.usuario})
    },
    faq: (req, res)=>{
        res.render('faq')
    },
    creditos: (req, res)=>{
        res.render('creditos')
    },
    interface: (req, res)=>{
        res.render('interface')
    }
}

    module.exports = controller