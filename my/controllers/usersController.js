const fs = require('fs')
const users = require('../database/usuarios.json')
const {validationResult} = require('express-validator')

const controller = {
    user: (req, res)=>{
        const erros = validationResult(req);
        if(!erros.isEmpty()){
            return res.render('cadastro', {erros: erros.mapped()})
        }

        const email = req.body.email;
        const senha = req.body.senha;
        const usuario = {email, senha}

        usuario.id = users[users.length -1].id +1;

        users.push(usuario)

        fs.writeFileSync(__dirname + "/../database/usuarios.json", JSON.stringify(users, null, 4))

        res.redirect('/login')
    }
}

module.exports = controller