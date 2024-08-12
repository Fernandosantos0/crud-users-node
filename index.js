require('dotenv').config();

const app = require('./app.js');
const colors = require('colors');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost'
app.listen(port, host, () => {
    console.warn('Express JS'.yellow.bold);
    console.log(`Server ON - http://${host}:${port}`.green.bold);
});