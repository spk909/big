'use strict';

/**
 * @ngdoc function
 * @name krsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the krsApp
 */

//Controller Part
angular.module('beta2App')
        .controller('Inscription_eleveCtrl',["$scope","$http","$location",'classeService', function ($scope, $http, $location,classeService) {
 
        $scope.loading = true;
         

    //Initialize page with default data which is blank in this example
    //$scope.users = [];
    var data =
           
            
       
            $scope.form = {

                nom: "",
                prenom: "",
                date_de_naissance: "",
                adresse: "",
                telephone: "",
                nationalite: "",
                photo_profile: "",
                code_postal: "",
                ville: "",
                login: "",
                password: "",
                email: "",
                biographie: "",
                civilite: "",
                classe_id:"",
                typeUtilisateur_id: "1"
            };

   

    //HTTP POST/PUT methods for add/edit employee
    $scope.submitUser = function () {
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
            
            

        }), function (error) {
            console.log(data);

        };


    };
    
    
    
    //Clear the form
    function _clearForm() {
        $scope.form.nom = "";
        $scope.form.prenom = "";
        $scope.form.email = "";
        $scope.form.id = -1;
    }
    
    
    
    classeService.getAllClasse2().then(function(response){
                $scope.classes = response.data;
                 });

}]);
