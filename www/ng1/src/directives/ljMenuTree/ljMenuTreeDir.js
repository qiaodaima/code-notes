app.directive('ljMenuTree',['$timeout',function($timeout){
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: './directives/ljMenuTree/ljMenuTreeView.html',
        scope: {
            menus : '='
        },
        link: function(scope, elem, attrs){
            $timeout(function(){
                //滚动条
                elem.find('.p-menu-list').niceScroll({
                    cursorcolor: "#ccc",
                    cursorwidth: "6px",
                    autohidemode:"leave",
                    railoffset:{
                        left: 5
                    }
                });

                // 菜单展开折叠效果
                elem.on('click', '.meun-item.title', function(){
                    $(this).parent().siblings('').children('.inner-menu-wrap').slideUp();
                    $(this).siblings('.inner-menu-wrap').slideToggle();
                });
            },500);
        }
    };
}]);
