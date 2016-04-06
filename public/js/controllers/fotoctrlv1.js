angular.module('alurapic').controller('FotoController', function($scope){

	$scope.fotos = [
		{
			titulo : 'Deadpool',
			url : 'http://cdn.shopify.com/s/files/1/0019/2592/products/Deadpool-Button-Logo_grande.jpg',
			texto : 'Deadpool Icon Face'
		},
		{
			titulo : 'Spider-Man',
			url : 'http://img13.deviantart.net/21fa/i/2009/145/3/3/spider_man_dock_icon_by_meganubis.png',
			texto : 'Spider-Man Icon Face'
		},
		{
			titulo : 'Batman',
			url : 'https://40.media.tumblr.com/tumblr_lzxmokA0SK1qlllbio1_500.png',
			texto : 'Batman Icon Face'
		}
	];
});