angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute']).config(
	function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl: '/partials/principal.html',
		controller: 'FotoController'
	});

	$routeProvider.when('/fotos/cad', {
		templateUrl: '/partials/foto-create.html',
		controller: 'FotoCreateController'		
	});
	
	$routeProvider.when('/fotos/alter/:fotoId', {
		templateUrl: '/partials/foto-create.html',
		controller: 'FotoCreateController'		
	});	

	$routeProvider.when('/invalida', {
		templateUrl: '/partials/invalida.html'		
	});

	$routeProvider.otherwise({
		redirectTo: '/invalida'
	});
});