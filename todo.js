function TodoCtrl($scope)
{
	//$scope.totalTodos = 4; it will output 4 whenn displayed on the HTML as {{totalTodos}}
	$scope.todos = [
		{text: "Learn AngularJS", done:false},
		{text:"Build an app", done:false}
	]; // created todos object here

	$scope.getTotalTodos = function ()
	{
		return $scope.todos.length;
	}; // returns the total length of todo

	$scope.clearComplete = function () { //Underscore.js
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    }; //Delete's the list

	$scope.addTodo = function ()
	{
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = ""; //when the add is clicked, this clears the textbox
	}; //Add's to list

}

function ps1($scope)
{
	$scope.hahahahaha = "I'm laughing ahahahahahaha! Check out the list below: ";
	$scope.alist = [
		{text: "One"},
		{text: "Two"}
	];
}

