const router = require('express').Router({ mergeParams: true });

const fieldTYpe = require('./field-types/field-type.router');

router.use('/field-type', fieldTYpe)

module.exports = router
