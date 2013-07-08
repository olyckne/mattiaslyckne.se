app.controller('UserCtrl',
	['$scope', '$http',
	function($scope, $http) {

	$scope.method = 'JSONP',
	$scope.url = baseUrl+'users/olyckne';
	$scope.user = {};

	$http({method: $scope.method, url: $scope.url+"/contactinfo", params: {callback: 'JSON_CALLBACK'}})
		.success(function(data, status) {
			$scope.user = data;
			$scope.user.contactInfo = _.filter(data.contact_info, function(item) {
				return item.type.name !== "Phone";
			});
			$scope.user.phonenumber = _.find(data.contact_info, function(item) {
				return item.type.name === "Phone";
			}).info;

			$scope.usernameTooltip();
		})
		.error(function(data, status) {
			var alert = $('<div />'),
				closeBtn = $('<button />').addClass('close').text('x');

			console.log(data, status);

			alert.addClass('alert alert-danger')
					.html('Ooop, something went wrong fetching data');
			alert.append(closeBtn);

			if(!$(".alert").length)
				$(".container-fluid").prepend(alert);
	});

	$scope.showUsername = function(elem) {
		$(".username-"+elem).show();
	};

	$scope.usernameTooltip = function() {
		$(".social").tooltip({
			placement: "bottom"
		});
	};

}]);
