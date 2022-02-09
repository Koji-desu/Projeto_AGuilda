const fs = require('fs')
const users = require('../database/usuarios.json')
const {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')

const controller = {
    user: (req, res)=>{
        const erros = validationResult(req); // Validar os dados digitados
        if(!erros.isEmpty()){ // Caso há eros renderizar a view e mapeando os erros
            return res.render('cadastro', {erros: erros.mapped()})
        }

        // Capturar os dados digitados no form
        const nome = req.body.nome
        const email = req.body.email;
        const senha = req.body.senha;
        const hash = bcrypt.hashSync(senha, 10)
        const usuario = {nome, email, hash}


        // Dar um ID para o novo membro
        usuario.id = users[users.length -1].id +1;

        // Dar push para o banco de dados do novo usuario
        users.push(usuario)

        fs.writeFileSync(__dirname + "/../database/usuarios.json", JSON.stringify(users, null, 4))


        // Após a criação da nova conta levar o usuario para a tela de login
        res.redirect('/login')
    }
}

module.exports = controller