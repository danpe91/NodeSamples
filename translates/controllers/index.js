var express = require('express'),
	router = express.Router();

var languages = global.config.application.languages;

router.get(`/:lang(${languages})`, function(req, res) {
	global.i18n.setLanguage(req.params.lang);
console.log('entering');
	res.render('index', { welcome: global.lang.site.welcome });
});

router.get('/', function(req, res) {
	global.i18n.setLanguage();

	res.render('index', { welcome: global.lang.site.welcome });
});

module.exports = router;
