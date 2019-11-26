app.directive('ljPrism',['$timeout',function($timeout){
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: './directives/ljPrism/ljPrismView.html',
        scope: {
            language : '@',
            source : '@'
        },
        link:function(scope, element, attrs){
            scope.$watch('source', function(v) {
                if(v) {
                    Prism.highlightElement(element.find("code")[0]);
                }
            });
        }
    };
}]);
