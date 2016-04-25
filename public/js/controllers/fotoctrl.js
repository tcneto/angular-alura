angular.module('alurapic').controller('FotoController', function($scope, recursoFoto) {

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';	
	
	recursoFoto.query(function(fotos) {

		$scope.fotos = fotos;
	}, function(erro) {

		console.log(erro);
	});
	
	$scope.excluir = function(foto) {
		
		recursoFoto.delete({fotoId:foto._id}, function() {
				
			var indFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indFoto, 1);
			$scope.mensagem = 'Foto ' + foto. titulo + ' excluída com sucesso!';
		}, function(erro) {
			
			$scope.mensagem = 'Foto não excluída';
			console.log(erro);
		});
	};
});