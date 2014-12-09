'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MiembrosCtrl
 * @description
 * # MiembrosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MiembrosCtrl', function ($scope , $http, $modal) {
  
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

  		$scope.showModal = function(){
  			$scope.nuevoMiembro = {};
  			var modalInstance = $modal.open({
  				templateUrl: 'views/add-miembros.html',
  				controller:'AddNuevoMiembroCtrl',
  				resolve:{
  					nuevoMiembro:function(){
  						return $scope.nuevoMiembro;
  					}
  				}
  			});

  			modalInstance.result.then(function(selectedItem){
  				$scope.miembros.push({
  					no:$scope.miembros.length + 1,
  					nombre:$scope.nuevoMiembro.nombre,
  					tipoMiembro:$scope.nuevoMiembro.tipoMiembro,
  					fidelidad:$scope.nuevoMiembro.fidelidad,
  					fechaUnion:$scope.nuevoMiembro.fechaUnion
  				}); 
  			});

  		}

  		$scope.cancel = function(){

  		}



  })

  .controller('AddNuevoMiembroCtrl',  function ($scope, $modalInstance , nuevoMiembro) {

  	$scope.nuevoMiembro = nuevoMiembro;
  	$scope.salvarNuevoMiembro = function(){
  		$modalInstance.close(nuevoMiembro);
  	}

  	$scope.cancel = function(){
  		$modalInstance.dismiss('cancel');
  	}


  		
  });