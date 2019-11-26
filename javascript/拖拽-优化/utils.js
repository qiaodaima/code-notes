// 按照区间生成随机数  生成的随机数 [min, max] 左闭右闭区间
const getRoundNumber = (min = 0, max = 1, number = 1) => {
    const tempMin = Math.ceil(min);
    const tempMax = Math.floor(max);
    const result = [];

    for (let i = 0; i < number; i++) {
        result.push(Math.floor(Math.random() * (tempMax - tempMin + 1)) + tempMin);
    }

    return number === 1 ? result[0] : result;
};

// 随机生成16进制颜色
const getRandomColor = () => {
    const enumMember = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    return `#${getRoundNumber(0, 15, 6).map(member => enumMember[member]).join('')}`;
}

// 获取元素相对文档流的坐标
const getElementOffsetTop = (element) => {
    const { top, left, width, height } = element.getBoundingClientRect();
    const { scrollTop, clientTop, scrollLeft, clientLeft } = document.documentElement;
    const { pageYOffset, pageXOffset } = window;

    return {
        top: top + (pageYOffset || scrollTop) - (clientTop || 0),
        left: left + (pageXOffset || scrollLeft) - (clientLeft || 0),
        width,
        height
    };
}

// 获取触点相对文档流坐标
const getTouchAxis = (event, index = 0) => {
    const { pageX, pageY } = event.touches[index];

    return { pageX, pageY };
}

// 判断两个物体存在包含关系
const isContain = (element1, element2) => {
    const a = getElementOffsetTop(element1);
    const b = getElementOffsetTop(element2);

    var o = {
        x: a.left,
        y: a.top,
        w: a.width,
        h: a.height
    }

    var d = {
        x: b.left,
        y: b.top,
        w: b.width,
        h: b.height
    }

    var px, py;

    px = o.x <= d.x ? d.x : o.x;
    py = o.y <= d.y ? d.y : o.y;

    // 判断点是否都在两个对象中
    if (px >= o.x && px <= o.x + o.w && py >= o.y && py <= o.y + o.h && px >= d.x && px <= d.x + d.w && py >= d.y && py <= d.y + d.h) {
        return true;
    } else {
        return false;
    }
}

// 获取元素
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
