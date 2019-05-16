var models = require('../models');


exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express' });
};

exports.submit_studentID = function(req, res, next) {
    models.students.findOne({where: {student_id: req.body.lead_id}}).then(function (validInvalid) {
        if(validInvalid == null){
            //if student_ID invalid ==> alarm

            res.render('landing', { title: 'Express',invalid:1});

        }else{
            //student_ID valid ==> search & print out

            models.books.findAll ({
                include:[{
                    model: models.classes,
                    required: true,
                    include:[{
                        model: models.schedules,
                        required: true,
                            where: {
                                student_id: req.body.lead_id
                            }
                    }]
                }]

            }
            ).then(function(book){
                var resObj = book.map(function (book){
                    return Object.assign(
                        {},
                        {
                            book_title: book.book_title,
                            book_publisher: book.book_publisher,
                            book_location: book.location,
                            class_info: book.classes.map(function (classes) {
                                return Object.assign(
                                    {},
                                    {
                                        class_title: classes.class_title
                                    }
                                )
                            })
                        }
                    );
                });
                console.log(resObj);
                //res.json(resObj);
                res.render('list', { title: 'Express', leads: resObj });

            })
        }

    })
};


