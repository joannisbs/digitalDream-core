const router = require('express').Router({ mergeParams: true });

const fieldTYpe = require('./field-types/router');

router.use('/field-type', fieldTYpe)

module.exports = router
