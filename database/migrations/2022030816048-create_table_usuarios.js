'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('usuarios', { 
      id: { 
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    senha:{
       type: Sequelize.STRING,
    },
    img_perfil: {
        type: Sequelize.STRING(256)
    } });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('usuarios');
  }
};
