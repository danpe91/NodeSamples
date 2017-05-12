var self = {
	setLanguage: function(lang) {
		if (global.config.application.langs.inArray(lang)) {
			global.lang = require(`../../languages/${lang}`);
			global.lang.current = lang;
		} else {
			global.lang = require(`../../languages/${global.config.site.language}`);
			global.lang.current = global.config.site.language;
		}
	}
};

module.exports = self;