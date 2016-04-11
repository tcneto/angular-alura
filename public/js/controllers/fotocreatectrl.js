angular.module('alurapic').controller('FotoCreateController', function($scope, $http) {

	$scope.foto = {};
	$scope.mensagem = '';
	
	$scope.cadastrar = function() {

		if ($scope.formFotoCreate.$valid) {
		
			$http.post('v1/fotos', $scope.foto).success(function() {
			
				$scope.mensagem = 'Foto cadastrada com sucesso!';
				$scope.foto = {};
			}).error(function(erro) {

				$scope.mensagem = 'Foto não cadastrada.'
				console.log(erro);
			});
		}
	};
});