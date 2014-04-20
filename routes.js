var demoApp = angular.module('demoApp', []);

demoApp.config(function ($routeProvider)
{
	$routeProvider.when('/view1',
			{
				controller: 'SimpleController',
				templateURL: 'Partials/View1.html'
			}
		).when('/view2',
				controller: 'SimpleController',
				templateURL: 'Partials/View2.html'
		).otherwise({redirectTo:'/view1'});
});

demoApp.controller('SimpleController', function ($scope)
{
	$scope.name1 = [
		{name:"John Doe", city:"Arizona"},
		{name:"John Doe2", city:"Arizona2"},
		{name:"John Doe3", city:"Arizona3"}
	];

	$scope.addCustomer = function(){
		$scope.name1.push({name: $scope.NewCustomer.name, city: $scope.NewCustomer.city});
	};
});