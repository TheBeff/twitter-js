module.export = function(io) {
	var express = require('express');
	var router = express.Router();
	// could use one line instead: var router = require('express').Router();
	var tweetBank = require('../tweetBank');




	router.get('/tweets/:id', function(req, res){
		var id = +(req.params.id);
		var tweets = tweetBank.find({'id':id});
		res.render('index',{title: 'Tweets', tweets: tweets});

	});

	router.get('/users/:name',function(req,res,next){
		var name = req.params.name;
		var tweets = tweetBank.find({'name':name});
		res.render('index',{title: 'Tweets by', tweets: tweets, showForm:true, asd:name});
	});

	router.post('/tweets', function(req, res) {
	  var name = req.body.name;
	  var content = req.body.content;
	  tweetBank.add(name, content);
	  res.redirect('/');
	});

	router.get('/', function (req, res,next) {
	  var tweets = tweetBank.list();
	  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );

	});
	return router;
};