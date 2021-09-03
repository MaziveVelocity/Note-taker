const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('express');

// funnels routes from other two route files through here to go to server.js
router.use(htmlRoutes);
router.use(apiRoutes);

module.exports = router;