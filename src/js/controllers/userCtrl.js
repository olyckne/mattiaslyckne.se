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
			console.log(data, status);

	});

	$scope.showUsername = function(elem) {
		$(".username-"+elem).show();
	};

	$scope.getInfo = function(type) {

	};

	$scope.usernameTooltip = function() {
		$(".social").tooltip({
			placement: "bottom"
		});
	};

}]);
