"use strict"

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
