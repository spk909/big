angular.module('beta2App').component('absence', {
  
  
  template:'<div ng-include="\'views/nav.html\'"></div>'+
          '<input type="text" placeholder="Search..">'+  
          '<form ng-submit="searchUserByName()" novalidate >'+
        '<table>'+
            '<tr>'+
                '<td>nom</td>'+
                '<td><input type="text" ng-model="form.nom" size="40" /></td>'+
           ' </tr>'+
            
             '<tr>'+
                '<td colspan="2"><input type="submit" value="submit" /> <button type="reset" value="Reset">Reset</button></td>'+
    
           ' </tr>'+
            
      '  </table>'+
   ' </form>'
 }); 
  
  /*  
  template:'<div ng-include="\'views/nav.html\'"></div>'+
          '<input type="text" placeholder="Search..">'+  
          '<form ng-submit="searchUserByName()" novalidate >'+
        '<table>'+
            '<tr>'+
                '<td>nom</td>'+
                '<td><input type="text" ng-model="form.nom" size="40" /></td>'+
           ' </tr>'+
            
             '<tr>'+
                '<td colspan="2"><input type="submit" value="submit" /> <button type="reset" value="Reset">Reset</button></td>'+
    
           ' </tr>'+
            
      '  </table>'+
   ' </form>',
            
  
   controller: function($scope,$http,$location) {
    var data =
            $scope.form = {
                nom: ""
         };
         
         $scope.submitEmployee = function () {
        var method = "";
        var url = "";
        method = "POST";
        url = 'http://localhost:8080/user/eleve';
        $http({
            method: method,
            url: url,
            data: angular.toJson(this.form),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'DElETE, GET, PUT, POST, OPTIONS',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function (success) {
            if(success){
                alert("l'utilisateur a bien été ajouté");
                 $location.path("adminMain"); 
            }else{
                alert("erreur d'execution");
            }
            
            

        });

  
   
  };

           
   } */
  /*template:'<div ng-include="\'views/nav.html\'"></div>'+
 
          '<div class="flex-h">' + 
            '<h3>déclarer une absence par classes</h3>' +
            '<table>'+
            '<tr>'+
            '<th><strong> formation </strong></th>'+
            '</tr>'+
            '<tr  ng-repeat="classe in $ctrl.classe">' +
            '  <td>' +
            '    <a ui-sref="classe.eleve({ classeId: classe.id })">' +
            '      {{classe.libelle}}' +
            '    </a>' +
            
            '  </td>' +
            '</tr>'+
            '</table>'+
            '<ui-view></ui-view>' +
            '</div>' 
           */
