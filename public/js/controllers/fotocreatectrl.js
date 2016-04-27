angular.module('alurapic').controller('FotoCreateController', function($scope, recursoFoto, salvarFoto, $routeParams) {

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
	
	$scope.salvar = function() {

		if($scope.formFotoSave.$valid) {
                
        	salvarFoto.cadastrar($scope.foto).then(function(dados) {
                    
            	$scope.mensagem = dados.mensagem;
                if(dados.inclusao) $scope.foto = {};
            }).catch(function(erro) {

                $scope.mensagem = erro.mensagem;
            });
		}
	};
});