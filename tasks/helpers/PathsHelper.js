let {baseDir, preprocessor} = require('./VariableHelper.js');

let paths = {

	scripts: {
		src: [
			// 'node_modules/jquery/dist/jquery.min.js', // npm vendor example (npm i --save-dev jquery)
			baseDir + '/js/app.js' // app.js. Always at the end
		],
		dest: baseDir + '/js',
	},

	styles: {
		src:  baseDir + '/' + preprocessor + '/test.sass', // ./src/sass/test.*
		dest: baseDir + '/css',
	},

	images: {
		src:  baseDir + '/images/src/**/*',
		dest: baseDir + '/images/dest',
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

console.log(paths.styles.src);

exports.paths = paths;
exports.paths.src = paths.src;