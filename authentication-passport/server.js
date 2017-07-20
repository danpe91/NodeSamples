var express = require('express'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	flash = require('connect-flash'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session')
	minimist = require('minimist')(process.argv);

var configDB = require('./config/database.js'),
	app = express(),
	port = process.env.PORT || minimist.port || 8080;

mongoose.connect(configDB.url);

require('./config/passport.js')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'ejs');

app.use(session({
	secret: 'secretpassphrareforsessionsample'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes.js')(app, passport);

app.listen(port);
console.log(`Application listening on port: ${port}`);
