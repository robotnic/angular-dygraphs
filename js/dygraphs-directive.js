angular.module("dygraphs-directive", [])
    .directive('dygraphs', function() {
        return {
            restrict: 'E', // Use as element
            scope: { // Isolate scope
                data: '=', // Two-way bind data to local scope
                opts: '=?' // '?' means optional
            },
            template: "<div></div>", // We need a div to attach graph to
            link: function(scope, elem, attrs) {

                var graph = new Dygraph(elem.children()[0], scope.data, scope.opts);
            }
        };
    });
