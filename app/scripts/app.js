'use strict';

/**
 * @ngdoc overview
 * @name beta2App
 * @description
 * # beta2App
 *
 * Main module of the application.
 */
var myApp = angular.module('beta2App', ['ui.router', 'ngMaterial']);

myApp.config(function($stateProvider) {
    
    var states=[
    {
        name: 'connexion',
        url: '',
        controller :'ConnexionCtrl',
        templateUrl: 'views/connexion.html'
    },
    {
        name: 'adminMain',
        url: '/adminMain',
        controller :'AdminMainCtrl',
        templateUrl: 'views/adminMain.html'
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
