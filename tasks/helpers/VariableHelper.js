
let baseDir  = 'src'; // If you wanna change you main dev directory, just replace src on another name
preprocessor = 'sass', // If you work with less or scss, just change 'sass' on 'less' for example.
fileswatch   = 'html,htm,txt,json,md,woff2', // List of files extensions for watching & hard reload (comma separated)
imageswatch  = 'jpg,jpeg,png,webp,svg'; // List of images extensions for watching & compression (comma separated)

exports.baseDir      = baseDir;
exports.preprocessor = preprocessor;
exports.fileswatch   = fileswatch;
exports.imageswatch  = imageswatch;