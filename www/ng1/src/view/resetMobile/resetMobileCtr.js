app.controller('resetMobileCtr', ['$scope', '$http', function($scope,$http){
    // 获取移动端重置样式表文件
    $http.get('data/resetMobile.scss')
         .then(function(result){
             $scope.model.code.source = result.data;
         }, function(error){
             console.log(error);
         });

    // 数据源
    $scope.model = {
        code: {
            // source:"",
            language:"language-css"
        }
    };
}]);
