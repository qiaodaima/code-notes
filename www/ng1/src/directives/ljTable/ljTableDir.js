app.directive('ljTable',function(){
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: './directives/ljTable/ljTableView.html',
        scope: {
            theme  : '@',
            headers: '=',
            rows   : '='
        },
        link: function(scope, elem, attrs){
        }
    };
});
