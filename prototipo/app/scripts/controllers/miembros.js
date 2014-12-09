'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MiembrosCtrl
 * @description
 * # MiembrosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MiembrosCtrl', function ($scope , $http) {
  
  	$http.get("http://localhost:9000/miembros.json")
  		.success(function(data){
  			$scope.miembros = data
  		});


  		$scope.gridOptions = {
  			data:'miembros',
  			showGroupPanel:true,
  			columnDefs:[
  				{field:'no',displayName:'Nro'},
  				{field:'nombre',displayName:'Nombre'},
  				{field:'fidelidad',displayName:'Puntos Fidelidad'},
  				{field:'fechaUnion',displayName:'Fecha de Unión'},
  				{field:'tipoMiembro',displayName:'Tipo de Miembro'}
  			]	
  		}

  });
