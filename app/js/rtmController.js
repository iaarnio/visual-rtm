angular.module('visualRtm.controllers', ['lvl.services'])
.controller('rtmController', ['$scope', '$http', 'uuid', function($scope, $http, uuid) {
    $scope.tasklist = {
        list: 'listname', //tasklist.tasks.list.id
        tasks: initTasks(),
        dropped: function(dragEl, dropEl) {
            var drag = angular.element(dragEl);
            var drop = angular.element(dropEl);
            var dropName = drop.attr('task-name');
            console.log('drop name:', dropName);
            if (drag.attr('loc-name')) {
                this.droppedLoc(dropName, drag.attr('loc-name'))
            } else if (drag.attr('tag-name')) {
                this.droppedTag(dropName, drag.attr('tag-name'))
            }
            console.log("TASKLIST drop: " + drag.attr('id') + " has been dropped on " + drop.attr("id"));
        },
        taskByName: function(taskName) { return _.find(this.tasks, {'name': taskName }); },
        droppedLoc: function(taskName, newLoc) {
            var task = this.taskByName(taskName);
            task.location_id = newLoc;
            $scope.$apply();
        },
        droppedTag: function(taskName, newTag) {
            var task = this.taskByName(taskName);
            if (newTag && !_.contains(task.tags, newTag)) {
                task.tags.push(newTag);
                $scope.$apply();
            }
        }
    };
    
    $scope.loclist = { 
        locations: initLocations(),
        dropped: function(dragEl, dropEl) {
            var drag = angular.element(dragEl);
            var drop = angular.element(dropEl);
            console.log("LOCLIST drop: " + drag.attr('id') + " has been dropped on " + drop.attr("id"));
            var name = drag.attr('loc-name');
            if (name && _.findWhere(this.locations, {'name': name}) === undefined) {
                this.locations.push( { 'id': uuid.new(), 'name': name } );
                $scope.$apply()
            }
        }
    };
    
    $scope.taglist = {
        tags: initTags($scope.tasklist),
        dropped: function(dragEl, dropEl) {
            var drag = angular.element(dragEl);
            var drop = angular.element(dropEl);
            console.log("TAGLIST drop: " + drag.attr('id') + " has been dropped on " + drop.attr("id"));
            var name = drag.attr('tag-name');
            if (name && !_.contains($scope.taglist.tags, name)) {
                $scope.taglist.tags.push(name);
                $scope.$apply()
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

