angular.module('beta2App').component('classe', {
  bindings: { classe: '<' },
  
  template: '<div ng-include="\'views/nav.html\'"></div>'+
            '<div class="flex-h">' + 
            '<h3>Liste des classes</h3>' +
            '<ul>' +
            '  <li ng-repeat="classe in $ctrl.classe">' +
            '    <a ui-sref="classe.eleve({ classeId: classe.id })">' +
            '      {{classe.libelle}}' +
            '    </a>' +
            
            '  </li>' +
            '</ul>'+
            '<ui-view></ui-view>' +
            '</div>' 
  

});
