const { watch }   = require('gulp');
const styles      = require('./Styles')
const scripts     = require('./Scripts')
const localServer = require('browser-sync').create();

let port = 9000;

function sync() {
	localServer.init({
		notify: true,
		port,
		server: {
		  baseDir: ['src'],
		  routes: {
			'/node_modules': 'node_modules'
		  }
		}
	  });
	
	  watch([
		'src/*.html',
		'src/images/**/*',
	  ]).on('change', reload);
	
	  watch('src/styles/**/*.css', styles);
	  watch('src/js/**/*.js', scripts);
}

function reload() {
	localServer.reload();
  }

exports.server = sync;

