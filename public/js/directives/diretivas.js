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
}).directive('outra-foto', function(){

});