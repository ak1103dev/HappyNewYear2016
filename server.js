var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
		res.render('index.ejs');
});
 
app.listen(1000);
console.log("port 1000");
