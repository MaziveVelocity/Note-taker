const express = require('express');
const path = require('path');
const fs = require('fs');
const noteData = require('./Develop/db/db.json');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('develop/public'));

app.get('/api/notes', (req, res) => {
    res.json(noteData);
    console.log(noteData);
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop/public/notes.html'));
});