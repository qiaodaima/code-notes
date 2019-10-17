app.controller('ljPrismCtr', ['$scope', function($scope){
    // 属性说明
    $scope.attrs = {
        theme : 'p-tab-config',
        headers: ['参数','参数类型','传递方式','参数说明'],
        rows: [
            ['language',  'string', '@', '代码语言类型，形如 "language-js" '],
            ['source','string', '@', '源码，即需要高亮的代码']
        ]
    };

    // 展示案例
    $scope.model = {
        language: 'language-css',
        source: '.p-ico-arrow.next{background-position:0 -198px;}',
    };
}]);
