'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ots',[
    {
      numero_ot: 1001,
      fecha_ot: '2018-04-15 15:19:06',
      trabajo: 'Control de Plagas',
      SubestacionId: 1,
    },

    ],{});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Ots', null, {});
  }
};