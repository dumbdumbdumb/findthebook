'use strict';
module.exports = function(sequelize, DataTypes){
    var students = sequelize.define('students', {
        student_id: {
            type: DataTypes.INTEGER,

            allowNull: false,
            primaryKey: true
        },
        student_name: {
            type: DataTypes.CHAR(30),
            allowNull: false
        }
    });

    students.associate = function(models){
        students.hasMany(models.schedules,{
            foreignKey: 'student_id'
        });
    };

    return students;
};
