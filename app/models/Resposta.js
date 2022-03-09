module.exports = (sequelize, dataTypes)=>{
    const Resposta = sequelize.define(
        'Resposta',
        {
            id:{
                type: dataTypes.INTEGER,
                primaryKey:true,
                autoIncrement: true
            },
            anuncios_id: dataTypes.INTEGER,
            usuarios_id: dataTypes.INTEGER,
            texto: dataTypes.STRING(100) 
    },{
        timestamps:true,
        tableName: 'respostas'
    })


        Resposta.associate = (models)=>{
        Resposta.belongsTo(models.Usuario, {foreignKey: 'usuarios_id', as: 'resposta_usuario'})
        Resposta.hasMany(models.Anuncio, {foreignKey: 'anuncios_id', as: 'resposta_anuncio'})
    }
    return Resposta
    
}