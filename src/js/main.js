var baseUrl = 'http://localhost:8888/';

var app = angular.module("Olyckne", ['ngResource', 'ui.bootstrap', 'ngRoute'])
	.config(	function($compileProvider, $routeProvider, $locationProvider) {
			$compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|skype|tel):/);
			$locationProvider.html5Mode(true);
			$routeProvider
				.otherwise({redirectTo: '/'});
});