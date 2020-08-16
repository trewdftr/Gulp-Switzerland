const { watch }   = require('gulp');
const styles      = require('./Styles.js')
const scripts     = require('./Scripts.js')
const localServer = require('browser-sync').create();
const { paths }   = require('./helpers/PathsHelper');
const { preprocessor, baseDir }  = require('./helpers/VariableHelper');

function sync() {
	localServer.init({
		notify: true,
		online: true,
		server: {
		  baseDir: ['src'],
		  routes: {
			'/node_modules': 'node_modules'
		  }
		}
	  });
	
	  watch([
		'src/*.html',
	  ]).on('change', reload);
}

function reload() {
	localServer.reload();
  }

function startWatch() {
	watch(baseDir  + '/**/' + preprocessor + '/**/*', styles.styles);
	watch([baseDir + '/**/*.js', '!' + paths.scripts.dest + '/*.min.js'], scripts.scripts);
}  

exports.sync = sync;
exports.startWatch = startWatch;
