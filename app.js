var app = angular.module('app', []);


app.controller('appController', function($scope){
  $scope.phones = [
    {
      name :  'Galaxy S8',
      snippet : 'Some things of marketing here!! :D',
    },
    {
      name :  'iPhone 8',
      snippet : 'Some things of marketing here too!!! :D',
    },
    {
      name : 'LG G5' ,
      snippet : 'Some things of marketing here too!! :D',
    },
  ];
  $scope.name = "Ronaldo";
})
