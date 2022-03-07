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
        mod_des: dataTypes.INTERGER, // Modificador de Destreza
        con: dataTypes.INTERGER, // Constituição
        mod_con: dataTypes.INTERGER, // Modificador de Constituição
        int: dataTypes.INTERGER, // Inteligencia
        mod_int: dataTypes.INTERGER, // Modificador de Inteligencia
        sab: dataTypes.INTERGER, // Sabedoria
        mod_sab: dataTypes.INTERGER, // Modificador de Sabedoria
        car: dataTypes.INTERGER, //
        mod_car: dataTypes.INTERGER, // Modificador de
        raca: dataTypes.STRING(45),
        origem: dataTypes.STRING(45),
        classe: dataTypes.STRING(45),
        nivel: dataTypes.INTERGER,
        vida_max: dataTypes.INTERGER,

    },{
        timestamps:false,
        tableName: 'personagens'
    })
    
        Personagem.associate = (models)=>{
        Personagem.belongsTo(models.Usuario, {foreignKey: 'usuarios_id', as: 'personagem_usuario'})
    }
    
}