'use strict';
var models = require('../models');

module.exports = function(sequelize, DataTypes){
    var classes = sequelize.define('classes', {
        class_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.CHAR(20)
        },
        class_title: {
            allowNull: false,
            type: DataTypes.CHAR(20)
        },
        required_book_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: models.books,
            referencesKey:'book_id'
        }
    });

    return classes;
};
