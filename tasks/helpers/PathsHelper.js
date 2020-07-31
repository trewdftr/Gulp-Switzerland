let {baseDir, deployDir, preprocessor} = require('./VariableHelper');

let paths = {

	scripts: {
		src: baseDir + '/js/app.js' ,// app.js. Always at the end
		srcPublic: baseDir + '/js/*.js',
		dest: baseDir + '/js',
		public: deployDir + '/js'
	},

	styles: {
		src:  baseDir + '/' + preprocessor + '/main.*', // ./src/sass/test.*
		srcPublic: baseDir + '/css/*.css',
		dest: baseDir + '/css',
		public: deployDir + '/css'
	},

	images: {
		src:  baseDir + '/images/src/**/*',
		srcPublic: baseDir + '/images/dest/*',
		dest: baseDir + '/images/dest',
		public: deployDir + '/images/dest/'
	},

	fonts: {
		src:  baseDir + '/fonts/src/**/*',
		srcPublic: baseDir + '/fonts/dest/*',
		dest: baseDir + '/fonts/dest',
		public: deployDir + '/fonts/dest/'
	},

	deploy: {
		hostname:    'username@yousite.com', // Deploy hostname
		destination: 'yousite/public_html/', // Deploy destination
		include:     [/* '*.htaccess' */], // Included files to deploy
		exclude:     [ '**/Thumbs.db', '**/*.DS_Store' ], // Excluded files from deploy
	},

	cssOutputName: 'app.min.css',
	jsOutputName:  'app.min.js',
}

exports.paths = paths;
