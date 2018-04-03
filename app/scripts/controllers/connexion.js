'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the appTestApp
 */


angular.module('beta2App')
  .controller('ConnexionCtrl', function ($scope, $http, $location) {
       $scope.users = [];
    var data =
           $scope.form = {
 
           login: "",
           password: ""
            };
            
        $scope.go = function (){
            var method = "";
            var url = "";
            
            method = "POST";
            url = 'http://localhost:8080/login/';
         $http({
            method: method,
            url: url,
            data: angular.toJson($scope.form),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'DElETE, GET, PUT, POST, OPTIONS',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function (response) {
          var   data2 = response.data;
          if (data2.libelle ==="eleve"){
              $location.path("/accueil");
              console.log("je suis eleve");
          }else if(data2.libelle ==="professeur"){
              $location.path("/main");
              console.log("je suis prof");
          }else if(data2.libelle ==="admin"){
              $location.path("/adminMain");
              console.log("je suis admin");
          }else{
              $location.path("/");
              console.log("mauvais mot de pass");
               alert("mauvais mot de passe");
          }
                
             

        }), function (error) {
            console.log(data);
            alert("mauvais mot de passe");

        };
        };
        
  });
