import { observable, computed, autorun, when, reaction } from "mobx";



// 测试1
// const colorArr = observable([
//     'yellow',
//     'blue',
//     'pink'
// ]);
// console.log(colorArr, '--', Array.isArray(colorArr)); // 在 mobx4 Array.isArray(colorArr) 是false ，需要使用 isArrayLike 来判断是否是数组
// console.log(colorArr[4]); // 不可以越界访问
// console.log(colorArr[1], colorArr.push('black'));



// 测试2
// const people = observable({
//     name: '张三',
//     address: '文三路中电大楼'
// });
// // extendObservable() 往对象上添加新的属性， 但是最好是一开始就把所有的属性都声明好
// console.log(people, people.address, '===');



// 测试3
// const map = observable(new Map());
// map.set('sign', '帅的惊天动地');
// console.log(map, map.get('sign'), map.has('sign'), '+++===+++');



// 测试4
// const age = observable.box(18);
// const school = observable.box('杭州师范大学');
// const isYoung = observable.box(true);
// console.log(age, school, isYoung, '~~');
// console.log(age.get(), school.get(), isYoung.get(), '~++~');
// age.set(56);
// school.set('清华大学');
// isYoung.set('false');
// console.log(age.get(), school.get(), isYoung.get(), '$$$$$');



// 测试5
class Store {
    @observable array = [1, 2];
    @observable obj = {};
    @observable map = new Map();

    @observable string = 'color';
    @observable number = 360428;
    @observable bool = false;

    @computed get computedValue() {
        return `inner: ${store.string}///${store.bool}`;
    }
}

const store = new Store();
// const computedValue = computed(function() {
//     return `${store.string}--${store.number}==`;
// });
// computedValue.observe(function (change) {
//     console.log(change, '--7777');
// });
// console.log(store, store.array[0], store.computedValue, 'qqqq');
// console.log(computedValue, computedValue.get(), 'ppp');

// store.string = 'happy';
// store.number = '1594956';

// autorun(function() {
//     console.log('666', store.string, store.number, store.computedValue);
// });
// store.string = 'we';
// store.number = '1594956';


// when(() => {
//     return store.string
// }, () => {
//     console.log('when ~');
// });

reaction(() => {
    return [store.string, store.number];
}, arr => {
        console.log(arr, '--1223--');
});
store.string = 'we';
store.number = '1594956';
