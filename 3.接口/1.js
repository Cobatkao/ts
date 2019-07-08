var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//枚举
{
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
    var c = Color.Green;
    function checkEquipment(ready) {
        var ct = [];
        for (var i in ready) {
            ct.push(i);
        }
        // console.log(`这次出行，我们带上的装备有: ${ct.join('、')}`)
    }
    var ready = { bag: 3, kettle: 3, map: true, compass: true, destination: 'AMAZON', biscuit: true };
    checkEquipment(ready);
}
var p1 = { x: 5, y: 10 };
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// let mySquare = createSquare({ color: "red", width: 100 });
// 类的定义
// es5
// function Person(name) {
//   this.name = name
//   this.run = function() {
//     console.log(this.name + '在跑步！')
//   }
// }
// ts1
// class Person {
//   name: string // 属性 前面省略了public
//   constructor(n: string) { //实例化类是调用的方法，接收实例化是传递的参数
//     this.name = n
//   }
//   run(): void {
//     console.log(this.name + '在跑步！')
//   }
// }
// var p = new Person('尼古拉斯赵四')
// console.log(p.run());
// console.log(p.name);
// ts2
// class Person {
//   name: string // 属性 前面省略了public
//   constructor(n: string) { //实例化类是调用的方法，接收实例化是传递的参数
//     this.name = n
//   }
//   getName(): string {
//     return this.name
//   }
//   setname(name: string): boolean {
//     this.name = name
//     return true
//   }
// }
// var p = new Person('尼古拉斯赵四')
// console.log(p.getName()); //尼古拉斯赵四
// console.log(p.setname('宇智波四')); //true
// console.log(p.getName()); //宇智波四
// ts中实现继承 extends super
var Mans = /** @class */ (function () {
    function Mans(name) {
        this.name = name;
    }
    Mans.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8!";
    };
    return Mans;
}());
var q = new Mans('尼古拉斯赵四');
// console.log(q.run());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name) {
        return _super.call(this, name) || this;
    }
    return Son;
}(Mans));
var w = new Son('宇智波四');
w.run();
