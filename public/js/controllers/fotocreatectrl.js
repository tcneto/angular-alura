angular.module('alurapic').controller('FotoCreateController', function($scope, recursoFoto, $routeParams) {

	$scope.foto = {};
	$scope.mensagem = '';
	
	if($routeParams.fotoId) {
		
		recursoFoto.get({fotoId:$routeParams.fotoId}, function(foto) {
			
			$scope.foto = foto;
		}, function(erro) {

			$scope.mensagem = 'Não foi possível obter a foto.'
			console.log(erro);
		});
	}
	
	$scope.cadastrar = function() {

		if($scope.formFotoSave.$valid) {
			
			if($routeParams.fotoId) { // alterar
				
				recursoFoto.update({fotoId:$scope.foto._id}, $scope.foto, function() {
					
					$scope.mensagem = 'Foto alterada com sucesso!';					
				}, function(erro) {
					
					$scope.mensagem = 'Foto não alterada.'
					console.log(erro);
				});
			} else { // cadastrar
				recursoFoto.save($scope.foto, function() {
				
					$scope.mensagem = 'Foto cadastrada com sucesso!';
					$scope.foto = {};
				}, function(erro) {

					$scope.mensagem = 'Foto não cadastrada.'
					console.log(erro);
				});
			}
		}
	};
});