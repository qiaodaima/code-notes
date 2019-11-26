let $body = document.getElementsByTagName('body')[0];

document.addEventListener('mousedown', function (even) {
  let $controlTemplate = document.getElementById('controlTemplate').content;

  document.getElementsByTagName('body')[0].appendChild($controlTemplate);

  function mousemove() {
    console.log('11');
  }
  function mouseupFn() {
    document.removeEventListener('mousemove', mousemove);
    document.removeEventListener('mouseup', mouseupFn);
  }
  document.addEventListener('mousemove', mousemove);
  document.addEventListener('mouseup', mouseupFn);
});

// 鼠标按下时，鼠标坐标 和 被 移动元素位置的差量
//


// function step1(even) {
//   console.log('00');
// }

// function step2(even) {
  // document.removeEventListener('mousemove', step1);
  // document.removeEventListener('mouseup', step2);
// }


// let $demo = document.getElementById('demo');
// let step1 = function (even) {
//   // let mouseAxis = getMouseAxis(even);
//   // let x = mouseAxis.x - element.offsetLeft;
//   // let y = mouseAxis.y - element.offsetTop;
// };
// let step2 = function (even) {
//   console.log('00');
// };
// let step3 = function (even) {
//   // document.removeEventListener('mousemove', mousemoveFn);
//   // document.removeEventListener('mouseup', mouseupFn);
// };

// dragAndDrop($demo, step1, step2, step3);