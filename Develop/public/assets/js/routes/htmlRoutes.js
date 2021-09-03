const router = require('express').Router();
const path = require('path');

// ---------------GET---------------//
//     gets pages for the webpage   //
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../index.html'));
});

module.exports = router;