module.exports = (sequelize, dataTypes)=>{
    const Personagem = sequelize.define(
        'Personagem', {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,   
        },
        usuarios_id:{
            type: dataTypes.INTEGER,
        },
        img:{
            type: dataTypes.STRING(256)
        },
        nome:{
            type: dataTypes.STRING(45)
        },
        for: dataTypes.INTEGER, // Força
        mod_for: dataTypes.INTEGER, // Modificador de Força
        des: dataTypes.INTEGER, // Destreza
        mod_des: dataTypes.INTEGER, // Modificador de Destreza
        con: dataTypes.INTEGER, // Constituição
        mod_con: dataTypes.INTEGER, // Modificador de Constituição
        int: dataTypes.INTEGER, // Inteligencia
        mod_int: dataTypes.INTEGER, // Modificador de Inteligencia
        sab: dataTypes.INTEGER, // Sabedoria
        mod_sab: dataTypes.INTEGER, // Modificador de Sabedoria
        car: dataTypes.INTEGER, //
        mod_car: dataTypes.INTEGER, // Modificador de
        raca: dataTypes.STRING(45),
        origem: dataTypes.STRING(45),
        classe: dataTypes.STRING(45),
        nivel: dataTypes.INTEGER,
        vida_max: dataTypes.INTEGER,

    },{
        timestamps:false,
        tableName: 'personagens'
    })
    
        Personagem.associate = (models)=>{
        Personagem.belongsTo(models.Usuario, {foreignKey: 'usuarios_id', as: 'personagem_usuario'})
    }
    return Personagem
}