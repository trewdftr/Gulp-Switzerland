let localServer = require('browser-sync').create();

function sync() {
    localServer.init({
        server: { baseDir: '../src'},
        notify: true,
	     online: true
    })
}

exports.server = sync;