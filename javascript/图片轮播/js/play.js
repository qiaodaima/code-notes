var mIndex = 1;// 最高层级
var nowIndex = 0;// 当前层级
var bImgBox = document.getElementById('b_img');// 大图盒子
// 大图两侧区域
var leftSize = bImgBox.getElementsByTagName('div')[0];
var rightSize = bImgBox.getElementsByTagName('div')[1];
// 大图两侧按钮
var leftBtn = bImgBox.getElementsByTagName('a')[0];
var rightBtn = bImgBox.getElementsByTagName('a')[1];
var bigImg = bImgBox.getElementsByTagName('img');// 大图图片
var smallImg = document.getElementById('s_img');// 小图盒子
var viewImg = smallImg.getElementsByTagName('img');// 小视图
// 两侧按钮显示和隐藏
leftBtn.onmouseover = leftSize.onmouseover = function()
{
	StartChange(leftBtn,'opacity',100);
}
rightBtn.onmouseover = rightSize.onmouseover = function()
{
	StartChange(rightBtn,'opacity',100);
}
leftSize.onmouseout = function()
{
	StartChange(leftBtn,'opacity',0);
}
rightSize.onmouseout = function()
{
	StartChange(rightBtn,'opacity',0);
}
// 大图切换
leftBtn.onclick = function()
{
	righ_left_btn('left');
}
rightBtn.onclick = function()
{
	righ_left_btn('right');
}
// 两侧按钮换图公共代码合并
function righ_left_btn(direction)
{
	StartChange(viewImg[nowIndex],'opacity',30);
	if( direction == 'left')
	{
		if( --nowIndex == -1 )
			nowIndex = bigImg.length - 1;
	}
	else
	{
		if( ++nowIndex == bigImg.length )
			nowIndex = 0;
	}
	StartChange(viewImg[nowIndex],'opacity',100);
	Show();
}
// 大图下拉效果
function Show()
{
	bigImg[nowIndex].style.zIndex = ++mIndex;
	bigImg[nowIndex].style.height = 0 + 'px';
	StartChange(bigImg[nowIndex],'height',480);
	MoveView();
}
// 视图滚动
function MoveView()
{
	if( !(nowIndex == viewImg.length-1) )
		StartChange(smallImg,'left',-(nowIndex-1)*viewImg[0].offsetWidth);
	if( nowIndex == 0 )
		StartChange(smallImg,'left',0);
}
// 小视图鼠标移入、移出、点击事件
for(var i=0; i < viewImg.length; i++)
{
	viewImg[i].index = i;
	viewImg[i].onclick = function()
	{
		if( nowIndex != this.index)
		{
			StartChange(viewImg[nowIndex],'opacity',30);
			nowIndex = this.index;
			Show();
		}
	}
	viewImg[i].onmouseover = function()
	{
		StartChange(this,'opacity',100);
	}
	viewImg[i].onmouseout = function()
	{
		if( nowIndex != this.index)
			StartChange(this,'opacity',30);
	}
}
// 初始化
function Init()
{	
	bigImg[nowIndex].style.zIndex = ++mIndex;
	viewImg[nowIndex].style.opacity = 1;
}
Init();
// 加载后自动图片轮播
bImgBox.parentNode.onmouseover = function()
{
	clearInterval(timer);
}
bImgBox.parentNode.onmouseout = function()
{
	timer = setInterval(rightBtn.onclick,1500);
}
var timer = setInterval(rightBtn.onclick,1500);