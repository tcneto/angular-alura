angular.module('alurapic').controller('FotoCreateController', function($scope, $http) {

	$scope.foto = {};	
	$scope.imprimir = function(){

		$http.post('v1/fotos', $scope.foto).success(function() {

			console.log($scope.foto);
			console.log('Foto cadastrada!');
			$scope.foto = {};
		}).error(function(erro) {

			console.log(erro);
		});		
	};
});