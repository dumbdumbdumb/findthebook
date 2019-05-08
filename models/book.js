'use strict';
module.exports = function(sequelize, DataTypes){
    var books = sequelize.define('books', {
        book_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        book_title: {
            allowNull: false,
            type: DataTypes.CHAR(30)
        },
        book_publisher: {
            allowNull: false,
            type: DataTypes.CHAR(20)
        },
        location: {
            allowNull: false,
            type: DataTypes.CHAR(20)
        }
    });
    books.associate = function(models){
        books.hasMany(models.classes,{
            foreignKey: 'required_book_id'
        });

    };
    return books;
};
