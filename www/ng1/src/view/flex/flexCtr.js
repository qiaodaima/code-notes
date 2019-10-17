app.controller('flexCtr', ['$scope', function($scope){
    // 属性说明
    $scope.attrs = {
        'display': {
            explain: 'Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性',
            headers: ['值','描述'],
            rows: [
                ['flex', '假装有文字'],
                ['inline-flex', '假装有文字']
            ]
        },
        'flex-direction': {
            explain: '决定主轴的方向（即项目的排列方向）',
            headers: ['值','描述'],
            rows: [
                ['row', '默认值，主轴为水平方向，起点在左端'],
                ['row-reverse', '主轴为水平方向，起点在右端'],
                ['column', '主轴为垂直方向，起点在上沿'],
                ['column-reverse', '主轴为垂直方向，起点在下沿']
            ]
        },
        'flex-wrap': {
            explain: '默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行',
            headers: ['值','描述'],
            rows: [
                ['nowrap', '默认不换行'],
                ['wrap', '换行，第一行在上方'],
                ['wrap-reverse', '换行，第一行在下方']
            ]
        },
        'flex-flow': {
            explain: 'flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap',
            headers: ['值','描述'],
            rows: [
                ['<flex-direction> || <flex-wrap>', '假装有文字']
            ]
        },
        'justify-content': {
            explain: 'justify-content属性定义了项目在主轴上的对齐方式',
            headers: ['值','描述'],
            rows: [
                ['flex-start', '默认值,左对齐'],
                ['flex-end', '右对齐'],
                ['center', '居中'],
                ['space-between', '两端对齐，项目之间的间隔都相等'],
                ['space-around', '每个项目两侧的间隔相等']
            ]
        },
        'align-items': {
            explain: 'align-items属性定义项目在交叉轴上如何对齐',
            headers: ['值','描述'],
            rows: [
                ['flex-start', '交叉轴的起点对齐'],
                ['flex-end', '交叉轴的终点对齐'],
                ['center', '交叉轴的中点对齐'],
                ['baseline', '项目的第一行文字的基线对齐'],
                ['stretch', '默认值，如果项目未设置高度或设为auto，将占满整个容器的高度']
            ]
        },
        'align-content': {
            explain: 'align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用',
            headers: ['值','描述'],
            rows: [
                ['flex-start', '与交叉轴的起点对齐'],
                ['flex-end', '与交叉轴的终点对齐'],
                ['center', '与交叉轴的中点对齐'],
                ['space-between', '与交叉轴两端对齐，轴线之间的间隔平均分布'],
                ['space-around', '每根轴线两侧的间隔都相等'],
                ['stretch', '默认值，轴线占满整个交叉轴']
            ]
        },
        'order': {
            explain: 'order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0',
            headers: ['值','描述'],
            rows: [
                ['<integer>', 'default 0']
            ]
        },
        'flex-grow': {
            explain: 'flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大',
            headers: ['值','描述'],
            rows: [
                ['<number>', 'default 0']
            ]
        },
        'flex-shrink': {
            explain: 'flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小',
            headers: ['值','描述'],
            rows: [
                ['<number>', 'default 1']
            ]
        },
        'flex-basis': {
            explain: 'flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间',
            headers: ['值','描述'],
            rows: [
                ['<length>', '假装有文字'],
                ['auto', 'default auto']
            ]
        },
        'flex': {
            explain: 'flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选',
            headers: ['值','描述'],
            rows: [
                ['none', '假装有文字'],
                ['88888', '假装有文字'],
            ]
        },
        'align-self': {
            explain: 'align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，如果没有父元素，则等同于stretch',
            headers: ['值','描述'],
            rows: [
                ['88888', '假装有文字']
            ]
        }
    };
}]);
