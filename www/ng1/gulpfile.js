/**
* npm 安装命令 npm install name --save-dev
* gulp-concat               合并文件
* browser-sync              自动刷新，静态服务
* gulp-load-plugins         自动加载gulp插件
* gulp-autoprefixer         设置浏览器版本自动处理浏览器前缀
* gulp-uglify               压缩js文件
* gulp-csso                 压缩优化css
* gulp-sass                 编译sass
* gulp-sourcemaps           生层map文件
* gulp-clean                删除文件
* gulp-sequence             让任务顺序执行【这个插件没有使用】
* gulp-htmlmin              压缩页面的html
* gulp-jshint               校验js语法     依赖 jshint
* Email:674059309@qq.com
* www.qiaodaima.me
*/



/**
* 以【gulp】开头的组件 在安装后已经自动加载，无须再引入，
* 当使用【gulp-rename】和【gulp-ruby-sass】这两个插件的时候，
* 就可以使用【$.rename】和【$.rubySass】来代替了,
* 也就是原始插件名【去掉gulp-前缀】，改成【$.】，之后再转换为驼峰命名。
*/
var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();



/**
* 【源码目录、产出目录】中各个文件夹的路径信息
*/
var config = {
    src:{
        path           : './src/',
        dataPath       : './src/data/',
        directivesPath : './src/directives/',
        imagesPath     : './src/images/',
        sassPath       : './src/sass/',
        scriptsPath    : './src/scripts/',
        viewPath       : './src/view/',
        widgetPath     : './src/widget/',
        index          : './src/index.html',
        scriptSrc      : [
            './src/widget/jquery-1.8.3/jquery.js',
            './src/widget/nicescroll-3.6.8/jquery.nicescroll.js',
            './src/widget/angular-1.6.4/angular.js',
            './src/widget/angular-ui-router/angular-ui-router.js'
        ]
    },
    dist:{
        path           : './dist/',
        dataPath       : './dist/data/',
        directivesPath : './dist/directives/',
        imagesPath     : './dist/images/',
        cssPath        : './dist/css/',
        scriptsPath    : './dist/scripts/',
        viewPath       : './dist/view/',
        widgetPath     : './dist/widget/',
        index          : './dist/index.html'
    }
};



/*
* 使用gulp-htmlmin压缩html，可以压缩页面javascript、css，
* 去除页面空格、注释，删除多余属性等操作
*/
var htmlMinOptions = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
};



/**
* 拷贝移动端和PC端重置样式表到【data】目录
* 对其进行监听文件变化
*/
gulp.task('copyReset', [], function(){
    return gulp.src(['./src/sass/resetPc.scss', './src/sass/resetMobile.scss'])
               .pipe(gulp.dest('./src/data/'));
});
gulp.watch(['./src/sass/resetPc.scss', './src/sass/resetMobile.scss'], ['copyReset']);



/**
* 对【data】目录的一些操作
* 1.监听其文件变化
* 2.对其进行清空
* 3.产出到相关目录 并且刷新浏览器
*/
gulp.task('copyDataDir', ['cleanDataDir'], function(){
    return gulp.src([config.src.dataPath +  '**/*'])
               .pipe(gulp.dest(config.dist.dataPath))
               .pipe(browserSync.reload({stream:true}));
});
gulp.task('cleanDataDir', function(){
    return gulp.src(config.dist.dataPath)
               .pipe($.clean());
});
gulp.watch([config.src.dataPath +  '**/*'], ['copyDataDir']);


/**
* 对【directives】目录的一些操作
* 1.监听其html文件变化
* 2.对其html文件进行清空
* 3.产出到相关目录 并且刷新浏览器
* 指令脚本文件不拷贝，指令脚本单独和其他脚本合并
*/
gulp.task('copyDirectivesDir', ['cleanDirectivesDir'], function(){
    return gulp.src(config.src.directivesPath + '**/*.html')
               .pipe($.htmlmin(htmlMinOptions))
               .pipe(gulp.dest(config.dist.directivesPath))
               .pipe(browserSync.reload({stream:true}));
});
gulp.task('cleanDirectivesDir', function(){
    return gulp.src(config.dist.directivesPath + '**/*.html')
               .pipe($.clean());
});
gulp.watch([config.src.directivesPath + '**/*.html'], ['copyDirectivesDir']);



/**
* 对【images】目录的一些操作
* 1.监听其文件变化
* 2.对其文件进行清空
* 3.产出到相关目录 并且刷新浏览器
*/
gulp.task('copyImagesDir', ['cleanImagesDir'], function(){
    return gulp.src(config.src.imagesPath + '**/*')
               .pipe(gulp.dest(config.dist.imagesPath))
               .pipe(browserSync.reload({stream:true}));
});
gulp.task('cleanImagesDir', function(){
    return gulp.src(config.dist.imagesPath)
               .pipe($.clean());
});
gulp.watch([config.src.imagesPath + '**/*'], ['copyImagesDir']);



/**
* 对【sass】目录的一些操作
* 1.监听其sass文件变化
* 2.对其css文件进行清空
* 3.产出到相关目录 并且刷新浏览器
* 编译sass、添加浏览器前缀、生成map文件
* http://browserl.ist   可以在这个页面输入查询参数
*/
gulp.task('sass', ['cleanCssFile'], function(){
    return gulp.src(config.src.sassPath + '**/*.scss')
               .pipe($.sourcemaps.init())
               .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
               .pipe($.autoprefixer({
                    browsers: ['last 4 Explorer versions', 'Chrome >= 0', 'Firefox >= 0', 'Opera >= 0'],
                    cascade: true,
                    remove: true
               }))
               .pipe($.csso())
               .pipe($.sourcemaps.write('./'))
               .pipe(gulp.dest(config.dist.cssPath))
               .pipe(browserSync.reload({stream:true}));
});
gulp.task('cleanCssFile', function(){
    return gulp.src(config.dist.cssPath)
               .pipe($.clean());
});
gulp.watch(config.src.sassPath + '**/*.scss', ['sass']);



/**
* 对【directives、scripts、view】目录的一些操作
* 1.监听其js文件变化
* 2.对其js文件进行清空
* 3.产出到相关目录 并且刷新浏览器
* 检查js语法、合并js、压缩js、生成map文件
*/
gulp.task('concatJs', ['cleanJsFile'], function(){
    return gulp.src([config.src.scriptsPath + '**/*.js', config.src.directivesPath + '**/*.js', config.src.viewPath + '**/*.js'])
               .pipe($.sourcemaps.init())
               .pipe($.jshint.reporter('default'))
               .pipe($.concat('appCode.js'))
               .pipe($.uglify({
                    mangle: false, // 是否修改变量名，默认为 true
                    compress: true // 是否完全压缩，默认为 true
               }))
               .pipe($.sourcemaps.write('./'))
               .pipe(gulp.dest(config.dist.scriptsPath))
               .pipe(browserSync.reload({stream:true}));
});
gulp.task('cleanJsFile', function(){
    return gulp.src(config.dist.scriptsPath + 'appCode.js')
               .pipe($.clean());
});
gulp.watch([config.src.directivesPath + '**/*.js', config.src.scriptsPath + '**/*.js', config.src.viewPath + '**/*.js'], ['concatJs']);



/**
* 对【view】目录的一些操作
* 1.监听其html文件变化
* 2.对其html文件进行清空
* 3.产出到相关目录 并且刷新浏览器
* 拷贝视图目录,控制器脚本文件不拷贝，控制器脚本单独和其他脚本合并
*/
gulp.task('copyViewDir', ['cleanViewDir'], function(){
    return gulp.src([config.src.viewPath + '**/*.html', '!' + config.src.viewPath + '**/template/**'])
               .pipe($.htmlmin(htmlMinOptions))
               .pipe(gulp.dest(config.dist.viewPath))
               .pipe(browserSync.reload({stream:true}));
});
gulp.task('cleanViewDir', function(){
    return gulp.src(config.dist.viewPath + '**/*.html')
               .pipe($.clean());
});
gulp.watch([config.src.viewPath + '**/*.html'], ['copyViewDir']);



/**
* 对【widget】目录的一些操作
* 1.合并所有的js
* 2.产出到相关目录
* 3.拷贝整个目录
*/
gulp.task('concatBaseJs', ['cleanBaseJs'], function(){
    return gulp.src(config.src.scriptSrc)
               .pipe($.sourcemaps.init())
               .pipe($.concat('base.js'))
               .pipe($.uglify({
                    mangle: true, // 是否修改变量名，默认为 true
                    compress: true // 是否完全压缩，默认为 true
               }))
               .pipe($.sourcemaps.write('./'))
               .pipe(gulp.dest(config.dist.scriptsPath))
               .pipe(browserSync.reload({stream:true}));
});
gulp.task('cleanBaseJs', function(){
    return gulp.src(config.dist.scriptsPath + 'base.js')
               .pipe($.clean());
});
gulp.watch(config.src.scriptSrc, ['concatBaseJs']);
gulp.task('copyWidgetDir',function(){
    return gulp.src(config.src.widgetPath + '**/*')
               .pipe(gulp.dest(config.dist.widgetPath));
});



/**
* 对【index.html】的一些操作
* 1.监听其文件变化
* 2.对其进行清空
* 3.产出到相关目录 并且刷新浏览器
*/
gulp.task('copyIndexFile', ['cleanIndexFile'], function(){
    return gulp.src(config.src.index)
               .pipe($.htmlmin(htmlMinOptions))
               .pipe(gulp.dest(config.dist.path))
               .pipe(browserSync.reload({stream:true}));
});
gulp.task('cleanIndexFile', function(){
    return gulp.src(config.dist.index)
               .pipe($.clean());
});
gulp.watch([config.src.index], ['copyIndexFile']);



/**
* 清空产出目录
*/
gulp.task('clean', function(){
    return gulp.src(config.dist.path)
               .pipe($.clean());
});



/**
* 静态服务器
* 源码目录内文件发生改变刷新浏览器
*
*/
gulp.task('serve', function() {
    return browserSync.init({
        server: {
            baseDir: config.dist.path
        }
    });
});
// gulp.watch([config.src.path + '**/*']).on('change', browserSync.reload);



/**
* 默认任务
* 1.清空产出目录
* 2.产出相关目录 这个是异步的，互不干扰
* 3.启动静态服务器
*/
gulp.task('ready', ['copyDataDir', 'copyDirectivesDir', 'copyImagesDir', 'sass', 'concatJs', 'copyViewDir', 'copyWidgetDir', 'concatBaseJs', 'copyIndexFile'], function(){
    return browserSync.init({
        server: {
            baseDir: config.dist.path
        }
    });
});
gulp.task('default', ['clean'], function(){
    gulp.start('ready');
});
