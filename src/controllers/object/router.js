const router = require('express').Router({ mergeParams: true });

const object = require('./api-object.js');

router.get('/', object.object);

module.exports = router
