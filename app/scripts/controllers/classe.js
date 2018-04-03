'use strict';
angular.module('beta2App')
        .controller('ClasseCtrl',["$scope",'classeService' ,function ($scope,classeService) {
             //$scope.loading = true;
    classeService.getAllClasse().then(function(response){
                $scope.classes = response;
    
    });
    
    
    
    
    

}]);
