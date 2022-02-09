const {check} = require('express-validator')

const validacoes = [
    check('email')
    .notEmpty()
    .withMessage("O campo deve ser preenchido")
    .isEmail().withMessage("Deve ser preenchido com um Email válido")
    .bail()
    
,
   check('senha')
   .notEmpty().withMessage("Deve ser preenchido")
   .bail()
   .isLength({min:8}).withMessage("A senha deve ter no minímo 8 caracteres")
,
    check('nome')
    .notEmpty().withMessage("Deve ser preenchido")
    .bail()
    .isLength({min:3}).withMessage("No minímo 3 caracteres")
    
]

module.exports = validacoes