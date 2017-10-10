var express = require('express');
var app = express();

app.get('/', function(req, res)
{
    res.send("Hello Bitches")
});

app.listen(4000);
