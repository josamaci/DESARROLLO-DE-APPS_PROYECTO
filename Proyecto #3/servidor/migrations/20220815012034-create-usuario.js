'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('USUARIOs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_US: {
        type: Sequelize.INTEGER
      },
      NOMBRE: {
        type: Sequelize.STRING
      },
      APELLIDO: {
        type: Sequelize.STRING
      },
      CORREO: {
        type: Sequelize.STRING
      },
      CONTRASENIA: {
        type: Sequelize.STRING
      },
      FECHA_NAC: {
        type: Sequelize.DATE
      },
      TELEFONO: {
        type: Sequelize.STRING
      },
      SEXO: {
        type: Sequelize.STRING
      },
      IMAGE: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('USUARIOs');
  }
};