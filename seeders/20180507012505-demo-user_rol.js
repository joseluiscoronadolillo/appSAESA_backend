'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserRols',[
    {
      rol_id: 2,
      user_id: 1,
    },
    {
      rol_id: 3,
      user_id: 2,
    },
    {
      rol_id: 1,
      user_id: 1,
    },

    ],{});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserRols', null, {});
  }
};