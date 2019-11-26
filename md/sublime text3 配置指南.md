# Sublime Text 3 配置指南
----

## 安装Package Control

 1. 我们使用 `Package Control` 来安装插件，因此首先要安装 `Package Control` 本身
 2. 可以通过 `View`  > `Show Console` 打开sublime的控制台，然后将相应的代码粘贴到控制台中即可
 3. 相应的代码 [请戳这里][1] 寻找，安装完成后重新打开sublime即可
 4. 安装完成后可能会报错，请无视这个错误

## Package Control的使用

 1. windows用户可以通过快捷键 `Ctrl` + `Shift` + `P` 打开 `Package Control`
 2. mac用户可以通过快捷键 `command` + `Shift` + `P` ，或者通过菜单 `Sublime Text` > `Preferences` > `Package Control` 打开 `Package Control`
 3. 在 `Package Control` 命令面板中输入 `install Package` 或者简写成 `ip`，按下回车键后（如果报错，重启Sublime Text 3 多试几次即可）在列表中输入插件名称即可**安装**相应的插件
 4. 在 `Package Control` 命令面板中输入 `remove Package` 或者简写成 `rep`，按下回车键后在列表中输入插件名称即可**删除**相应的插件
 5. 安装插件时，Sublime Text 3的左下角会有状态提示

## 常用插件

 - **AutoFileName**，自动提示文件路径
 - **Color Highlighter**，显示在CSS文件中说使用的颜色的色值
 - **css3**，对css3属性进行高亮和自动补全
 - **HTML5**，对html5属性进行智能提示,输入 `html5` 按下 `Tab` 键，可以快速生成网页模板
 - **DocBlockr**，对js文件添加注释
 - **BracketHighlighter**，括号高亮匹配
 - **SublimeServer**，让Sublime Text成为静态WEB服务器
 - **JsFormat**，自动格式化 JavaScript 和 JSON，默认快捷键 `Ctrl` + `Alt` + `F`
 - **a file icon**，修改侧边栏文件图标
 - **SublimeCodeIntel**，代码智能自动补全
 - **FileHeader**，可以定制各种文件模板和文件头部信息，保存时可以自动更新文件的修改时间

## Sublime Text 3调试JS

 1. 安装 nodejs
 2. 为Sublime Text 3添加此Build System，可通过菜单 `Tools` > `Build System` > `New Build System` 
 3. 添加如下代码后，便可使用快捷键 `ctrl` + `b` 开始调试
```json
{
    "cmd": ["node", "--use-strict", "--harmony", "$file"],
    "selector": "source.js"
}
```

## JS错误检查

 1. 安装 nodejs
 2. `npm install -g jshint`，
 3. Sublime Text 3安装 `JSHint Gutter` 
 4. 在项目根目录新建一个文件`.jshintrc`
 
### 配置JSHint Gutter 
通过 `Sublime Text` > `Preferences` > `Package Settings` > `JSHint Gutter` > `Set Plugin Options`
```json
{
  "lint_on_save": true, // 把这个改成 true，其他配置不变
}

```
### 配置JS校验规则
`.jshintrc` 文件内容如下，详细配置 [请戳这里][2]
```JSON
{
  "curly": true, // 所有的代码块必须使用大括号
  "eqeqeq": true, // 判断相等时，必须使用 ===
  "immed": true, // 立即执行函数必须用括号包起来 "(function () { } ());"
  "noarg": true, // 禁止使用 "arguments.caller" 和 "arguments.callee"
  "noempty": true, // 禁止出现空的代码块 "{ }"
  "quotmark": "single", // single:必须都是单引号，double:必须都是双引号
  "undef": true, // 所有的局部变量都必须先声明再使用
  "unused": true, // 禁止变量已经声明，但却不使用
  "node": false // 表明你的项目是NodeJS项目，require等node特有的全局函数将通过检查
}
```
 
## 主题推荐
 - 使用 `theme - kronuz` 作为主题
 - 使用 `theme - brogrammer` 作为颜色主题


## 我的基本配置
```json
{
    // windows 用户
    "color_scheme": "Packages/User/SublimeLinter/brogrammer (SL).tmTheme",
    
    // mac 用户
	"color_scheme": "Packages/Theme - Brogrammer/brogrammer.tmTheme",
	
    "draw_white_space": "all",
    "font_face": "Monaco",
    "font_size": 16,
    "ha_style": "filled",
    "highlight_line": true,
    "hot_exit": true,
    "ignored_packages":
    [
        "BracketHighlighter",
        "Vintage"
    ],
    "margin": 0,
    "save_on_focus_lost": true,
    "scroll_past_end": true,
    "show_encoding": true,
    "show_full_path": true,
    "tab_size": 4,
    "theme": "Theme - Kronuz.sublime-theme",
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "word_wrap": false
}
```


  [1]: https://packagecontrol.io/installation#st3
  [2]: http://jshint.com/docs/options/