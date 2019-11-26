

const t = function * testFn() {
  // setTimeout(() => {
  //   console.log(1);
  // }, 3000);
  yield 'hello';

  // setTimeout(() => {
  //   console.log(2);
  // }, 3000);

  yield 'ending';
  // return 'ending';
}

console.log(t().next());
console.log(t().next());
