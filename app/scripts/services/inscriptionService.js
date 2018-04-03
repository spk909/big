'use strict';
angular.module('beta2App').service('InscriptionService', function($http) {
  var service = {
      insertUser: function (){
          return $http.get('http://localhost:8080/user', { cache: true }).then(function(resp) {
        return resp.data;
      });
      }
      
   };
  
  return service;
});
