const express = require('express');
const path = require('path');
const fs = require('fs');
const noteData = require('./Develop/db/db.json');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Develop/public'));

app.get('/api/notes', (req, res) => {
    res.json(noteData);
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop/public/notes.html'));
});

app.post('/api/notes', (req, res) => {
    req.body.id = noteData.length.toString();
    noteData.push(req.body);
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        JSON.stringify(noteData, null, 2)
    );
    res.send(noteData);
});

app.delete('/api/notes/:id', (req, res) => {
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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop/public/index.html'));
});


app.listen(PORT, () => {
    console.log('Server Started');
});