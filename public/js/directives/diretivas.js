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
});