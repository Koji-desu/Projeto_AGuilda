const controller = {
    index: (req, res)=>{ 
        res.render('index')
    },
    cadastro: (req,res)=>{ 
        res.render('cadastro')
    }
}

module.exports = controller