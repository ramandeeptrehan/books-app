const express = require('express');

const {getAllBooks} = require('./db_operations');

const app = express();



app.get("/", (req, res) => {
    res.json("Hello, this is the backend");
});

app.get("/books", async (req, res) => {
    try {
        const resultBooks = await getAllBooks();
        res.status(200).json({books: resultBooks});
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.listen(8800, () => {
    console.log("Connected to backend!!!!!");
});

