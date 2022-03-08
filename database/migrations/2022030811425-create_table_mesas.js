'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('mesas', { 
      id: { 
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING
    },
    data_criacao:{
      type: Sequelize.DATE
    },
    proximo_jogo:{
      type: Sequelize.DATE
    },
    chat: {
        type: Sequelize.STRING(256)
    },
  rolagens: {
    type: Sequelize.STRING(256)
  } });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('mesas');
  }
};

