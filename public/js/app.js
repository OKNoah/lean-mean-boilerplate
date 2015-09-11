var app = angular.module( 'LeanMeanBoilerplate', [ 'ui.router' ] )

app.config( function ( $stateProvider ) {

	$stateProvider
		.state( 'home', {
			url: '',
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

})

app.controller( 'MainController', function ( $http, $scope ) {

	$scope.message = "It works!"

})