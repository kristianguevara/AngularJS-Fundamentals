var demoApp = angular.module('demoApp', []);

var controllers = {};

controllers.SimpleController = function ($scope)
{
	$scope.name1 = [
		{name:"John Doe", city:"Arizona"},
		{name:"John Doe2", city:"Arizona2"},
		{name:"John Doe3", city:"Arizona3"}
	];
}

//controllers.SimpleController2 = function($scope) <= do that if you want a second controller

demoApp.controllers(controllers);


/*One way of doing it*/
/*
function SimpleController($scope)
{
	$scope.name1 = [
		{name:"John Doe", city:"Arizona"},
		{name:"John Doe2", city:"Arizona2"},
		{name:"John Doe3", city:"Arizona3"}
	];
}

demoApp.controller('SimpleController', SimpleController);
*/

/*Another way of doing it*/

/*
demoApp.controller('SimpleController', function SimpleController($scope)
{
	$scope.name1 = [
		{name:"John Doe", city:"Arizona"},
		{name:"John Doe2", city:"Arizona2"},
		{name:"John Doe3", city:"Arizona3"}
	];
});
*/