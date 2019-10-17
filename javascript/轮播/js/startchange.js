// 获取物体属性样式值
function GetStyle(obj, name) {
    if (obj.currentStyle)
        return obj.currentStyle[name];
    else
        return getComputedStyle(obj, false)[name];
}

// 改变物体样式
function StartChange(obj, name, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(Change, 30);

    function Change() {
        var status = GetStyle(obj, name);

        if (name == 'opacity')
            status = Math.round(parseFloat(status) * 100);
        else
            status = parseInt(status);

        var speed = (target - status) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if (status == target)
            clearInterval(obj.timer);
        else if (name != 'opacity')
            obj.style[name] = status + speed + 'px';
        else {
            obj.style.filter = 'alpha(opacity:' + (status + speed) + ')';
            obj.style.opacity = (status + speed) / 100;
        }
    }
}
