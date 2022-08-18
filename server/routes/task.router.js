const express = require('express');
const { appendFile } = require('fs');
const taskRouter = express.Router();

//DB connection
const taskList = [];

//GET


//POST
taskRouter.post('/', (req,res) => {
        const task = req.body;
        console.log('task:', task);
        taskList.push(task)
        res.sendStatus(201);
});

module.exports = taskRouter;