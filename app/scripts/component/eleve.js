angular.module('beta2App').component('eleve', {
  bindings: { eleve: '<' },
  
  template: '<h3>listes des élèves</h3>' +
            '<table>' +
            '<tr ng-repeat="eleve in $ctrl.eleve"">'+
           
            '<td>Nom: {{eleve.nom}}</td>' +
            '<td>prenom: {{eleve.prenom}}</td>' +
           ' <td ><a ui-sref="eleve.absence({ eleveId: eleve.id })">declarer une absence</a></td>'+
            '</tr>'+
            '</table>'+
            '<button ui-sref="classe">Close</button>'
  
  
  
  
  
  });
