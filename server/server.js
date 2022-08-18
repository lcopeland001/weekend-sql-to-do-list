const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5002;
const taskRouter = require('./routes/task.router.js');

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));
app.use('/task', taskRouter);


// listen on the PORT
app.listen(port, () => {
    console.log('lisstening on port', port);
});