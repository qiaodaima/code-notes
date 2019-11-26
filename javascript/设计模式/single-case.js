// 单例模式 （不透明）
const People = function(name = '') {
    this.name = name;
}

People.getInstance = function(name) {
    if (!this.instance) {
        this.instance = new People(name);
    }

    return this.instance;
}

const people1 = People.getInstance('111');
const people2 = People.getInstance('22222');

console.log(people1 === people2, 'People');

// 上述代码等同于
const People = function (name = '') {
    this.name = name;
}

People.instance = null;
People.getInstance = function (name) {
    if (!People.instance) {
        People.instance = new People(name);
    }

    return People.instance;
}

const people1 = People.getInstance('111');
const people2 = People.getInstance('22222');

console.log(people1 === people2, 'People');

// 再直白些，上述代码本质如下
const People = function (name = '') {
    this.name = name;
}
People.instance = new People(name);
People.getInstance = function (name) {
    return People.instance;
}

const people1 = People.getInstance('111');
const people2 = People.getInstance('22222');

console.log(people1 === people2, 'People');

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// 单例模式 （代理模式）
const Fruits = function(name = '') {
    this.name = name;
}
const getFruitsInstance = function(name) {
    let instance = new Fruits(name);;

    return function() {
        return instance;
    }
}();
const fruit1 = getFruitsInstance('香蕉');
const fruit2 = getFruitsInstance('苹果');

console.log(fruit1, fruit2, 'Fruits');
