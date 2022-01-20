const usuario = require('../database/usuarios.json')

const logged = (req, res)=>{
    if(req.session.usuario != undefined){
        return res.render('Logged/indexLogged', {usuario})
    }else{
        return res.render('index')
    }
        

}

module.exports = Logged