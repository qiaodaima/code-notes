const express = require('express');
const app = express();

const server = app.listen('1234', function () {
    console.log('服务启动~');
});

app.use(express.static('public'));

app.get('/', function (request, response) {
    response.send('这是一段演示文案，get');
});

app.post('/', function (request, response) {
    response.send('这是一段演示文案，post');
});

app.get('/a*bc', function (request, response) {
    response.send('正则路由，get');
});
