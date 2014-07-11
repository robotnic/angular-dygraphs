// Code goes here
 var myApp = angular.module('myApp', ["dygraphs-directive"]);

    myApp.controller('MyCtrl', function($scope) {
      $scope.graph = {
        data: [
          [new Date(2010, 0, 1), 10, 100],
          [new Date(2011, 0, 1), 20, 80],
          [new Date(2012, 0, 1), 50, 60],
          [new Date(2013, 0, 1), 70, 80]
        ],
        opts: {
          labels: ["x", "A", "B"]
        },
        meta:{from:1,to:null}
      };
      $scope.$watch("graph.meta",function(){
            console.log("zzzzz",$scope.graph.meta);
      });
      $scope.zoom=function(from,to){
            console.log("echt jetzt?",arguments,$scope.graph);
//            $scope.$apply();
      };
    });
