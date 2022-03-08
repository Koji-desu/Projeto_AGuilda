module.exports = (sequelize, dataTypes)=>{
    const Resposta = sequelize.define(
        'Resposta',
        {
            id:{
                type: dataTypes.INTERGER,
                primaryKey:true,
                autoIncrement: true
            },
            anuncios_id: dataTypes.INTERGER,
            usuarios_id: dataTypes.INTERGER,
            texto: dataTypes.STRING(100) 
    },{
        timestamps:true,
        tableName: 'respostas'
    })


        Resposta.associate = (models)=>{
        Resposta.belongsTo(models.Usuario, {foreignKey: 'usuarios_id', as: 'resposta_usuario'})
        Resposta.hasMany(models.Anuncio, {foreignKey: 'anuncios_id', as: 'resposta_anuncio'})
    }
    
}