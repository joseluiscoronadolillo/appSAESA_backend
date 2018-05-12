'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',[
    {
      email:"patricio@gmail.com",
      password:"$2a$10$5wEqAYn23mrMIZdVERBlt.jzS1XFT.QLDjDIOkJJ2ik8yzzyvAkrm"
    },
    {
      email:"joseluis@gmail.com",
      password:"$2a$10$5wEqAYn23mrMIZdVERBlt.jzS1XFT.QLDjDIOkJJ2ik8yzzyvAkrm"
    },
    ],{});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
