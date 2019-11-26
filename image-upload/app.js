const express = require('express');
const multipart = require('connect-multiparty');
const open = require('open');

const app = express();
const mutipartMiddeware = multipart();
const appPort = process.env.PORT || 2008;

app.use(multipart({
    uploadDir: './temp'
}));

app.get('/', function (request, response) {
    response.type('text/html');
    response.sendfile('public/index.html');
});
app.post('')
app.set('port', appPort);
app.listen(appPort, function () {
    open(`http://localhost:${appPort}`);
});
