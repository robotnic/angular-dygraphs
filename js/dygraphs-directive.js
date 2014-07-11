angular.module("dygraphs-directive", [])
    .directive('dygraphs', function() {
        return {
            restrict: 'E', // Use as element
            scope: { // Isolate scope
                data: '=', // Two-way bind data to local scope
                opts: '=?', // '?' means optional
                meta: '=', // '?' means optional
                zoom: '&' // '?' means optional
            },
            template: "<div></div>", // We need a div to attach graph to
            link: function(scope, elem, attrs) {
                console.log("--",scope);
                    //if(!scope.meta)scope.meta={from:0,to:null};
                var graph = new Dygraph(elem.children()[0], scope.data, scope.opts);
                scope.$watch("data",function(){
                    graph.updateOptions({file:scope.data,zoomCallback:scope.zoomCallback});
                },true);
                scope.zoomCallback=function(from,to,data){
                    console.log(from,to,scope);
                        scope.meta.from=from;
                        scope.meta.to=to;
                    scope.$apply(scope.zoom(from,to));
                    /*
                    scope.$apply(function(){
                      //  if(!scope.meta)scope.meta={from:0,to:null};
                    //    scope.meta.from=from;
                     //   scope.meta.to=to;
                    });
                    */
                    console.log(scope);
                };
            }
        };
    });
