angular.module('alurapic').controller('FotoCreateController', function($scope) {

	$scope.foto = {};	
	$scope.imprimir = function(){

		console.log($scope.foto);
	};
});