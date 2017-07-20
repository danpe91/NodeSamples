var isLoggedIn = function(req, res, next) {

	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}

module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.render('index.ejs');
	});

	app.get('/login', function(req, res) {

		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	app.post('/login', function(req, res) {
		// handle user/password authentication here
	});

	app.get('/signup', function(req, res) {

		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	app.post('/signup', function(req, res) {

		// sign up the user here
	});

	app.get('/profile', isLoggedIn, function(req, res) {

		res.render('profile.ejs', {
			user: req.user
		});
	});

	app.get('/logout', function(req, res) {

		req.logout();
		res.redirect('/');
	});
};