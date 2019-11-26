app.controller('resetPcCtr', ['$scope', '$http', function($scope, $http){
    // 获取PC端重置样式表文件
    $http.get('data/resetPc.scss')
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
