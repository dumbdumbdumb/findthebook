var models = require('../models')


exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express' });
}


exports.submit_studentID = function(req, res, next) {
        return models.books.findAll ({
                //attributes: ['class_id'],
            include:[{
                model: models.classes,
                include:[{
                    model: models.schedules,
                    include:[{
                        model: models.students,
                        //attributes: ['student_id'],
                        where: {
                            student_id: req.body.lead_id
                        }
                    }]
                }]
            }]

        }
        ).then(function(book) {
            // console.log(book[0].class.schedules);
            // return 0;


            var resObj = book.map(function (book){
                return Object.assign(
                    {},
                    {
                        book_title: book.book_title,
                        book_publisher: book.book_publisher,
                        class_info: book.classes.map(function (classes) {
                            return Object.assign(
                                {},
                                {
                                    class_title: classes.class_title
                                }
                            )

                            }

                        )
                    });
                }

            );
            console.log(resObj);
            // var array = [];
            // for (var i = 0; i < leads.length; i++) {
            //     array[i] = leads[i].dataValues.class_id;
            // }
            //
            // return models.classes.findAll({
            //     attributes: ['class_title'],
            //     where: {
            //         class_id: array
            //     }
            //
            // })
            }
        ).then(function(lead) {
                // var leads =[];
                // for (var i = 0; i < lead.length; i++) {
                //     leads.push(lead[i].dataValues.class_title);
                //     console.log(lead[i].dataValues.class_title);
                // }
                //res.redirect('/list');
            //res.render('list',{leads:leads} );


        }
    );
}


