const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;
const $body = $('body');
const $box = $('#btnMove');
let flagTop = 0;
let flagLeft = 0;

const createFallNode = () => {
    const $fall = $('template').content.querySelector('.fall').cloneNode(true);
    const step = 5;

    $body.append($fall);
    $fall.addEventListener('touchmove', () => {
        event.preventDefault();
    });

    const maxLeft = clientWidth - $fall.getBoundingClientRect().width;

    $fall.style.left = `${getRoundNumber(0, maxLeft)}px`;
    $fall.style.top = `-${getRoundNumber(0, 500)}px`;
    $fall.style.backgroundColor = getRandomColor();

    const intervalId = setInterval(() => {
        const top = parseFloat(getComputedStyle($fall, null)['top']) + step;

        if ((clientHeight <= top) || isContain($fall, $box)) {
            $fall.remove();
            clearInterval(intervalId);
        }

        $fall.style.top = `${top}px`;
    }, 16.7);
};

$box.addEventListener('touchstart', (event) => {
    event.preventDefault();

    const { pageY, pageX } = getTouchAxis(event, 0);
    const { top, left } = getElementOffsetTop($box);

    flagTop = pageY - top;
    flagLeft = pageX - left;
});

$box.addEventListener('touchmove', (event) => {
    const { pageX, pageY } = getTouchAxis(event, 0);

    event.preventDefault();

    $box.style.top = `${pageY - flagTop}px`;
    $box.style.left = `${pageX - flagLeft}px`;
    $box.style.backgroundColor = getRandomColor();

    // 不允许超出可视区域
    if ($box.getBoundingClientRect().top <= 0) {
        $box.style.top = 0;
    }
    if ($box.getBoundingClientRect().left <= 0) {
        $box.style.left = 0;
    }
    if ($box.getBoundingClientRect().bottom >= clientHeight) {
        $box.style.top = `${clientHeight - $box.getBoundingClientRect().height}px`;
    }
    if ($box.getBoundingClientRect().right >= clientWidth) {
        $box.style.left = `${clientWidth - $box.getBoundingClientRect().width}px`;
    }
});

setInterval(() => {
    createFallNode();
}, 400);
