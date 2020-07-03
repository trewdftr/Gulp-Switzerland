const { watch } = require('gulp');
const { preprocessor, imageswatch, fileswatch, baseDir }  = require('./helpers/VariableHelper');
const { paths }   = require('./helpers/PathsHelper');
const styles      = require('./Styles')
const images      = require('./Images')
const scripts     = require('./Scripts')
const localServer = require('browser-sync').create();

function sync() {
    localServer.init({
        server: { baseDir: 'src'},
        notify: true,
	    online: true
	})
	
	
}

function reload() {
	localServer.reload();
  }

function startWatch () {
	watch(baseDir  + '/**/' + preprocessor + '/**/*', styles.styles);
	watch(baseDir  + '/**/*.{' + imageswatch + '}', images.images);
	watch(baseDir  + '/**/*.{' + fileswatch + '}').on('change', reload);
	watch([baseDir + '/**/*.js', '!' + paths.scripts.dest + '/*.min.js'], scripts.scripts);
}



exports.server = sync;
exports.startWatch = startWatch;
