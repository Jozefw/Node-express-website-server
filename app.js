var express = require('express');
var app = express();
// require handlebars
var hbs = require('hbs');

// sets the key view engine the value of html chck api docs
app.set('view engine', 'html');
app.engine('html', hbs.__express);

// gives us acces to blog.js file
var blogEngine = require('./blog');

// when theres a get request to the home page send the file in the view folder
app.get('/', function(request, response){
	// sendfile send the file
	// response.sendfile("./views/index.html");
	// epxress defaults to the views page and knows the extension is html so we can omit those things
	// render tells express to parse this page and return it to the browser
	response.render("index",{titel:"MyBlog", entries:blogEngine.getBlogEntries()});
});

app.get('/about', function(request,response){
	// response.sendfile("./views/about.html");
	response.render("about",{title:"About Me"});
});

app.get('/article', function(request, response){
	// response.sendfile("./views/article.html");
	response.render("article", {title:entry.title,blog:entry});
});

app.listen(3000);