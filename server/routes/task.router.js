const { log } = require('console');
const express = require('express');
const { appendFile } = require('fs');
const taskRouter = express.Router();
const pool = require('..modules/pool.js');

//DB connection
const taskList = [];

//GET
taskRouter.get('/', (req, res) =>{
        console.log('in GET/task');
        const queryText = 'SELECT * FROM "task";'
        pool.query(queryText).then((result) => {
                res.send(result.rows);
        }).catch ((error) => {
                console.log('Error in GET / task', error);
                res.sendStatus(500);
        });
})

//POST
taskRouter.post('/', (req,res) => {
        const task = req.body;
        console.log('task:', task);
        taskList.push(task)
        res.sendStatus(201);
});

module.exports = taskRouter;