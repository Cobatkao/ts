// 接口
/*
  也是定义标准，相比抽象类更强大，能规范属性、函数类
  在面向对象编程中，接口的意义在于定义了一种行为和动作的规范，起到了一种限制和规范的作用
  ts的接口类似于java，同时还增加了更灵活的接口类型，包括属性，函数，可索引和类，接口扩展等等
*/
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
/*
  属性接口
*/
// 传入参数必须是对象，对象属性有类型约束
// function printLabel(label: {label: string, size: number}) {
//   console.log(`${label.label}${label.size}`);
// }
// var labelJson = {label: 'amoy', size: 99} // 这个对象满足约束条件，没有报错
// printLabel(labelJson) // amoy99
// //下面使用interface
// /*
//   属性接口
// */
// interface fullName { // 对函数传参进行约束，
//   firstName: string; // 注意 分号结束
//   lastName: string;
//   age?: number // 可选属性
// }
// function printName(name: fullName): string {
//   return `你的全名是：${name.firstName}${name.lastName}`
// }
// var parameter = { firstName: '尼古拉斯', lastName: '赵四', age: 25 } // 传参必须包含firstName、lastName，顺序无所谓
// console.log(printName(parameter)); // 你的全名是：尼古拉斯赵四
// // $.ajax例子
// interface ajaxConfig {
//   type: string;
//   url: string;
//   data?: string|null;
//   dataType: string 
// }
// function ajax(config: ajaxConfig): void {
//   var xhr = new XMLHttpRequest()
//   xhr.open(`${config.type}`, config.url, true)
//   xhr.send(config.data)
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200 || xhr.status === 304) {
//       console.log('success');
//       if (config.type === 'json') {
//         return JSON.parse(xhr.responseText)
//       } else {
//         xhr.responseText
//       }
//     }
//   }
// }
// ajax({
//   type: 'GET',
//   url: 'http://a.itying.com/api/productlist',
//   dataType: 'json',
//   data: 'name=zhaosi'
// })
/*
  函数接口
*/
// 注意写法  同样支持批量约束
// interface encrypt {
//   (key: string, val: string): string;
// }
// var md5: encrypt = function (key: string, val: string): string {
//   return key+val
// }
// console.log(md5('isaac', 'kao')); //isaackao
/*
  可索引接口(不常用)
*/
// ts中定义数组的方式
var arr1 = [1, 23, 4, 5];
var arr2 = [122, 33, 4, 24, 23, 5423, 4];
var arr = ['123', 'isaac', 'kao'];
console.log(arr[1]);
var obj = { name: 'isaac', age: '25' };
var Horse = /** @class */ (function () {
    function Horse(name) {
        this.name = name;
    }
    Horse.prototype.eat = function () {
        console.log(this.name + '吃粮食');
    };
    return Horse;
}());
var d = new Horse('战马');
console.log(d.eat()); //战马吃粮食
var Tiger = /** @class */ (function () {
    function Tiger(name) {
        this.name = name;
    }
    Tiger.prototype.eat = function (food) {
        console.log(this.name + food);
    };
    return Tiger;
}());
var t = new Tiger('猛虎');
console.log(t.eat('吃人!')); //猛虎吃人!
/*
  接口的扩展 接口可以继承接口
  1. 接口可以相互继承
  2. 类不仅可以继承父类，还可以实现接口
*/
{
    // web 实现Person接口，Person继承了Animal，所以内部有两个方法
    var Web = /** @class */ (function () {
        function Web(name) {
            this.name = name;
        }
        Web.prototype.eat = function () {
            console.log(this.name + '喜欢吃粽子');
        };
        Web.prototype.work = function () {
            console.log(this.name + '在上班！');
        };
        return Web;
    }());
    var w = new Web('韩梅梅');
    w.work(); //韩梅梅在上班！
    // 稍微复杂的例子
    var programmer = /** @class */ (function () {
        function programmer(name) {
            this.name = name;
        }
        programmer.prototype.coding = function (code) {
            console.log(this.name + '写' + code);
        };
        return programmer;
    }());
    // web开发者继承程序员 并且 实现Person类的规范
    var Weber = /** @class */ (function (_super) {
        __extends(Weber, _super);
        function Weber(name) {
            return _super.call(this, name) || this;
        }
        Weber.prototype.eat = function () {
            console.log(this.name + '喜欢吃粽子');
        };
        Weber.prototype.work = function () {
            console.log(this.name + '在上班！');
        };
        return Weber;
    }(programmer));
    var ww = new Weber('程序员小高');
    ww.coding('echo hello world'); // 程序员小高写echo hello world
}
