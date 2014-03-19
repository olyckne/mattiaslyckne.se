// Karma configuration
// Generated on Wed Jul 10 2013 21:10:32 GMT+0200 (CEST)


// base path, that will be used to resolve files and exclude
basePath = '../src';


// list of files / patterns to load in the browser
files = [
	JASMINE,
	JASMINE_ADAPTER,
	"components/angular/angular.js",
	"components/angular-mocks/angular-mocks.js",
	"components/angular-resource/angular-resource.js",
	"components/angular-sanitize/angular-sanitize.js",
	"components/angular-bootstrap/ui-bootstrap-tpls.js",
	"components/angular-route/angular-route.js",
	"components/jquery/jquery.js",
	"components/underscore/underscore.js",
	"components/olightbox/olightbox.jquery.js",
    "components/js-md5/js/md5.min.js",
    "components/bootstrap/dist/js/bootstrap.min.js",

	"js/main.js",
	"js/controllers/userCtrl.js",
	"js/controllers/projectCtrl.js",

	'../tests/mock/**.js',
	'../tests/**.test.js'
];

preprocessors = {
	'**/js/*.js': 'coverage',
	'**/js/controllers/*.js': 'coverage'
};

// list of files to exclude
exclude = [

];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'coverage'];


coverageReporter = {
  type: 'lcov',
  dir: '../tests/coverage'
};

plugins =  [
    'karma-coverage'
];

// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome', 'Safari', 'PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
