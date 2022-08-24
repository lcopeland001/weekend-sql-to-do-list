const { log } = require('console');
const express = require('express');
const { appendFile } = require('fs');
const taskRouter = express.Router();


//DB connection
const pool = require('../modules/pool.js');

//GET
taskRouter.get('/', (req, res) =>{
        console.log('in GET/task');
        let x = document.getElementById("check-box");
        const queryText = 'SELECT * FROM "task";';
        pool.query(queryText).then((result) => {
                console.log('SELESCT SUCCESS', result);
                res.send(result.rows);
                if (result.checkBox == false) {
                        x.checked= true;
                }else if (result.checkBox == true) {
                        x.checked = true
                }
        }).catch ((error) => {
                console.log('Error in GET / task', error);
                res.sendStatus(500);
        });
}); // end GET

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
}); // end POST

//DELETE
taskRouter.delete('/:id', (req, res) => {
        console.log('in DELETE /task');
        const queryText = 'DELETE * FROM "task" WHERE "ID" = $1;';
        pool.query(queryText, [req.params.id])
        .then((results) => {
                res.sendStatus(200);
        }).catch((error) => {
                console.log(error);
                res.sendStatus(500);
        });
}); // end DELETE

// PUT
taskRouter.put('/:id', (req, res) => {
        const treatId = req.params.id;
        console.log(req.body);
    
        const queryText = `
            UPDATE "task" SET "ready" = 'true'
            WHERE "id" = $1;`;
    
        pool.query(queryText, [treatId])
            .then((results) => {
                res.sendStatus(200);
            }).catch((error) => {
                res.sendStatus(500)
            });
        
    }) // end PUT

module.exports = taskRouter;