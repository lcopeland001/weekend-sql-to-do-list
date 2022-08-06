const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 5002

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true})) // What does this mean?



app.listen(port, () => {
    console.log('lisstening on port', port);
})