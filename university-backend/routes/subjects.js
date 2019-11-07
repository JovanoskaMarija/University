const router = require('express').Router();
let Subject = require('../models/subject.model');


router.route('/').get((req, res) => {
    Subject.find()
      .then(subjects => res.json(subjects))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Subject.findOne(req.param.id)
      .then(subject => res.json(subject))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;