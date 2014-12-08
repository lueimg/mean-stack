

var myapp = angular.module('myapp', []);

myapp.controller('AlumnosController',  function($scope){
	$scope.alumnos = [
		{nombre:"luis",telefono:"8867"},
		{nombre:"beto",telefono:"8867"},
		{nombre:"josue",telefono:"8867"},
	]
	//$scope.newalumno = {}

	$scope.save = function(){
		$scope.alumnos.push($scope.newalumno);
		$scope.newalumno = {}
	}

})


