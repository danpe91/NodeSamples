var config = {
	db: {
		host: '127.0.0.1',
		user: 'root',
		password: 'toor',
		database: 'translates',
		port: 3306,
		debug: true,
		socket: '/var/run/mysqld/mysqld.sock'
	},
	site: {
		url: 'http://localhost:3000',
		title: 'Translates',
		language: 'en',
		html: {
			engine: 'jade',
			minify: true
		}
	},
	application: {
		controllers: {
			default: 'index'
		},
		langs: ['en', 'es'],
		languages: 'en|es'
	}
};

module.exports = config;