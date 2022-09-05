'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        for (let i = 1; i < 6; i++) {
            await queryInterface.bulkInsert('medico', [{
                ID_MEDICO: i,
                ID_USUARIO: i,
                CEDULA: '099999999' + i,
                ESTADO_CIVIL: 'SOLTERO',
                CODIGO_MEDICO: '091234567891235' + i,
                FECHA_REG_MED: new Date(),
                ESPECIALIDAD: 'MÉDICO GENERAL'
            }], {});
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('medico', null, {});
    }
};