function getMouseAxis(event) {
  return {
    x: event.clientX,
    y: event.clientY
  };
}

function createElement(tag) {
  return document.createElement(tag ? tag : 'div');
}

function delSelfElement(element) {
  element.parentNode.removeChild(element);
}

function setElementAttribute(element, value) {
  Object.keys(value).forEach(function (key) {
    switch (typeof value[key]) {
      case 'object':
        setElementAttribute(element[key], value[key]);
        break;
      default:
        element[key] = value[key];
        break;
    }
  });
}

// function animate(element, styles, speed, callback) {
//   var elementCurrstyle = {};
//   var timer = null;
//   var count = parseInt(speed / 16.7);
//   var countTemp = count;
//   var step = {};

//   // 计算出每个样式的增量
//   Object.keys(styles).forEach(function (key) {
//     step[key] = (parseInt(styles[key]) - parseInt(getComputedStyle(element, null)[key])) / countTemp;
//   });

//   console.log(step);

//   timer = setInterval(function () {
//     if(count-- <= 0) {
//       callback && callback();
//       clearInterval(timer);
//     }

//     // 获取元素当前样式
//     Object.keys(styles).forEach(function (key) {
//       elementCurrstyle[key] = getComputedStyle(element, null)[key];
//     });

//     // 改变元素样式
//     Object.keys(styles).forEach(function (key) {
//       element.style[key] = parseInt(elementCurrstyle[key]) + step[key] + 'px';
//     });
//   }, 16.7);
// }

// function getRandomNumber(min, max) {
//   var temp = Math.random() * (max - min - 1) + max;

//   return Math.floor(temp);
// }