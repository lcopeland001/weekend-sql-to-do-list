const { log } = require('console');
const express = require('express');
const { appendFile } = require('fs');
const taskRouter = express.Router();
const pool = require('../modules/pool.js');

//DB connection
const taskList = [];

//GET
taskRouter.get('/', (req, res) =>{
        console.log('in GET/task');
        const queryText = 'SELECT * FROM "task";';
        pool.query(queryText).then((result) => {
                console.log('SELESCT SUCCESS', result);
                res.send(result.rows);
        }).catch ((error) => {
                console.log('Error in GET / task', error);
                res.sendStatus(500);
        });
});

//POST
taskRouter.post('/', (req, res) => {
        const input = req.body;
        const queryText = `INSERT INTO "task" ("task", "complete") 
        VALUES ($1, $2);`;
        pool.query(queryText, [input.task, input.complete])
        .then((results) => {
                console.log(results);
        }).catch((error) => {
                console.log('Error in POST / task', error);
                res.sendStatus(500);
        });
});

module.exports = taskRouter;