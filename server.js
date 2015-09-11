var http = require('http'),
	fs = require('fs'),
	mongoose = require('mongoose'),
	express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
//	secret = require('./config/secretConfig'),
//	jwt = require('jsonwebtoken'),
	morgan = require('morgan')

var indexPath = path.join( __dirname, process.env.PUBLIC_FOLDER )

mongoose.connect( process.env.MONGOLAB_URI )

app = express();

app	
	.use( morgan( 'dev' ) )
	.use( bodyParser.urlencoded( { limit: '50mb', extended: true } ) )
	.use( bodyParser.json( { limit: '50mb' } ) )
	.use( '/api', require('./api-routes.js') )
	.use( express.static( indexPath ) )

http
	.createServer( app ).listen( process.env.PORT )

console.info( "Running on port " + process.env.PORT )