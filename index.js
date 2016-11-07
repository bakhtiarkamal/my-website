var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('assets'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(port, function(err) {
    console.log('Running express on port ' + port);
});