"use strict";
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
exports.__esModule = true;
// =======类的定义=======
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
// ======类的继承 extends super========
{
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.run = function () {
            console.log(this.name + "\u5728\u5065\u8EAB\u623F\u8FD0\u52A8!");
        };
        return Person;
    }());
    var q = new Person('尼古拉斯赵四');
    // console.log(q.run()); // 尼古拉斯赵四在运动!
    var Man = /** @class */ (function (_super) {
        __extends(Man, _super);
        function Man(name) {
            return _super.call(this, name) || this; //初始化父类的构造函数
        }
        Man.prototype.run = function () {
            // return `${this.name}在子类里面运动！`
            console.log(_super.prototype.run.call(this));
        };
        Man.prototype.work = function () {
            console.log(this.name + '在工作！');
        };
        return Man;
    }(Person));
    var w = new Man('宇智波四');
    console.log(w.run()); // 宇智波四在子类里面运动！
    console.log(w.work()); // 宇智波四在工作！
}
// =======类里面的修饰符 public protected private=======
/*
  public 公有 再当前类内部 子类 类外部都可以使用
  protected 保护 再当前类内部 子类可以访问，类外部无法访问
  private 私有 在当前类里面可以访问，子类和类外部都无法访问

  属性如果不加修饰符，默认public
*/
// =======静态属性&方法=======
// function Person() {
//   this.run1 = function() {
//   }
// }
// Person.name = '哈哈啊哈' /*静态属性*/
// Person.run2 = function() { /*静态方法 */
// }
// // 调用实例方法run1
// var y = new Person()
// y.run1()
// // 调用静态方法run2
// Person.run2()
// Person.name
// ts中定义静态方法
// class Person {
//   public name: string
//   public age: number
//   static sex: string = '男'
//   constructor(name: string, age?: number) {
//     this.name = name
//     this.age = age
//   }
//   run() { // 实例方法（成员方法），实例化后才能调用
//     console.log(this.name + '在运动');
//   }
//   work() {
//     console.log(this.name + '在工作');
//   }
//   static print() { // 静态方法 静态方法无法直接调用类里面的属性，除非改为静态属性
//     console.log('我是静态方法！' + Person.sex);
//   }
// }
// var p = new Person('尼古拉斯赵四')
// p.work() //尼古拉斯赵四在工作
// Person.print() //我是静态方法！男
/*
  静态方法可以理解为jq中有$构造函数，$.ajax()、$.get()这种方法就是静态方法的运用
*/
// =======多态=======
/*
  父类定义一个方法不去实现 让继承他的子类去实现 每一个子类有不同的表现
  多态是继承的一种表现
*/
// class Animal {
//   public name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   eat() {
//     console.log('吃的方法！'); // 具体吃什么不知道 让继承他的子类去实现 每个子类有不同的表现
//   }
// }
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat() {
//     return this.name + '吃骨头' // 重写父类eat
//   }
// }
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat() {
//     return this.name + '吃鱼'
//   }
// }
// =======抽象方法 抽象类=======
/*
  ts重点额抽象类，他是提供其他类继承的基类，不能直接被实例化
  用abstract关键字定义的抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现(重要)

  注意！abstract抽象方法只能放在抽象类里面
  理解～ 抽象类和抽象方法被用来定义标准 也就是 Animal这个类要求他的子类必须包含eat方法！
*/
// abstract class Animal {
//   public name: string
//   constructor (name: string) {
//     this.name = name
//   }
//   abstract eat():any; // 抽象方法
// }
// // var a = new Animal
// // Cannot create an instance of an abstract class.ts(2511)
// class Dog extends Animal { // 抽象类的子类必须实现抽象类里面的抽象方法
//   constructor(name: string) {
//     super(name)
//   }
//   eat() {
//     console.log(this.name + '吃粮食!');
//   }
// }
// var h = new Dog('哈巴狗')
// console.log(h.eat()); //哈巴狗吃粮食!
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   run () {}
//   eat() {
//     console.log(this.name + '吃老鼠！');
//   }
// } 
// // cat类故意不实现eat方法，出现以下报错
// // Non-abstract class 'Cat' does not implement inherited abstract member 'eat' from class 'Animal'.ts(2515)
//  var c = new Cat('虎妞')
// console.log(c.eat()); //虎妞吃老鼠！
