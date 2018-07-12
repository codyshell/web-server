var express = require('express');
var app = express();
var port = process.env.port || 3000;
// app.get('/', function(req, res){
	// res.send('Hello Express');
// });


/* 
app.get('/about', function(req, res){
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log('Express Server running on port ' + port);
}); */

var middleware = require('./middleware.js');

// app.use(middleware.requireAuthentication);
	app.use(middleware.logger);
	
app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log('Express Server running on port ' + port);
});