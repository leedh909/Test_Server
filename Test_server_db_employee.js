var express = require('express')
// const api = require('./routes/index');
const cors = require('cors');


//서버 생성
var app = express()

//서버 열기
app.listen(9999,()=>{
    console.log(`Server On: http:..localhost:9999/`);
});

app.use(cors());
// app.use('/api',api);


// //데이터 보내기
// app.get('/',function(req,res){
//     res.send('hello world');
// })
//DB데이터 연결
var config ={
    user:'sa',
    password:'A!12345',
    server:'localhost',
    database:'Test',
    multipleStatements: true,
}
//mssql 라이브러리 사용
var sql = require('mssql');


//localhost:8080/aa 에 DB Query한 값을 보낸다.
app.get('/select',function(req,res){

    //DB 연결
    sql.connect(config,function(err){
        if(err){
            console.log("DB connect: ",err);
        }else{
            console.log("Enter DB No err");
        }
        //Request객체 생성
        var request = new sql.Request();

        //Query 작성
        request.query(
            'select * from dbo.employee order by empno',
            function(err,recordset){
                if(err) {console.log("sql에러:"+err);
            }else{
                console.log("Select sql success");

                //Query 결과 보내기
                res.json(recordset);
            }
            }
        )
    })
})

app.get('/insert',function(req,res){
    console.log("insert들어옴");
    console.log(req.query.name+" : "+req.query.job);
  
    //DB 연결
    sql.connect(config,function(err){
        if(err){
            console.log("DB connect: ",err);
        }else{
            console.log("Enter DB No err");
        }
        //Request객체 생성
        var request = new sql.Request();

        //Query 작성
        request.query(
            "INSERT INTO dbo.employee VALUES(NEXT VALUE FOR seq_empno,'"+req.query.name+"','"+req.query.job+"');",
            function(err,result){
                if(err){
                    console.log("sql에러: "+err);
                }else{
                    console.log("Insert sql success")
                }
                //Query 결과 보내기
                res.json(result);
            }
        )
    })
})