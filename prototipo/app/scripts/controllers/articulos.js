'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('ArticulosCtrl', function ($scope) {
    $scope.posts = [
      {
      	title:"alimentos buenos para la salud",
      	content:"lorempdsf sdf sd fsd fsfsdfsfsdfsd sdfsd fsd "
      },
      {
      	title:"alimentos menos buenos para la salud",
      	content:"lorempdsf sdf sd fsd fsfsdfsfsdfsd sdfsd fsd "
      },
      {
      	title:"Limita tu cantidad de hidratos de carbono",
      	content:"lorempdsf sdf sd fsd fsfsdfsfsdfsd sdfsd fsd "
      }

    ];
  });
