'use strict';

/**
 * @ngdoc overview
 * @name beta2App
 * @description
 * # beta2App
 *
 * Main module of the application.
 */
var myApp = angular.module('beta2App', ['ui.router', 'ngMaterial','ngStorage']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/connexion');
    var states=[
    {
        name: 'connexion',
        url: '/connexion',
        controller :'ConnexionCtrl',
        templateUrl: 'views/connexion.html'
       // authenticate: false
    },
    {
        name: 'accueil',
        url: '/accueil',
        //controller :'ConnexionCtrl',
        templateUrl: 'views/accueil.html'
       // authenticate: false
    },
    {
        name: 'adminMain',
        url: '/adminMain',
        controller :'AdminMainCtrl',
        templateUrl: 'views/adminMain.html',
        authenticate: true
    },
    
    {
        name: 'professeur',
        url: '/professeur',
        controller :'ProfesseurCtrl',
        //service:'classeservice',
        templateUrl: 'views/professeur.html'
    },
    
   {
        name: 'absence',
        url: '/absence',
        controller: 'AbsenceCtrl',       
        templateUrl: 'views/absence.html'
    },
    
   /*{
        name: 'absence',
        url: '/absence',
       component: 'absence',
       resolve: {
        classe: function(classeService) {
          return classeService.getAllClasse();
        }
        }
    },*/
   {
        name: 'eleve_absent',
        url: '/eleve_absent',
       component: 'eleve_absent'
  },
     
    {
        name: 'inscription_eleve',
        url: '/inscription_eleve',
        service :'classeService',
        controller :'Inscription_eleveCtrl',
        templateUrl: 'views/inscription_eleve.html'
    },
    {
      name : 'classe',
      url : '/classe',
      component: 'classe',
      resolve: {
        classe: function(classeService) {
          return classeService.getAllClasse();
        }
      }
    },
    
    {
      name : 'classe.eleve',
      url : '/{classeId}',
      component: 'eleve',
        resolve: {
                eleve: function(classeService, $stateParams) {
                    return classeService.getEleveByClasseId($stateParams.classeId);
                }
        }
    },
    {
        name: 'eleve.absence',
        url: '/{eleveId}',
        component: 'absence',
         resolve: {
                eleve: function(classeService, $stateParams) {
                    return classeService.insertAbsence($stateParams.eleveId); 
                }
        }
    }
    
    
    ];
    
    states.forEach(function(state) {
    $stateProvider.state(state);
  });
  
  
});

myApp.factory("HttpErrorInterceptorModule", ["$q", "$rootScope", "$location",
    function($q, $rootScope, $location) {
        var success = function(response) {
            // pass through
            return response;
        },
            error = function(response) {
                if(response.status === 401) {
                    $location.path("/connexion");
                }

                return $q.reject(response);
            };

        return function(httpPromise) {
            return httpPromise.then(success, error);
        };
    }
]).config(["$httpProvider",
    function($httpProvider) {
        $httpProvider.responseInterceptors.push("HttpErrorInterceptorModule");
    }
]);