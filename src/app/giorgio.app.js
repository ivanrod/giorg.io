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
			.controller('DashboardCtrl', DashboardCtrl)
			.controller('MainCtrl', MainCtrl)
			.controller('ContactCtrl', ContactCtrl)
			.controller('NavbarCtrl', NavbarCtrl)
			.controller('SidebarCtrl', SidebarCtrl)
			.controller('LayoutCtrl', LayoutCtrl)
			;
			

	////////////////////////////////////////////////////////
	// Dependencies injection to prevent manglification  //
	////////////////////////////////////////////////////////

	giorgioConfig.$inject = ['$mdIconProvider', '$stateProvider', '$urlRouterProvider'];
	sharedData.$inject = [];
	DashboardCtrl.$inject = ['sharedData'];
	MainCtrl.$inject = ['sharedData'];
	ContactCtrl.$inject = [];
	NavbarCtrl.$inject = [];
	SidebarCtrl.$inject = [];
	LayoutCtrl.$inject = [];
})();