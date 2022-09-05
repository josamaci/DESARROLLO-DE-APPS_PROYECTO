'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        for (let i = 1; i < 10; i++) {
            await queryInterface.bulkInsert('usuario', [{
                ID_USUARIO: i,
                NOMBRE: 'Nombre' + i,
                APELLIDO: 'Apellido' + i,
                CORREO: 'correo' + i + '@ex.com',
                CONSTRASENIA: 'contraseña',
                FECHA_NAC: new Date(),
                TELEFONO: '099999999' + i,
                SEXO: 'MASCULINO',
            }], {});
        }
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('usuario', null, {});
    }
};