'use strict';

/**
 * @ngdoc function
 * @name tareasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tareasApp
 */
angular.module('tareasApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
    

    var tareasEnAlmacen = localStorageService.get('tareas');
    //agregamos las tareas que existan en memoria
    $scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];
    //syncroniza el localstorage cuando se agrege algo a tareas
    $scope.$watch('tareas',function(){
    	localStorageService.add('tareas', $scope.tareas.join('\n'));
    },true);

	$scope.addTarea = function(){
			$scope.tareas.push($scope.tarea);
			$scope.tarea = '';
	}

	$scope.eliminarTarea = function(index){
		$scope.tareas.splice(index , 1 ); 
	}

  });
