function giorgioConfig($stateProvider, $urlRouterProvider) {
	'use strict';

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/layout/layout.html',
        controller: 'LayoutCtrl',
        controllerAs: 'layout'
      })
      .state('home.main', {
        url: 'main',
        views: {
          'viewNormal':{
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
          }
        }
      })
      .state('home.dashboard', {
        url: 'dashboard',
        views: {
          'viewNormal':{
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardCtrl',
            controllerAs: 'dashboard'
          }
        }     
      })
      ;

    $urlRouterProvider.otherwise('/main');
  }