const router = require('express').Router();
const fs = require('fs');
const noteData = require('../../../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(noteData);
});

router.post('/notes', (req, res) => {
    req.body.id = noteData.length.toString();
    noteData.push(req.body);
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        JSON.stringify(noteData, null, 2)
    );
    res.send(noteData);
});

router.delete('/notes/:id', (req, res) => {
    for (var i = 0; i < noteData.length; i++) {
        if (noteData[i].id === req.params.id) {
            noteData.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, './Develop/db/db.json'),
                JSON.stringify(noteData, null, 2)
            );
            res.status(200).json('Item successfully deleted');
        }else{

        }
    };
});

module.exports = router;