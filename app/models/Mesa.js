module.exports = (sequelize, dataTypes)=>{
    const Mesa = sequelize.define(
        'Mesa',{
        id:{
            type: dataTypes.INTERGER,
            primaryKey:true,
            autoIncrement: true
        },
        nome:{
            type: dataTypes.STRING(45)

        },
        data_criacao:dataTypes.DATE,
        proximo_jogo:dataTypes.DATE,

        chat: dataTypes.LONGTEXT,
        rolagens: dataTypes.LONGTEXT
    },{
        timestamps:false,
        tableName: 'mesas'
    })
}