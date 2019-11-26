一、何如运行本项目（需要安装nodejs和gulp）：
    1.在项目根目录执行 【npm install】,仅第一次需要，以后再次运行不需要执行该命令
    2.在项目根目录执行 【gulp default】



二、目录结构说明：
    1. 【src】项目源码目录，构建后会在当前目录产生【dist】目录;
    2. 【data】数据源目录，用于存放json等一些文件;
    3. 【directives】自定义指令目录，指令采用【Dir】命名结尾，视图采用【View】命名结尾;
    4. 【images】图片目录;
    5. 【sass】sass文件目录;
    6. 【scripts】用于存放一些零散的脚本;
    7. 【view】视图目录，控制器采用【Ctr】命名结尾，视图采用【Page】命名结尾，
    8. 【widget】存放第三方组件，或者是自己封装的组件;
    9. 【index.html】首页;
    10.【view】文件夹内的【template】文件夹 用于存放一些纯静态页模板, 方便调试布局;
    11.【gulpfile.js】gulp自动化构建配置;
    12.【package.json】一些依赖说明，执行【npm install】安装依赖会读取该文件;



三、构建说明
    1.【sass】目录经过编译后生成【css】目录
    2.【directives】、【view】、【scripts】里面的js文件全部合并成一个文件并存放在【scripts】目录内
    3.【directives】、【view】、【index.html】内的html文件会被压缩成一行
    4.【data】、【images】、【widget】原封不动
    5.【widget】里面用到的脚本会被合并成【base.js】，然后存放于【scripts】目录，没用到的就不会被合并;

