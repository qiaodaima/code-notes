app.controller('indexCtr',['$scope','$http',function($scope,$http){

    // 获取左侧菜单
    $http.get('./data/menu.json')
         .then(function(result){
            // 菜单json
            $scope.menus = result.data.menu;
         },function(error){
            // 错误信息
            console.log(error);
         });
}]);
