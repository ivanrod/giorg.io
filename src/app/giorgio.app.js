(function(){
	'use strict';
	///////////////////
	// Giorg.io app //
	///////////////////e
	
	angular
		.module('giorgio', ['ngAnimate', 
							'ngCookies', 
							'ngTouch', 
							'ngSanitize', 
							'ui.router', 
							'ngMaterial']);

	/////////////////
	// Components //
	/////////////////

	angular
		.module('giorgio')
			.config(giorgioConfig)
			.service('sharedData', sharedData)
			.controller('MainCtrl', MainCtrl)
			.controller('NavbarCtrl', NavbarCtrl)
			

	////////////////////////////////////////////////////////
	// Dependencies injection to prevent manglification  //
	////////////////////////////////////////////////////////

	giorgioConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	sharedData.$inject = [];
	MainCtrl.$inject = ['sharedData'];
	NavbarCtrl.$inject = [];
})();