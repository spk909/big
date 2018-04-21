'use strict';



angular.module('beta2App')
  .controller('ConnexionCtrl', function ($scope, $http, $location,$localStorage, AuthService) {
         //Run init stuff
  $scope.InitPage = function(){
    $scope.$storage = $localStorage;
   // $scope.LoginStatus = "Logged Out";
  };
  
  
  
  
       $scope.users = [];
    var data =
           $scope.form = {
 
           login: "",
           password: ""
            };
            
           
            
            
        $scope.go = function (form){
            
            
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
          var   user = response.data;
           $scope.authResults = AuthService;
            console.log('done');
       
            $scope.MongoData = user;
            $scope.LoginStatus = "Logged In";
            $localStorage.AuthenticatedUser = user.prenom;
    
          if (user.typeUtilisateur.id === 1){
              $location.path("/accueil");
              console.log("je suis eleve");
          }else if(user.typeUtilisateur.id === 2){
              $location.path("/main");
              console.log("je suis prof");
          }else if(user.typeUtilisateur.id === 3){
              $location.path("/adminMain");
              console.log("je suis admin");
          }else{
              $location.path("/");
              console.log("mauvais mot de pass");
               alert("mauvais mot de passe");
          }
                
             

        });
    };
          
           $scope.Logout = function(){
               
            var method = "";
            var url = "";
            
            method = "POST";
            url = 'http://localhost:8080/logout/';
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
           // delete $localStorage.AuthenticatedUser;
            $location.path("/connexion");
            console.log("log out");
            
        });
            
          };
  });
