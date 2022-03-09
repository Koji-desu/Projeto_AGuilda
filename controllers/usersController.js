const fs = require('fs')
const { Usuario } = require('../app/models/')
const {validationResult} = require('express-validator')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const bcrypt = require('bcryptjs')

const controller = {
    user: async (req, res)=>{
        const erros = validationResult(req); // Validar os dados digitados
        if(!erros.isEmpty()){ // Caso há erros renderizar a view e mapeando os erros
            return res.render('cadastro', {erros: erros.mapped()})
        }

        // Capturar os dados digitados no form
        const {nome, email, senha} = req.body
        const hash = bcrypt.hashSync(senha, 10)
       /* const usuario = {nome, email, hash} */


        const resultado = await Usuario.create({
            nome,
            email,
            senha
        });

       

        // Dar push para o banco de dados do novo usuario
        /* Usuario.push(usuario)

        fs.writeFileSync(__dirname + "/../database/usuarios.json", JSON.stringify(Usuario, null, 4))

        */
        // Após a criação da nova conta levar o usuario para a tela de login
        res.redirect('/login')
    }
}

module.exports = controller