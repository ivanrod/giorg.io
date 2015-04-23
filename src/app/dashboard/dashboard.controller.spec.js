'use strict';

describe('Dashboard Controller ', function(){
  var scope,
      controller;

  beforeEach(module('giorgio'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller;
  }));

  it('should define more than 2 courses', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    var vm = $controller('DashboardCtrl', {
      $scope: scope
    });

    expect(angular.isArray(vm.coursera)).toBeTruthy();
    expect(vm.coursera.length > 2).toBeTruthy();
  }));
});