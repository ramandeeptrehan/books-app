const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootisraman",
    database: "database"
});

const getAllBooks = () => {

    const showQuery = "SELECT * FROM books";

    return new Promise((resolve, reject) => {
        db.query(showQuery, (error, data) => {
            if(error) {
                return reject(error);
            }

            return resolve(data);
        });
    });
    //below code works if we don't use promise
    /*
    db.query(showQuery, (err, data) => {
        if(err) {
            return res.json(err);
        }

        return res.json(data);
    });
    */
}

module.exports = {
    getAllBooks
};