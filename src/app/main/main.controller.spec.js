'use strict';

describe('controllers', function(){
  var scope,
      controller;

  beforeEach(module('giorgio'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller;
  }));

  it('should define more than 5 awesome things', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    var vm = $controller('MainCtrl', {
      $scope: scope
    });

    expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
    expect(vm.awesomeThings.length > 5).toBeTruthy();
  }));
});
