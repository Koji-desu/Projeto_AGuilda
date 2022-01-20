const usuarios = require('../database/usuarios.json')
const {check, validationResult, body} = require('express-validator')

const controller = {
    logged: (req, res)=>{
        if(req.session.usuario != undefined){
            return res.render('Logged/indexLogged', {usuarios})
        }else{
            return res.render('index', {usuarios})
        }
    
    },
    cadastro: (req,res)=>{ 
        res.render('cadastro')
    },
    login: (req, res)=>{
        res.render('login')
    },
    logar: (req, res)=>{
        const {email, senha} = req.body
        const usuario = usuarios.find(u => u.email == email && u.senha == senha)

        if(usuario === undefined){
            return res.send("email ou senha incorreto, tente novamente!")
        }

        // Caso o usuario esteja cadastrado dar uma session para ele e redirecionar ele para a Home

        req.session.usuario = usuario

        return res.redirect('/')
    },
    

    anuncios: (req, res)=>{
        res.render('anuncios')
    },
    hub: (req, res)=>{
        res.render('hub')
    },
    logout: (req, res)=>{
        req.session.usuario = undefined
        res.redirect('/')
    }
}

    module.exports = controller