'use strict';
angular.module('beta2App').service('classeService', function($http) {
  var service = {
      
    getAllClasse: function() {
      return $http.get('http://localhost:8080/classe', { cache: true }).then(function(resp) {
        return resp.data;
      });
    },
    
    getAllClasse2: function() {
      return $http.get('http://localhost:8080/classe') ;
    },
    searchUserByName:function(nom){
        return $http.get('http://localhost:8080/user/eleve'+nom, { cache: true }).then(function(resp) {
            return resp.data;
        });
    },
    
    insertUser: function (){
          return $http.get('http://localhost:8080/user', { cache: true }).then(function(resp) {
        return resp.data;
      });
      },
      
    getEleveByClasseId: function(id){
        return $http.get('http://localhost:8080/user/classe/'+ id, { cache: true }).then(function(resp) {
        return resp.data;
         });
    },
    
    insertAbsence:function(id){
        return $http.get('http://localhost:8080/absence/'+ id, { cache: true }).then(function(resp) {
        return resp.data;
         });
    }
    
    };
  return service;
});

