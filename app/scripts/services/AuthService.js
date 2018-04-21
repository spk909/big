'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the appTestApp
 */


angular.module('beta2App').service('AuthService', function($localStorage, $http) {
  
  // Set variable to track is user is authenticated
  var _isAuthenticated;
  this.userName="my s";
  // Check localstorage to find out if AuthenticatedUser exists
  if($localStorage.hasOwnProperty('AuthenticatedUser') ) { 
  
    // If AuthenticatedUser exists set the isAuthenticated var to the Guid
    _isAuthenticated = $localStorage.AuthenticatedUser;
    console.log('_isAuthenticated should be true',_isAuthenticated);
    
    return {isAuthenticated: _isAuthenticated };
  } else {
    
    // If no Authenticated user set isAuthenticated to false
    // _isAuthenticated = false; 
    
    console.log('_isAuthenticated should be false',_isAuthenticated);

    //return 
    return $http.post('http://localhost:8080/login/', { cache: true });
      };
    // fin return 

  
  
});

