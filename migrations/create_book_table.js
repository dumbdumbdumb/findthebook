'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('books', {
            book_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            book_title: {
                allowNull: false,
                type: Sequelize.CHAR(30)
            },
            book_publisher: {
                allowNull: false,
                type: Sequelize.CHAR(20)
            },
            location: {
                allowNull: false,
                type: Sequelize.CHAR(20)
            },
            createdAt: {
                allowNull: true,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE
            }
        })
    },
    down: function(queryInterface, Sequelize){
        return queryInterface.dropTable('books');
    }
};
