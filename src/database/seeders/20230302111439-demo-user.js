'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
     await queryInterface.bulkInsert('users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        firstName: 'Ana',
        lastName: 'Ana10',
        email: 'ana10@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
        }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
