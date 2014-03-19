// Karma configuration
// Generated on Wed Jul 10 2013 21:10:32 GMT+0200 (CEST)


// base path, that will be used to resolve files and exclude
basePath = '../';


// list of files / patterns to load in the browser
files = [
	JASMINE,
	JASMINE_ADAPTER,
	"src/components/angular/angular.js",
	"src/components/angular-mocks/angular-mocks.js",
	"src/components/angular-resource/angular-resource.js",
	"src/components/angular-sanitize/angular-sanitize.js",
	"src/components/angular-bootstrap/ui-bootstrap-tpls.js",
	"src/components/angular-route/angular-route.js",
	"src/components/jquery/jquery.js",
	"src/components/underscore/underscore.js",
	"src/components/olightbox/olightbox.jquery.js",
    "src/components/js-md5/js/md5.min.js",
    "src/components/bootstrap/dist/js/bootstrap.min.js",

	"src/js/main.js",
	"src/js/controllers/*.js",
	"src/js/controllers/*.js",

	'tests/mock/**.js',
	'tests/**.test.js'
];

preprocessors = {
    'src/js/**/*.js': 'coverage'
};

// list of files to exclude
exclude = [
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'coverage'];


coverageReporter = {
  type: 'lcov',
  dir: 'tests/coverage',
  file: 'lcov.info'
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
