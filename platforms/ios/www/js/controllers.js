angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PeopleCtrl', function($scope) {
  $scope.People = [
    { title: 'Jordan', id: 1 },
    { title: 'Shelby', id: 2 },
    { title: 'Anders', id: 3 },
    { title: 'Kelsey', id: 4 },
    { title: 'Steven', id: 5 },
    { title: 'Amanda', id: 6 }
  ];
})


.controller('PersonCtrl', function($scope, $stateParams) {
	$scope.Person = [
		{ title: 'Jordan', id: 1, cell: "2244060800"}
	];
})