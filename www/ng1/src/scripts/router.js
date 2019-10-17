app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state("ljPrism", {
        url: '/doc/ljPrism',
        views: {
            'frame-content-wrap':{
                templateUrl: './view/doc/ljPrism/ljPrismPage.html',
                controller: 'ljPrismCtr'
            }
        }
    })
    .state("ljTable", {
        url: '/doc/ljTable',
        views: {
            'frame-content-wrap':{
                templateUrl: './view/doc/ljTable/ljTablePage.html',
                controller: 'ljTableCtr'
            }
        }
    })
    .state("message", {
        url: '/message',
        views: {
            'frame-content-wrap':{
                templateUrl: './view/message/messagePage.html',
                controller: 'messageCtr'
            }
        }
    })
    .state("reset-pc", {
        url: '/reset-pc',
        views: {
            'frame-content-wrap':{
                templateUrl: './view/resetPc/resetPcPage.html',
                controller: 'resetPcCtr'
            }
        }
    })
    .state("reset-mobile", {
        url: '/reset-mobile',
        views: {
            'frame-content-wrap':{
                templateUrl: './view/resetMobile/resetMobilePage.html',
                controller: 'resetMobileCtr'
            }
        }
    })
    .state("gulp", {
        url: '/gulp',
        views: {
            'frame-content-wrap':{
                templateUrl: './view/gulp/gulpPage.html',
                controller: 'gulpCtr'
            }
        }
    })
    .state("flex", {
        url: '/flex',
        views: {
            'frame-content-wrap':{
                templateUrl: './view/flex/flexPage.html',
                controller: 'flexCtr'
            }
        }
    })
    .state("communic", {
        url: '/communic',
        views: {
            'frame-content-wrap':{
                templateUrl: './view/communic/communicPage.html',
                controller: 'communicCtr'
            }
        }
    })
    .state("jsCodeSegment", {
        url: '/jsCodeSegment',
        views: {
            'frame-content-wrap':{
                templateUrl: './view/jsCodeSegment/jsCodeSegmentPage.html',
                controller: 'jsCodeSegmentCtr'
            }
        }
    })
    .state("empty", {
        url: '/empty',
        views: {
            'frame-content-wrap':{
                templateUrl: './view/noData/noDataPage.html',
                controller: 'noDataCtr'
            }
        }
    });

    // 其他URL
    $urlRouterProvider.otherwise('/message');
}]);
