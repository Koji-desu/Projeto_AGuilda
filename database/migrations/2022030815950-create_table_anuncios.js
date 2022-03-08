'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('anuncios', { 
      id: { 
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING
    },
    texto:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    proximo_jogo:{
       type: Sequelize.DATE,
    },
    usuarios_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'usuarios'
          },
          key: 'id'
        }
    } });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('anuncios');
  }
};