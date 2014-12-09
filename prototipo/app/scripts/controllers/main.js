'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {
    
  	var baseURL = 'http://lorempixel.com/960/450/';
  	$scope.setInterval = 5000;

  	$scope.slides = [
  		{
  			title:'aprende a mantenerte en forma',
  			image: baseURL + 'sports/',
  			text:'Praactica algundeporte todos los dias'
  		},
  		{
  			title:'aBUena alimentacion',
  			image: baseURL + 'food/',
  			text:'Praactica algundeporte todos los dias'
  		},
  		{
  			title:'apEn contacot con la naturalezama',
  			image: baseURL + 'nature/',
  			text:'Praactica algundeporte todos los dias'
  		}
  	];

  });
