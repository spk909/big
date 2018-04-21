'use strict';

angular.module('beta2App')
  .controller('AbsenceCtrl',["$scope","$http","$location", function ($scope, $http, $location) {
      
      
        $scope.g = {nom: ''};          
                  
          $scope.search = function(){
              //$scope.user = {nom: ''}; 
                var method = "";
        var url = "";
        method = "POST";
        url = 'http://localhost:8080/user/eleve';
        $http({
            method: method,
            url: url,
            data: angular.toJson($scope.g),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'DElETE, GET, PUT, POST, OPTIONS',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function (resp) {
            if(resp){
               
               $scope.user =resp.data;
            
               //return $scope.user;
            }else{
                alert("personne ne correspond a votre recherche");
            }
            
        });
    };
                 
        
       $scope.form = {
                date_debut_absence: "",
                date_fin_absence: "",
                motif:"",
                utilisateur_id:""
         };
         
        $scope.insertAbsence = function () {
        var method = "";
        var url = "";
        method = "POST";
        url = 'http://localhost:8080/absence';
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
                 $location.path("/main"); 
            }else{
                alert("erreur d'execution");
            }
            
            

        });
};

}]);
