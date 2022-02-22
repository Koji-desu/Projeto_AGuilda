module.exports = (sequelize, dataTypes)=>{
    const Anuncio = sequelize.define(
        'Anuncio',
        {
            id: {
                type: dataTypes.INTERGER,
                primaryKey:true,
                autoIncrement:true
            },
            usuarios_id: {
                type: dataTypes.INTERGER
            },
            nome: {
                type: dataTypes.STRING(100)
            },
            texto:{
                type: dataTypes.STRING(100)
            },
            proximo_jogo:{
                type: dataTypes.DATE
            }
    },{
        timestamps:false,
        tableName: 'anuncios'
    })

    Anuncio.associate = (models)=>{
        Anuncio.belongsTo(models.Usuario, {foreignKey: 'usuarios_id', as: 'anuncios_usuario'})
        Anuncio.hasMany(models.Resposta, {foreignKey: 'anuncios_id', as: 'anuncios_resposta'})
    }
}