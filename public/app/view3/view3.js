'use strict';

angular.module('myAppRename.view3', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'app/view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'https://euw.api.pvp.net/api/lol/euw/v2.2/matchhistory/19626838?rankedQueues=RANKED_SOLO_5x5&api_key=5f8a6bab-13e1-4023-86bc-a571be3cf519'
        }).
            success(function (data, status, headers, config) {
                console.log("Data: " + JSON.stringify(data))
                $scope.users = data;
            }).
            error(function (data, status, headers, config) {

                $scope.error = data;
            });
    });



