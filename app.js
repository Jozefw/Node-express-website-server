var express = require('express');
var app = express();

// when theres a get request to the home page send the file in the view folder
app.get('/', function(request, response){
	// sendfile send the file
	response.sendfile("./views/index.html");
});

app.get('/about', function(request,response){
	response.sendfile("./views/about.html");
});

app.get('/article', function(request, response){
	response.sendfile("./views/article.html");
});

app.listen(3000);