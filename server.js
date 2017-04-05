"use strict"

/*const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req,res){
    
    const url = req.url;
    
    let text;
    console.log(url);
    if(url === "/"){
        text = fs.readFileSync("index.html","utf8");        
    } 
    else if (url === "/rating"){
        text = fs.readFileSync("rating.html","utf8");   
    }
    res.write(text);
    res.end();
});
console.log('server is running');
const port = process.env.PORT || 3000;
server.listen(port);*/

const express = require('express');
const pug = require('pug');
const PORT = process.env.PORT || 3000;
const app = express();

module.exports = pug;


app.use('/', express.static('front'));
app.use('/', express.static('front/static'));

app.set('views', './front/components');
app.set('view engine', 'pug');


// Запускаем сервер
app.listen(PORT, function () {
	console.log(`Server listen ${PORT} port`);
});
