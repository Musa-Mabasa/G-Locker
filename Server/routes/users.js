const {Router} = require('express');
const router = Router();
const db = require('../database');
const guid = require('generate-unique-id');
const bcrypt = require('bcrypt');
const emailValidator = require('deep-email-validator');

router.use((req, res, next) => {
    next();
});


router.get('/', (req, res) => {
    console.log('GET /users');
    db.query('SELECT * FROM User', (error, results) => {
        if(error){
            res.sendStatus(500);
            return;
        }
        json = JSON.stringify(results[0]);
        res.send(results);
    });
});

async function isEmailValid(email){
    return emailValidator.validate(email);
}

router.post('/register', async (req, res) => {
    console.log('POST /users/register');
    const id = guid({length: 32, useLetters: true, });
    console.log(req.body);
    const {FirstName, LastName, Email, Password} = req.body;

    try{

        const {valid, reason, validators} = await isEmailValid(Email);

        console.log(valid);
        console.log(reason);
        console.log(validators);

        if(!valid){
            res.status(400).send({
                message:'Invalid Email',
                reason: validators[reason].reason
            });
            return;
        }

        bcrypt.hashSync(Password, 10, (error, hash) => {

            const sql = 'Insert Into User(UserId, FirstName, LastName, Email, Password) Values(?,?,?,?,?)';
            db.query(sql, [id, FirstName, LastName, Email, hash], (error, results) => {
                if(error){
                    console.log(error);
                    res.sendStatus(500);
                    return;
                }
                res.sendStatus(201);
            });
        });
    }
    catch(error){
        res.sendStatus(500);
    }
});

router.post('/login', (req, res) => {
    console.log('POST /users/login');
    try{
        const {Email, Password} = req.body;
        const sql = 'SELECT * FROM User WHERE Email = ?';
        db.query(sql, [Email], (error, results) => {
            if(error){
                console.log(error);
                res.sendStatus(500);
                return;
            }
            if(results.length > 0){
                bcrypt.compare(Password, results[0].Password, (error, result) => {
                    if(result){
                        res.send(results[0]);
                    }else{
                        res.sendStatus(401);
                    }
                });
    
            }else{
                res.sendStatus(401);
            }
        });
    }
    catch(error){
        res.status(500).send({error: 'Internal Server Error'});
    }
   
});

router.delete('/:id', (req, res) => {
    console.log('DELETE /users/:id');
    try{
        const {id} = req.params;
        const sql = 'DELETE FROM User WHERE UserId = ?';
        db.query(sql, [id], (error, results) => {
            if(error){
                console.log(error);
                res.sendStatus(500);
                return;
            }
            res.sendStatus(200);
        });
    }
    catch(error){
        res.status(500).send({error: 'Internal Server Error'});
    }
    
});




module.exports = router;
