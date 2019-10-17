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

// function dragAndDrop(element, mousedownFn, mousemoveFn, mouseupFn) {
//   element.addEventListener('mousedown', function (even) {
//     // 鼠标按下时
//     mousedownFn(even);

//     // 鼠标移动时
//     document.addEventListener('mousemove', mousemoveFn(even));

//     // 鼠标松开时
//     document.addEventListener('mouseup', mouseupFn(even));
//   });
// }
