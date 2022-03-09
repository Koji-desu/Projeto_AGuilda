module.exports = (sequelize, dataTypes)=>{
    const Mesa = sequelize.define(
        'Mesa',{
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nome:{
            type: dataTypes.STRING(45)

        },
        data_criacao:dataTypes.DATE,
        proximo_jogo:dataTypes.DATE,

        chat: dataTypes.TEXT,
        rolagens: dataTypes.TEXT
    },{
        timestamps:false,
        tableName: 'mesas'
    })
    return Mesa
}