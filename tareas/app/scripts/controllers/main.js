'use strict';

/**
 * @ngdoc function
 * @name tareasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tareasApp
 */
angular.module('tareasApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tareas = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$scope.addTarea = function(){
			$scope.tareas.push($scope.tarea);
			$scope.tarea = ''
	}

	$scope.eliminarTareas = function(index){
		$scope.tareas.splice(index , 1 );
	}

  });
