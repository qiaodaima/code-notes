let $lazyImgNodes = []; // 所有需要懒加载元素dom集合

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
    const offsetBottom = element.getBoundingClientRect().bottom;
    const isVisable = getComputedStyle(element).display !== 'none';

    return (offsetBottom > 0) && (offsetTop < clientHeight) && isVisable;
};

// 加载图片
const loadImg = (element) => {
    const $img = document.createElement('img');
    const src = element.dataset.src;

    $img.addEventListener('load', () => {
        (element.classList.contains('load') === false) && (element.className += ' load');
    });

    setTimeout(() => {
        (element.classList.contains('load') === false) && (element.className += ' load');
    }, 5000);

    $img.src = src;
    element.style.backgroundImage = `url("${src}")`;
};

// 懒加载图片
const lazyLoadImgs = () => {
    const length = $lazyImgNodes.length;

    for (let index = 0; index < length; index++) {
        const $lazyImgNode = $lazyImgNodes[index];

        !$lazyImgNode.classList.contains('load') && isInVisibleArea($lazyImgNode) && loadImg($lazyImgNode);
    }
};

// 模拟假数据
const createTestNode = (callback) => {
    let imgNumber = 150; // 图片的张数

    while (imgNumber--) {
        const index = getRoundNumber(1, 10);
        const $div = document.createElement('div');

        $div.className = 'lazyImg';
        $div.dataset.src = `./images/${index}.jpg`; // 图片的真实地址
        document.body.append($div);
    }

    if (typeof callback === 'function') {
        callback();
    }
};

createTestNode(() => {
    $lazyImgNodes = Array.from(document.querySelectorAll('.lazyImg'));
});

window.onload = () => {
    lazyLoadImgs();
};

window.onscroll = throttle(() => {
    lazyLoadImgs();
}, 100);
