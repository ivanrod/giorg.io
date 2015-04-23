function giorgioConfig($mdIconProvider, $stateProvider, $urlRouterProvider) {
	'use strict';
    $mdIconProvider
          .iconSet('communication', '././bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg',24)
          .icon('action:dashboard', '././bower_components/material-design-icons/action/svg/design/ic_dashboard_24px.svg',24);


    ////////////
    // Routes //
    ////////////

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