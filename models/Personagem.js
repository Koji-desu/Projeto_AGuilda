module.exports = (sequelize, dataTypes)=>{
    const Personagem = sequelize.define(
        'Personagem', {
        id:{
            type:dataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true,   
        },
        usuarios_id:{
            type: dataTypes.INTERGER,
        },
        img:{
            type: dataTypes.STRING(256)
        },
        nome:{
            type: dataTypes.STRING(45)
        },
        for: dataTypes.INTERGER, // Força
        mod_for: dataTypes.INTERGER, // Modificador de Força
        des: dataTypes.INTERGER, // Destreza
        mod_des: dataTypes.INTERGER,
        con: dataTypes.INTERGER

    },{
        timestamps:false,
        tableName: 'personagens'
    })
    Personagem.associate = (models)=>{
        Personagem.belongsTo(models.Usuario, {foreignKey: 'usuarios_id', as: 'personagem_usuario'})
    }
}