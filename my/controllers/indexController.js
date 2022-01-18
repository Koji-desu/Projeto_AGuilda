const usuarios = require('../database/usuarios.json')
const {check, validationResult, body} = require('express-validator')

const controller = {
    index: (req, res)=>{ 
        res.render('index')
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
    cadastrar: (req, res)=>{
        let erros = validationResult(req)

        // caso não há erros retornar a home
        if(erros.isEmpty()){
            return res.redirect('/')
        } else {
            res.render('cadastro', {erros: erros.mapped(), old: req.body})
        }
    }
}

module.exports = controller