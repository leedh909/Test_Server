var express = require('express');
var router = express.Router();

router.post('/aa',function(req,res){
    res.send({greeting:'Hello React x Node.js'});
    //DB데이터 연결
    var config ={
        user:'sa',
        password:'A!12345',
        server:'localhost',
        database:'Test',
    }
    //mssql 라이브러리 사용
    var sql = require('mssql');

    //DB 연결
    sql.connect(config,function(err){
        if(err){
            console.log(err);
        }else{
            console.log("No err");
        }
        //Request객체 생성
        var request = new sql.Request();

        //Query 작성
        request.query(
            'select * from HumanResources.Department',
            function(err,recordset){
                if(err) console.log("sql에러:"+err);

                //Query 결과 보내기
                res.send(recordset);
            }
        )
    })
});



module.exports = router;