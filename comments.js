// Create web server
// npm install express
// npm install body-parser
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Set the view engine
app.set('view engine', 'ejs');

// Set the path to the views
app.set('views', __dirname + '/views');

// Set the path to the static files
app.use(express.static(__dirname + '/public'));

// Use the body-parser module to parse the body of the request
app.use(bodyParser.urlencoded({ extended: false }));

// Create a variable to store the comments
var comments = [];

// Route to the home page
app.get('/', function(req, res) {
    res.render('index', { comments: comments });
});

// Route to the form to create a new comment
app.get('/new', function(req, res) {
    res.render('new');
});

// Route to create a new comment
app.post('/new', function(req, res) {
    var comment = {
        name: req.body.name,
        message: req.body.message
    };

    comments.push(comment);

    res.redirect('/');
});

// Start the server
app.listen(3000, function() {
    console.log('Server started at http://localhost:3000');
});
