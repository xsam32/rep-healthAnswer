myControllers.controller('firstAidCtrl', function($scope, $stateParams) {
var detail = angular.fromJson($stateParams);
console.log(detail);
});

