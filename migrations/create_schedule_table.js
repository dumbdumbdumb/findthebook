'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('schedules', {
            schedule_id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            student_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: students,
                    key: 'student_id'
                }
            },
            class_id: {
                allowNull: false,
                type: Sequelize.CHAR(20),
                references: {
                    model: classes,
                    key: 'class_id'
                }
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
        return queryInterface.dropTable('schedules');
    }
};
