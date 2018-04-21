angular.module('beta2App')
        .controller('ProfesseurCtrl',["$scope","$http","$location",'classeService', function ($scope, $http, $location,classeService) {
                $scope.test = 'hey ';
       
             
            
         var getCurrentDate= function(){
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            if(dd<10){
                 dd='0'+dd;
              } 
            if(mm<10){
                mm='0'+mm;
              } 
               var today = yyyy+'-'+mm+'-'+dd;
            return today;
        };
        
        var getCurrentDatePlusOne= function(){
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear()+1;
            if(dd<10){
                 dd='0'+dd;
              } 
            if(mm<10){
                mm='0'+mm;
              } 
               var today = yyyy+'-'+mm+'-'+dd;
            return today;
        };
        var dateDebutCours = getCurrentDate();
        var dateFinCours= getCurrentDatePlusOne();
        var classe_id="1";
        var dataToInput= {
             classe_id,dateDebutCours,dateFinCours
        };
           
       
        var submitUser = function () {
        var method = "";
        var url = "";
        method = "POST";
        url = 'http://localhost:8080/cours/emploi_du_temps';
  
        $http({
            method: method,
            url: url,
            data: angular.toJson(dataToInput),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'DElETE, GET, PUT, POST, OPTIONS',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function (resp) {
            if(resp){
                $scope.cours =resp.data;
              // return $scope.cours ;
                
            }else{
                alert("erreur d'execution");
            }
            
            

        });
    };


    
      submitUser();
   
}]);
 