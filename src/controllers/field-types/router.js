const router = require('express').Router({ mergeParams: true });

const fieldtype = require('./api.js');

router.get('/', fieldtype.list);

module.exports = router
