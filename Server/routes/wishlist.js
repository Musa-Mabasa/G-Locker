const {Router} = require('express');
const router = Router();
const db = require('../database');
const axios = require('axios');

router.use((req, res, next) => {
    next();
});

router.get('/:userId', async (req, res) => {
    console.log('GET /wishlist');
    try{
        const {userId} = req.params;
        const sql = 'SELECT * FROM UserWishlist WHERE UserId = ?';
        db.query(sql, [userId], async (error, results) => {
            if(error){
                console.log(error);
                res.sendStatus(500);
                return;
            }
            const gamesPromise = results.map(async result => {
                const response = await axios.get(`https://api.rawg.io/api/games/${result.GameId}?key=53acb6f79186422ebd37a4aa3851861b`);
                return response.data;
            });

            const gameData = await Promise.all(gamesPromise);
            res.send(gameData);
        });
    }
    catch(error){
        console.log(error);
        res.status(500).send({error: "Internal Server Error"});
    }
});

module.exports = router;