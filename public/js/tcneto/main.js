angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute']).config(
	function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl: '/partials/principal.html',
		controller: 'FotoController'
	});

	$routeProvider.when('/fotos/c', {
		templateUrl: '/partials/foto-create.html'		
	});

	$routeProvider.when('/invalida', {
		templateUrl: '/partials/invalida.html'		
	});

	$routeProvider.otherwise({
		redirectTo: '/invalida'
	});

});