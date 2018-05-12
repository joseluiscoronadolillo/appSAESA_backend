'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rols',[
    {
      descripcion:"Administrador",
    },
    {
      descripcion:"Control de Plagas",
    },
    {
      descripcion:"Termografia",
    },

    ],{});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Rols', null, {});
  }
};

