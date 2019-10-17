/**
 * canvas 学习笔记
 *
 * canvas是什么？
 * 1.canvas主要是负责在某个区域中进行绘制图形
 *
 * 准备步骤有哪些？
 * 1. html文件上使用 <canvas id="drawing" width="1000px" height="500"></canvas> 来声明使用 canvas，
 * 2. 可以通过css 为 canvas标签添加样式，但是用css控制canvas标签的 width、height图形会比较异常
 * 3. 因此推测 必须在标签上声明 width、height来示意画布大小，这一点需要查证
 *
 * canvas中的一些基础概念有哪些？
 * 1. 画图需要一块画布， 专业术语叫【绘图上下文】，可通过 let context = document.getElementById('drawing').getContext('2d') 来获得
 * 2. 目前所述均为 2d模式绘图，出此之外还有 3d绘图模式，
 * 3. 必要时，应该检测浏览器是否支持canvas，可通过判断 .getContext()方法是否存在来判断
 * 4. 2d模式下的绘图操作有两种 【填充】和【描边】，
 * 5. 按照css中的理解，填充就相当于设置background，而描边相当于设置border，他们的默认值均为 #000，属性值可以是 字符串（css中的颜色格式）、渐变对象 或模式对象
 * 6. 填充对应的属性操作示例：context.fillStyle = 'rgba(0, 0, 255, 0.8)';
 * 7. 描边对应的属性操作示例：context.strokeStyle = 'red';
 * 8. 所有的填充和描边操作都讲使用这个两个样式，直至重新设置这两个值
 *
 * 绘制矩形中的相关操作
 * 1. fillRect()   方法绘制的矩形会用指定颜色填充
 * 2. strokeRect() 方法绘制的矩形会用指定颜色描边（即没有背景色，只有边框色）
 * 3. clearRect() 方法用于清除画布上的矩形区域，然后成为透明的
 * 4. 以上三个函数均接收4个参数，分别为 x坐标、y坐标、矩形的宽度、矩形的高度
 * 5. lineWidth控制线条的宽度, lineCap控制线条的末端形状，lineJoin控制线条相交的方式
 *
 * 绘制路径中的相关操作
 * 1.
 */

let drawing = document.getElementById('drawing');
let context = drawing.getContext('2d');


// 绘制矩形（填充）
context.fillStyle = '#f90';
context.fillRect(10, 10, 200, 100);

// 绘制矩形（描边）
context.strokeStyle = '#a30';
context.strokeRect(50, 60, 200, 100);

// 绘制圆圈
context.beginPath();
context.lineWidth = 5;
context.arc(200, 300, 150, Math.PI * 0.5, Math.PI * 2, false);
context.lineTo(200, 300);

// context.arcTo(150, 20, 50, 70, 20);
context.stroke();
