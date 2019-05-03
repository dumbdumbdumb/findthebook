'use strict';
var models = require('../models');


module.exports = function(sequelize, DataTypes){
    var schedules = sequelize.define(
        'schedules', {
            schedule_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            student_id: {
            type: DataTypes.INTEGER,

            allowNull: false,
            // references: models.students,
            // referencesKey: 'student_id'

            },
            class_id: {
            type: DataTypes.CHAR(20),
            allowNull: false//,
            // references: models.classes,
            // referencesKey: 'class_id'
            }
        }

    );
    schedules.associate = function (models) {
        schedules.belongsTo(models.students,{
            foreignKey: 'student_id'
        });
    };


    return schedules;
};
