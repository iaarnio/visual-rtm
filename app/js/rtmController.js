angular.module('visualRtm.controllers', ['lvl.services'])
.controller('rtmController', ['$scope', '$http', 'uuid', function($scope, $http, uuid) {
    $scope.tasklist = {
        list: 'listname', //tasklist.tasks.list.id
        tasks: initTasks(),
        dropped: function(dragEl, dropEl) {
            var drag = angular.element(dragEl);
            var drop = angular.element(dropEl);
            console.log("TASKLIST drop: " + drag.attr('id') + " has been dropped on " + drop.attr("id"));
            console.log("drag(loc):" + drag.attr('loc-name'));
            console.log("drag(tag):" + drag.attr('tag-name'));
        }
    };
    
    $scope.loclist = { 
        locations: initLocations(),
        dropped: function(dragEl, dropEl) {
            var drag = angular.element(dragEl);
            var drop = angular.element(dropEl);
            console.log("LOCLIST drop: " + drag.attr('id') + " has been dropped on " + drop.attr("id"));
            console.log("drag:" + drag.attr('loc-name'));
            console.log("locations:" + this.locations);
            console.log("locations[0]:" + this.locations[0]);
            var name = drag.attr('loc-name');
            if (name && _.findWhere(this.locations, {'name': name}) === undefined) {
                this.locations.push( { 'id': uuid.new(), 'name': name } );
                console.log("len:" + this.locations.length);                
            }
        }
    };
    
    $scope.taglist = {
        tags: initTags($scope.tasklist),
        dropped: function(dragEl, dropEl) {
            var drag = angular.element(dragEl);
            var drop = angular.element(dropEl);
            console.log("TAGLIST drop: " + drag.attr('id') + " has been dropped on " + drop.attr("id"));
            console.log("drag:" + drag.attr('tag-name'));
            var name = drag.attr('tag-name');
            if (name && _.findWhere($scope.taglist.tags, name) === undefined) {
                $scope.taglist.tags.push(name);
                console.log("len:" + $scope.taglist.tags.length);                
            }
        }
    };
    
    /*
    $scope.dropped = function(dragEl, dropEl) {
      var drag = angular.element(dragEl);
      var drop = angular.element(dropEl);
 
      console.log("The element " + drag.attr('id') + " has been dropped on " + drop.attr("id") + "!");
    };
    */

    /*
    $http.get('data/tasks.json')
    .success(function(data, status) {
        $scope.status = status;
        $scope.tasklist = data;
    })
    .error(function(data, status) {
        $scope.status = status;
    });;
    */
    
}]);

