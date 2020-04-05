const router = require('express').Router({ mergeParams: true });

const fieldtype = require('./index.js');

router.get('/', fieldtype.list);

module.exports = router
