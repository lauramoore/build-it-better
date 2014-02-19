'use strict';

angular.module('yeomanAngularPhonecatApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

    $scope.orderProp = 'age';
  });

//MainCtrl.$inject = ['$scope', '$http'];
