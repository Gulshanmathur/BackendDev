require('dotenv').config();
const {DB_NAME} = require("./constants");
const connectDB = require("./db/db");


connectDB();