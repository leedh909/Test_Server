const express = require("express");
const app = express();
const server = app.listen("6000");

var sql = require('mssql');
const config ={
    user:"sa",
    password:"A!12345",
    server:"localhost",
    database:"Test",
}


