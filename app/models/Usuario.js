module.exports = (sequelize, dataTypes)=>{
    const Usuario = sequelize.define(
        'Usuario', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nome:{
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING,
            allowNull:false,
            unique:true,
            validate: {
                isEmail: true,
            }

        },
        senha:{
           type: dataTypes.STRING,
           validate: {
               min: 8
           }
        },
        img_perfil: {
            type: dataTypes.STRING(256)
        }
        
    },{
        tableName: 'usuarios',
        timestamps:false
    })  

        Usuario.associate = (models)=>{
        Usuario.hasMany(models.Personagem, {foreignKey: 'usuarios_id', as: 'usuario_personagens'})
        Usuario.hasMany(models.Resposta, {foreignKey: 'usuarios_id', as: 'usuario_resposta'})
    }
     return Usuario
}