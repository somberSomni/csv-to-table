const express = require('express')
const app = express();
const path = require('path');
const route = require('./routes');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(route);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT, () => { console.log(`🌎Server is running on port ${PORT}`) })