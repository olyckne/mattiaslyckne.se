app.controller('ProjectCtrl',
	['$scope', '$http', '$filter', '$location', '$sce',
	function($scope, $http, $filter, $location, $sce) {
	$scope.oneAtATime = true;

	$http({method: 'JSONP', url: baseUrl+'users/olyckne/projects', params: {sort: 'DESC', callback : 'JSON_CALLBACK'}})
		.success(function(data, status) {
			$scope.user.projects = data;
			$scope.groups = [];

			_.each(data, function(item) {
				$scope.groups.push({
					id: item.id,
					title: item.title,
					lang: item.lang,
					content: $sce.trustAsHtml(item.content),
					url: item.url,
					images: item.images,
					open: false
				});

			});


			$scope.$watch('groups', function(groups){
				angular.forEach(groups, function(group, idx) {
					var id = parseInt(idx, 10) + 1;
					if (group.open) {
						$location.path('projects/'+group.id);
					}
					var path = $location.path().split('/');
					if(path[1] === "projects") {
						var id = path[path.length-1];
						if(group.id === id) {
							group.open = true;
						}
					}
				});
			}, true);


			$(".social").tooltip({
				placement: "bottom"
			});

		})
		.error(function(data, status) {
			console.log(data, status);
	});

}]);