const express = require('express')
const userRoutes = require('./routes/users')
const wishlistRoutes = require('./routes/wishlist')

const app = express()
const port = 3000
const cors = require('cors')

app.listen(port, (error) => {
    if(!error)
        console.log(`Server is running on port ${port}`);
    else
        console.log(error);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    next();
});

app.use('/users', userRoutes);
app.use('/wishlist', wishlistRoutes);

