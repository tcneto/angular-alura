angular.module('alurapicServicos', ['ngResource']).factory('recursoFoto',
	
	function($resource) {
		
		return $resource('v1/fotos/:fotoId', null, {
			update : {
				method: 'PUT'
			}
		});
	}
).factory('salvarFoto', 
	
	function(recursoFoto, $q, $rootScope) {

		var service = {}
		var evento = 'fotoSalva';
		service.cadastrar = function(foto) {

			return $q(function(resolve, reject) {

				if(foto._id) {

					recursoFoto.update({fotoId:foto._id}, foto, function() {
					
						$rootScope.$broadcast(evento);
						resolve({
														
							mensagem: 'Foto alterada com sucesso!',
							inclusao: false
						});		
					}, function(erro) {
					
						reject({
							mensagem: 'Foto não alterada.',							
						});
						console.log(erro);
					});
				} else {

					recursoFoto.save(foto, function() {
						
						$rootScope.$broadcast(evento);
						resolve({
							mensagem: 'Foto cadastrada com sucesso!',
							inclusao: false
						});	
					}, function(erro) {

						reject({
							mensagem: 'Foto não cadastrada.',							
						});
						console.log(erro);
					});
				}
			});
		};

		return service;
	}
);