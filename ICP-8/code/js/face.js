var app = angular.module("faceApp", []);
app.controller("faceCtrl", function ($scope, $http) {
    //Delclaring the books variable.
    $scope.url = "";
    $scope.imgurl = "default.png";
    $scope.name = "";
    $scope.desc="";

    //In this method will make a get request to node api to get all records. 
    $scope.getName = function () {
        $scope.name="";
        $scope.desc="";
        $http({
            method: 'GET',
            url: 'http://localhost:3002/getName?url=' + $scope.url
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.imgurl = $scope.url;
           $scope.name=response.data[0].result.name;
           $scope.desc=response.data[0].result.description;
        }, function errorCallback(response) {
            console.log(response);
        });
    }
});