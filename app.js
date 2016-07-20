var express = require( 'express' );
var app = express();

app.listen(3000);

app.use(function (req, res, next) {
   console.log(req.method + " " + req.originalUrl + " " + res.statusCode);
   next();
})

app.use('/special/', function (req, res, next) {
   console.log("You reached the special area.");
   next();
})

app.get('/', function(req, res){
	res.send("WELCOME, N00B.");
});