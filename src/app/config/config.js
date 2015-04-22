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
      .state('home.contact', {
        url: 'contact',
        views: {
          'viewNormal':{
            templateUrl: 'app/contact/contact.html',
            controller: 'ContactCtrl',
            controllerAs: 'contact'
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
      .state('home.dashboard.index', {
        url: '/',
        views: {
          'dashboardPartial': {
            templateUrl: 'app/dashboard/partials/index.html',
            controller: 'DashboardCtrl',
            controllerAs: 'dashboard'            
          }
        }
      })
      .state('home.dashboard.mycourses', {
        url: '/mycourses',
        views: {
          'dashboardPartial': {
            templateUrl: 'app/dashboard/partials/mycourses.html',
            controller: 'DashboardCtrl',
            controllerAs: 'dashboard'            
          }
        }
      })
      .state('home.dashboard.plan', {
        url: '/plan',
        views: {
          'dashboardPartial': {
            templateUrl: 'app/dashboard/partials/plan.html',
            controller: 'DashboardCtrl',
            controllerAs: 'dashboard'            
          }
        }
      })
      .state('home.dashboard.tools', {
        url: '/tools',
        views: {
          'dashboardPartial': {
            templateUrl: 'app/dashboard/partials/tools.html',
            controller: 'DashboardCtrl',
            controllerAs: 'dashboard'            
          }
        }
      })
      ;

    $urlRouterProvider.otherwise('/main');
  }