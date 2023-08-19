const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Muzero000814',
    database: 'g_locker',
});

connection.connect((error) => {
    if(error)
        console.log(error);
    else
        console.log('Database connected');
});

module.exports = connection;