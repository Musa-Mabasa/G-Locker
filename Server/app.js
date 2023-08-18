const express = require('express')

const app = express()
const port = 3000

app.listen(port, (error) => {
    if(!error)
        console.log(`Server is running on port ${port}`);
    else
        console.log(error);
});

app.get('/user', (req, res) =>{
    res.status(200);
    res.send('Hello World');

});