var express = require( 'express' );
var swig = require( 'swig');
var app = express();
var routes = require('./routes/');
app.use('/', routes);

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};


app.use(function (req, res, next) {
   console.log(req.method + " " + req.originalUrl + " " + res.statusCode);
   next();
})

app.use('/special/', function (req, res, next) {
   console.log("You reached the special area.");
   next();
})

app.get('/', function(req, res){
	res.render('index', locals);
});


app.listen(3000);






