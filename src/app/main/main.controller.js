'use strict';
function MainCtrl(sharedData) {
  var vm = this;

  vm.awesomeThings = sharedData.getThingsToDo();

  angular.forEach(vm.awesomeThings, function(awesomeThing) {
    awesomeThing.rank = Math.random();
  });
}
