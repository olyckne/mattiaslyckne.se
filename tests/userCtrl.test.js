describe("User Controller", function() {
	var $rootScope, createController, $httpBackend;

	beforeEach(function() {
		module("Olyckne", "mockUser");

		inject(function($injector) {
			$rootScope = $injector.get('$rootScope');

			$httpBackend = $injector.get('$httpBackend');

			var $controller = $injector.get('$controller');

			createController = function() {
				return $controller("UserCtrl", {'$scope': $rootScope});
			};

		$httpBackend.expect('JSONP',
			'http://localhost:8888/users/olyckne/contactinfo?callback=JSON_CALLBACK')
			.respond(200, $injector.get('userMockJSON'));

		var controller = createController();
		$httpBackend.flush();
		});
	});


	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should fetch user info', function() {
		expect($rootScope.user.phonenumber).toBe("+4612345");
		expect($rootScope.user.username).toBe("olyckne");
	});

});