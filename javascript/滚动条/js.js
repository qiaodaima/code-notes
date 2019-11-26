const $scrollTest = document.querySelector('#scrollTest');
const $button = $scrollTest.querySelectorAll('.tool-wrap button');
const $demoBox = $scrollTest.querySelector('.demo-box');
const click = ($dom, eventType = 'click', fn) => {
  $dom.addEventListener(eventType, fn);
};

// 滚动到头部
click($button[0], undefined, (event) => {
  $demoBox.scroll(0, 0);
});

// 滚动到尾部
click($button[1], undefined, (event) => {
  $demoBox.scrollTo({
    top: $demoBox.scrollHeight,
    left: $demoBox.scrollWidth,
    behavior: 'smooth'
  });
});

// 滚动到指定位置
click($button[2], undefined, (event) => {
  $demoBox.scroll({
    top: `${160 + Number.parseFloat(window.getComputedStyle($demoBox, null).paddingLeft)}`,
    left: `${620 + Number.parseFloat(window.getComputedStyle($demoBox, null).paddingLeft)}`,
    behavior: 'smooth'
  });
});

// 相对滚动
click($button[3], undefined, (event) => {
  $demoBox.scrollBy(35, 50);
});

// 获取滚动距离
click($button[4], undefined, (event) => {
  console.log($demoBox.scrollLeft);
  console.log($demoBox.scrollTop);
});
