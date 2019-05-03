'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('classes', {
            class_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.CHAR(20)
            },
            class_title: {
                allowNull: false,
                type: Sequelize.CHAR(20)
            },
            required_book_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: books,
                    key: 'book_id'
                }
            }
        })
    },
    down: function(queryInterface, Sequelize){
        return queryInterface.dropTable('classes');
    }
};
