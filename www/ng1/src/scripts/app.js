// 测试信息
console.info("喜欢开控制台的孩纸都是好孩纸~~~");

// 主应用程序
var app = angular.module('ngApp', ['ui.router']);

// 解决代码高亮失效问题
app.run(function($rootScope,$timeout){
    $rootScope.$on('$stateChangeSuccess',function(){
        $timeout(function(){
            Prism.highlightAll();
        },0);
    });
});
