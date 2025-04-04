require('dotenv').config();
const express = require("express");
const { DB_NAME } = require("./constants");
const connectDB = require("./db/db");
const app = express();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch(err => console.log(`MONGODB connection failed !!!`, err)
    )

app.get("/", (req, res) => {
    res.send("hello there")

})