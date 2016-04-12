angular.module('alurapic').controller('FotoCreateController', function($scope, $http, $routeParams) {

	$scope.foto = {};
	$scope.mensagem = '';
	
	if($routeParams.fotoId) {
		
		$http.get('v1/fotos/' + $routeParams.fotoId).success(function(foto) {
			
			$scope.foto = foto;
		}).error(function(erro) {

			$scope.mensagem = 'Não foi possível obter a foto.'
			console.log(erro);
		});
	}
	
	$scope.cadastrar = function() {

		if($scope.formFotoCreate.$valid) {
			
			if($scope.foto._id) { // alterar
				
				$http.put('v1/fotos/' + $scope.foto._id, $scope.foto).success(function() {
					
					$scope.mensagem = 'Foto alterada com sucesso!';					
				}).error(function(erro) {
					
					$scope.mensagem = 'Foto não alterada.'
					console.log(erro);
				});
			} else { // cadastrar
				$http.post('v1/fotos', $scope.foto).success(function() {
				
					$scope.mensagem = 'Foto cadastrada com sucesso!';
					$scope.foto = {};
				}).error(function(erro) {

					$scope.mensagem = 'Foto não cadastrada.'
					console.log(erro);
				});
			}
		}
	};
});