'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('GaleriaCtrl', function ($scope) {


  var pictures = $scope.pictures = [];

  var baseURL = "http://lorempixel.com/300/180/";

  var titles = ["comida sana", 'salud y trabajo', 'vida en la ciudad', 'mantente activo', 'cuida tu aspecto'];

  var keywords = ['food','business','city','sports','fashion'];

  var dummyText = "Lorem ipsum dolor sit ametm consesdfjskld jslkdj flksdj lsj d";


	  $scope.addPics = function(i){
	  		pictures.push({
	  			url: baseURL + keywords[i],
	  			title: titles[i],
	  			summary: dummyText
	  		});
	  }


	  for (var i = 0 ;  i < 5 ; i++){
	  	$scope.addPics(i);
	  }


	  $scope.rate = 0;
	  $scope.max= 5;
	  $scope.isReadonly = false;

  });
