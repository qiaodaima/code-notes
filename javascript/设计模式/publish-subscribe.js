// 定义一个观察者
class Observer {
    // 消息队列
    _messageQueue = {}

    // 订阅
    subscribe = (type, fn) => {
        // 如果订阅的类型不存在, 则直接创建
        if (this._messageQueue[type] === undefined) {
            this._messageQueue[type] = [fn];
            return;
        }

        // 存在的话直接往消息队列里面推进去
        this._messageQueue[type].push(fn);
    }

    // 取消订阅
    unsubscribe = (type, fn) => {
        // 要取消的消息类型不存在
        if (this._messageQueue[type] === undefined) {
            return false;
        }

        this._messageQueue[type] = this._messageQueue[type].filter(item => item !== fn);

        return true;
    }

    // 发布消息
    publish = (type, ...options) => {
        const fnArray = this._messageQueue[type];

        // 消息类型不存在
        if (fnArray === undefined) {
            return false;
        }

        const length = fnArray.length;

        for (let i = 0; i <= length - 1 ; i++) {
            fnArray[i].call(this, ...options);
        }

        return true;
    }
}


// 创建一个销售人员
const salesmen = new Observer();

// 向销售人员订阅一个消息
salesmen.subscribe('滨湖名城', function (...options) {
    console.log(...options, '--');
});

// 销售人员对外发布一个消息
salesmen.publish('滨湖名城', {
    area: '120平方',
    floor: '28楼'
}, '888', '0000', '1234');
