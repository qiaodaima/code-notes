const Light = class {
    weakState = new WeakState(this); // 弱光模式
    strongState = new StrongState(this); // 强光模式
    offState = new OffState(this); // 关灯模式

    currState = this.weakState // 当前状态

    // 修改灯的状态
    setState = (newState) => {
        this.currState = newState;
    }
}

// 弱光模式
const WeakState = class {
    constructor(light) {
        this.light = light;
    }

    pressed() {
        console.log('当前是【弱光模式】，正在切换至【强光模式】');
        this.light.setState(this.light.strongState);
    }
}

// 强光模式
const StrongState = class {
    constructor(light) {
        this.light = light;
    }

    pressed() {
        console.log('当前是【强光模式】，正在切换至【关闭模式】');
        this.light.setState(this.light.offState);
    }
}

// 关闭模式
const OffState = class {
    constructor(light) {
        this.light = light;
    }

    pressed() {
        console.log(`当前是【关闭模式】，正在切换至【弱光模式】`);
        this.light.setState(this.light.weakState);
    }
}

const light = new Light();
