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

// 函数节流
const throttle = (fn, fps = 100) => {
    let disabled = false;

    return (...args) => {
        if (!disabled) {
            disabled = true;
            fn(...args);

            setTimeout(() => {
                disabled = false;
            }, fps);
        }
    };
};

// 判断图片是否在可视区域内
const isInVisibleArea = (element) => {
    const clientHeight = document.documentElement.clientHeight;
    const offsetTop = element.getBoundingClientRect().top;

    return offsetTop <= clientHeight;
};

// 加载图片
const loadImg = (element) => {
    const src = element.dataset.src;
    element.src = src;
};

// 懒加载图片
const lazyLoadImgs = (imgs) => {
    Array.from(imgs).map(img => {
        if (isInVisibleArea(img)) {
            loadImg(img);
        }
    });
};

// 开始初始化数据
const initTest = () => {
    let imgNumber = 150; // 图片的张数

    while (imgNumber--) {
        const img = document.createElement('img');
        const index = getRoundNumber(1, 10);

        img.src = './images/default.png'; // 缺省图片
        img.dataset.src = `./images/${index}.jpg`; // 图片的真实地址
        document.body.append(img);
    }
};


initTest();
const imgs = document.querySelectorAll('img');

window.onload = () => {
    lazyLoadImgs(imgs);
};

// 监听滚动事件
window.onscroll = throttle(() => {
    lazyLoadImgs(imgs);
}, 100);
