'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('students', {
        student_id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        student_name: {
            allowNull: false,
            type: Sequelize.CHAR(30)
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
    return queryInterface.dropTable('students');
}
};
