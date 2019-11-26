app.controller('ljTableCtr', ['$scope', function($scope){
    // 属性说明
    $scope.attrs = {
        theme : 'p-tab-config',
        headers: ['参数','参数类型','传递方式','参数说明'],
        rows: [
            ['theme',  'string', '@', '表格主题,即显示哪种样式风格'],
            ['headers','string', '=', '表格表头'],
            ['rows',   'string', '=', '表格主体']
        ]
    };

    // 展示案例
    $scope.model = {
        theme : 'p-tab-config',
        headers: ['姓名','性别','电话号码','居住地址'],
        rows: [
            ['刘亦菲',  '女', '123456789', '北京市朝阳区'],
            ['刘诗诗','女', '5465454', '江西省南昌市'],
            ['许嵩',   '男', '515156', '福建省厦门市']
        ]
    };
}]);
