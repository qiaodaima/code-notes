# javaScript中对象和数组的关系
---

## 如何定义一个对象
在js中，对象的表现形式如下：
```js
var people = {
  name: '小小俊',
  age: 18,
  school: '福州大学'
};
```

不难发现，对象是由多个`属性`：`属性值`构成，其中 `属性` 的数据类型是字符串，但是可以省略单引号(或者是双引号)，
因此下面的写法也是正确的
```js
var people = {
  'name': '小小俊',
  'age': 18,
  'school': '福州大学'
};
```

如果说，`属性` 中包含一些空格，那么这个时候，就必须用单引号(或者是双引号)把属性包起来
```js
var people = {
  name: '小小俊',
  'how old': 18,
  school: '福州大学'
};
```

##如何访问对象中的属性
可以使用 `对象.属性` 的方式访问一个对象的某个属性，但是如果 `属性` 中**包含空格，或者是数字**，就**必须使用方括号**
```js
var people = {
  name: '小小俊',
  'how old': 18,
  school: '福州大学'
};

people.name        // 小小俊
people['how old']  // 18
people.school      // 福州大学
```


## 对象和数组他们有啥关系

假如对象的属性全部用连续的整数，会出现什么样的情况？
```js
var colors = {
  '0': 'yellow',
  '1': 'res',
  '2': 'orange',
  '3': 'blue',
  '4': 'pink',
  '5': 'blank'
};

// 刚才说过了，`属性` 的单引号(或者是双引号)是可以省略的，因此下面的写法也是合法的：
var colors = {
  0: 'yellow',
  1: 'res',
  2: 'orange',
  3: 'blue',
  4: 'pink',
  5: 'blank'
};
```

这个时候不难发现，`colors` 的数据类型跟数组极为相似，
```js
var fruits = ['apple', 'banana', 'grape', 'Pear'];

fruits[0] // apple
fruits[1] // banana
fruits[2] // grape
fruits[3] // Pear
```


到这里不难发现，其实数组是一种特殊的对象，
```js
typeof fruits // object
```