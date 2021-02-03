const { response } = require('express');
const http = require('http');
http.createServer((request,response)=>{
    // console.log('server start');
    return request.on('error',(err)=>{
        console.error(err);
    }).on('data',(data)=>{
        console.log(data);
    }).on('end',()=>{
        response.on('err',(err)=>{
            console.error(err);
        });
        response.statusCode = 200; // 성공 상태 코드
        response.setHeader('Content-Type', 'text/plain'); // header 설정
        response.write('hi\n'); // body에 정보 탑재
        response.end('the end!'); // 정보 탑재 후 브라우저로 전송
      });
}).listen(8080);