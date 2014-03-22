describe("User Controller", function() {
	var $rootScope, createController, $httpBackend;

	beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/tests/fixtures';
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
	    expect($rootScope.user.name).toBe("Mattias Lyckne");
		expect($rootScope.user.username).toBe("olyckne");
    });

    it('should fetch user gravatar', function() {
        expect($rootScope.getGravatar('hi@mattiaslyckne.se', 200)).toBe("http://gravatar.com/avatar/dc61150bb5bc10c5bdc3951bbe05e583?s=200");
    });

    it('should find specific contactinfo', function() {
        var expected = {info: "hi@mattiaslyckne.se",
            type: {name: "Mail", url: "mailto:hi@mattiaslyckne.se"}
        };
        expect($rootScope.findContactInfoByType($rootScope.user.contactInfo, "Mail"))
               .toEqual(expected);
    });

    it('should call appendError on error fetching user info', function() {
        $httpBackend.expect('JSONP',
                'http://localhost:8888/users/olyckne/contactinfo?callback=JSON_CALLBACK')
                .respond(404);

        var controller = createController();
        spyOn($rootScope, 'appendError').andCallThrough();
        $httpBackend.flush();
        
        expect($rootScope.appendError).toHaveBeenCalled();
    });

    it('should show error message on error fetching user info', function() {
        jasmine.getFixtures().load('index.html');
        $rootScope.appendError();
        expect($(".alert")).toBeVisible();
        expect($(".alert")).toContainText(
            "Ooops, something went wrong fetching data");

    });

    it('should show only one error message', function() {
        loadFixtures('index.html');
        $rootScope.appendError();
        $rootScope.appendError();
        expect($(".alert")).toBeVisible;
        expect($(".alert")).toHaveLength(1);
    });

});
