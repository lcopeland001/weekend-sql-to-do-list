const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const port = 5002;

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));

const taskRouter = require('./routes/task.router.js');
app.use('/task', taskRouter);


// listen on the PORT
app.listen(port, () => {
    console.log('lisstening on port', port);
});