'use strict';

angular.module('beta2App')
  .controller('AbsenceCtrl',["$scope","$http","$location", function ($scope, $http, $location) {
      
        $scope.user = {nom: ''};          
                  
          $scope.search = function(){
              //$scope.user = {nom: ''}; 
                var method = "";
        var url = "";
        method = "POST";
        url = 'http://localhost:8080/user/eleve';
        $http({
            method: method,
            url: url,
            data: angular.toJson($scope.user),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'DElETE, GET, PUT, POST, OPTIONS',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function (success) {
            if(success){
               
                console.log(data);
                alert("l'utilisateur a bien été ajouté");
                 $location.path("main"); 
            }else{
                alert("erreur d'execution");
            }
            
        });
    };
                 
           var data =
            $scope.form = {
                nom: ""
         };
         
         $scope.submitEmployee = function () {
        var method = "";
        var url = "";
        method = "POST";
        url = 'http://localhost:8080/user';
        $http({
            method: method,
            url: url,
            data: angular.toJson($scope.form),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'DElETE, GET, PUT, POST, OPTIONS',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function (success) {
            if(success){
               
                console.log(data);
                alert("l'utilisateur a bien été ajouté");
                 $location.path("main"); 
            }else{
                alert("erreur d'execution");
            }
            
            

        });
};

}]);
