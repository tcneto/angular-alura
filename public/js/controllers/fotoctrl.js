angular.module('alurapic').controller('FotoController', function($scope, $http) {

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';
	
	$http.get('v1/fotos').success(function(fotos) {

		$scope.fotos = fotos;
	}).error(function(erro) {

		console.log(erro);
	});
	
	$scope.excluir = function(foto) {
		
		$http.delete('v1/fotos/' + foto._id).success(function() {
			
				var indFoto = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indFoto, 1);
				console.log('Foto ' + foto.titulo + ' foi!');
				$scope.mensagem = 'Foto ' + foto. titulo + ' excluída com sucesso!';
		}).error(function(erro) {
			
				$scope.mensagem = 'Foto não excluída';
				console.log(erro);
		});
	};
});