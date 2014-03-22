app.controller('UserCtrl',
	['$scope', '$http',
	function($scope, $http) {

	$scope.method = 'JSONP',
	$scope.url = baseUrl+'users/olyckne';
	$scope.user = {};

	$http({method: $scope.method, url: $scope.url+"/contactinfo", params: {callback: 'JSON_CALLBACK'}})
		.success(function(data, status) {
			$scope.user = data;
			
			$scope.user.name = data.firstname+" "+data.lastname;

			$scope.user.contactInfo = _.filter(data.contact_info, function(item) {
				return item.type.name !== "Phone";
			});

            var mail =  $scope.findContactInfoByType($scope.user.contactInfo, "Mail").info;


            $scope.user.gravatar = $scope.getGravatar(mail, 200);
			$scope.usernameTooltip();
		})
		.error(function(data, status) {
		    $scope.appendError();
	});

	$scope.appendError = function(message) {
	    message = message || "Ooops, something went wrong fetching data";
		var alert = $('<div />'),
			closeBtn = $('<button />').addClass('close').text('x');

		alert.addClass('alert alert-danger')
			.html(message);
		alert.append(closeBtn);

		if(!$(".alert").length) {
			$(".container-fluid").prepend(alert);
        }
    }

	$scope.showUsername = function(elem) {
		$(".username-"+elem).show();
	};

	$scope.usernameTooltip = function() {
		$(".social").tooltip({
			placement: "bottom"
		});
	};

	$scope.getGravatar = function(mail, size) {
        return "http://gravatar.com/avatar/"+md5(mail.trim().toLowerCase())+"?s="+size;
    }

    $scope.findContactInfoByType = function(data, type) {
        return _.find(data, function(item) {
            return item.type.name === type;
        });
    }

}]);
