'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        for (let i = 6; i < 10; i++) {
            await queryInterface.bulkInsert('paciente', [{
                ID_PACIENTE: i,
                ID_USUARIO: i,
                CEDULA: '099999999' + i,
            }], {});
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('paciente', null, {});
    }
};