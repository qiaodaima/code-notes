const express = require('express');
const multipart = require('connect-multiparty');
const open = require('open');

const app = express();
const appPort = process.env.PORT || 2008;

app.use(multipart({
    uploadDir: './temp'
}));

app.get('/', function (request, response) {
    response.type('text/html');
    response.sendfile('public/index.html');
});

app.post('/upload', multipart(), function (request, response) {
    response.send('图片上传成功！');
});

app.set('port', appPort);
app.listen(appPort, function () {
    open(`http://localhost:${appPort}`);
});
