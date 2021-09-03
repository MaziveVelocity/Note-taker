const express = require('express');
const apiRoutes = require('./Develop/public/assets/js/routes/apiRoutes');
const htmlRoutes = require('./Develop/public/assets/js/routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Develop/public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log('Server Started');
});