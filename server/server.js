const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5002;
const taskRouter = require('./routes/task.router.js');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true})); // What does this mean?
app.use('/task', taskRouter);


// listen on the PORT
app.listen(port, () => {
    console.log('lisstening on port', port);
});