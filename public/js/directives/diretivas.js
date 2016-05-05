angular.module('minhasDiretivas', []).directive('painel', function() {

	var ddo = {};

	ddo.restrict = 'AE';
	ddo.transclude = true;
	ddo.scope = {

		nome: '@',
		cor: '@'
	};

	ddo.templateUrl = 'js/directives/painel-cool.html';
	return ddo;
}).directive('minhaFoto', function(){

	var ddo = {};

	ddo.restrict = 'AE';	
	ddo.scope = {

		url: '@',
		descricao: '@'
	};

	ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{descricao}}">';
	return ddo;
}).directive('botaoPerigo', function(){

	var ddo = {};

	ddo.restrict = 'E';	
	ddo.scope = {

		nome: '@',
		acao: '&'
	};

	ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';
	return ddo;
}).directive('meuFoco', function() {
	
	var ddo = {};

	ddo.restrict = 'A';		
	/* ddo.scope = {

		focado: '='
	}; */
	
	ddo.link = function(scope, element) {
		
		/* scope.$watch('focado', function() {
			
			if(scope.focado) {
				
				element[0].focus();
				scope.focado = false;
			}
		});*/
		
		scope.$on('fotoSalva', function() {
			
			element[0].focus();
			scope.focado = false;
		});
	}
	
	return ddo;
});