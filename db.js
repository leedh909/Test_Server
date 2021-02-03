var mssql = require("mssql");
let pool = null;
const db = ()=>{ 
    
    if(!pool) pool = new mssql.ConnectionPool({
        server:"localhost",
        user:"sa",
        password:"A!12345",
        database:"Test",    
    }).connect();
    return pool;
}

module.exports = db;