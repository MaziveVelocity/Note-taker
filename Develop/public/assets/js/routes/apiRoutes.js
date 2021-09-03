const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const noteData = require('../../../../db/db.json');

// ---------------GET---------------//
//  gets note data for the webpage  //
router.get('/notes', (req, res) => {
    res.json(noteData);
});

// ---------------POST---------------//
// updates note data for the webpage //
router.post('/notes', (req, res) => {
    req.body.id = noteData.length.toString();
    noteData.push(req.body);
    fs.writeFileSync(
        path.join(__dirname, '../../../../db/db.json'),
        JSON.stringify(noteData, null, 2)
    );
    res.send(noteData);
});

// ---------------DELETE---------------//
//  deletes note data for the webpage  //
router.delete('/notes/:id', (req, res) => {
    for (var i = 0; i < noteData.length; i++) {
        if (noteData[i].id === req.params.id) {
            noteData.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../../../../db/db.json'),
                JSON.stringify(noteData, null, 2)
            );
            res.status(200).json('Item successfully deleted');
        }else{

        }
    };
});

module.exports = router;