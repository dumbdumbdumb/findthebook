var models = require('../models')


exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express' });
}


// exports.submit_lead = function(req, res, next) {
//     console.log("lead email:",req.body.lead_id);
//     res.redirect('/');
// }


exports.submit_lead = function(req, res, next) {
    //models.schedules.hasOne(models.students,{foreignKey: 'student_id'});
    //models.students.belongsTo(models.schedules,{foreignKey: 'student_id'});

    // models.schedules.hasOne(models.classes,{foreignKey: 'class_id'});
    // models.classes.belongsTo(models.schedules,{foreignKey: 'class_id'});

    // return models.schedules.findAll({attributes: ['class_id']}).then(function (result) {
    //     var loopIndex = 0;
    //     for(loopIndex of result){
    //         console.log("1212\n ")
    //
    //     }
    // })


        return models.schedules.findAll ({
                attributes: ['class_id'],
                        include:[{
                            model: models.students,
                            attributes: ['student_id'],
                            where: {
                                student_id: req.body.lead_id
                            }
                        }]
        }
        ).then(function(lead) {
                // var jsonData = JSON.parse(lead);
                // for (var i = 0; i < jsonData.schedules.length; i++) {
                //     var counter = jsonData.schedules[i];
                //     console.log(counter.dataValues);
                // }
                for (var i = 0; i < lead.length; i++) {
                    console.log(lead[i].dataValues.class_id);
                }

            //res.render('lead/lead', { lead : lead });
    }
    );
}