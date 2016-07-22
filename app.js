var express = require( 'express' );
var swig = require( 'swig');
var app = express();
var routes = require('./routes/');
var tweetBank = require('./tweetBank');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

app.use(bodyParser.urlencoded());

app.use('/', routes(io));


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });


app.use(express.static(__dirname + 'public'));

app.use(function (req, res, next) {
   console.log(req.method + " " + req.originalUrl + " " + res.statusCode);
   next();
});

app.use('/special/', function (req, res, next) {
   console.log("You reached the special area.");
   next();
});

app.get('/', function(req, res){

	res.render('index', tweetBank.list());
});


var server = app.listen(3000);
var io = socketio.listen(server);




