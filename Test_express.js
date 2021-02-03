var express = require('express')
const api = require('./routes/index');
const cors = require('cors');


//서버 생성
var app = express()

//서버 열기
app.listen(9999);

app.use(cors());
// app.use('/api',api);


// //데이터 보내기
// app.get('/',function(req,res){
//     res.send('hello world');
// })


//localhost:8080/aa 에 DB Query한 값을 보낸다.
app.get('/aa',function(req,res){
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
                res.json(recordset);
            }
        )
    })
})


// //tedious라이브러리를 이용해서 DB연결 후 데이터 보내기
// var Connection = require('tedious').Connection;

// var config = {
//   server: 'localhost',
//   authentication: {
//     type: 'default',
//     options: {
//       userName: 'sa',
//       password: 'A!12345',
//     },
//   },
//   options: { encrypt: true, database: 'Test' },
// };

// var connection = new Connection(config);
// app.get('/bb',function(req,res){
//     connection.on('connect', function (err) {
//         if (err) {
//           console.log('Error: ', err);
//         } else {
//           console.log('Connected');
//         }
//         executeStatement(function(err,recordset){
//             if(err) console.log(err);
//             res.send(recordset);
//         });
//       });
//       connection.connect();
      
//       function executeStatement() {  
//           const request = new Request("select Lastname from person.person", (err, rowCount) => {
//             if (err) {
//               throw err;
//             }
//              connection.close(); 
//           });  
          
//           connection.execSql(request);  
//       }
// })






