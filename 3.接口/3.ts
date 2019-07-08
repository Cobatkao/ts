// 接口
/*
  也是定义标准，相比抽象类更强大，能规范属性、函数类
  在面向对象编程中，接口的意义在于定义了一种行为和动作的规范，起到了一种限制和规范的作用
  ts的接口类似于java，同时还增加了更灵活的接口类型，包括属性，函数，可索引和类，接口扩展等等
*/

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
var arr1: number[] = [1,23,4,5]
var arr2: Array<number> = [122,33,4,24,23,5423,4]

// 对数组约束
interface userArr {
  [index: number]:string // 约束索引类型与值类型
}

var arr: userArr = ['123', 'isaac', 'kao']
console.log(arr[1])

// 对对象约束
interface userObj {
  [index: string]: string
}
var obj: userObj = {name: 'isaac', age: '25'}

/*
  类类型接口（使用频繁）和抽象类有点相似，父类定义一个标准，子类实现接口标准
*/

// 有点像属性和方法接口整合到一起
interface Animal {
  name: string;
  eat(str: string): void;
}

class Horse implements Animal {
  public name: string;

  constructor(name: string) {
  this.name = name
  }

  eat() { // 可以不传参数，但是方法必须要遵循类接口的定义
    console.log(this.name + '吃粮食');
  }
}
var d = new Horse('战马')
console.log(d.eat()); //战马吃粮食

class Tiger implements Animal {
  public name: string;

  constructor(name: string) {
    this.name = name
  }

  eat(food: string) { // 可以不传参数，但是方法必须要遵循类接口的定义
    console.log(this.name + food);
  }
}
var t = new Tiger('猛虎')
console.log(t.eat('吃人!')); //猛虎吃人!

/*
  接口的扩展 接口可以继承接口
  1. 接口可以相互继承
  2. 类不仅可以继承父类，还可以实现接口
*/

{
  interface Animal {
    eat(): void;
  }

  interface Person extends Animal { // 接口继承
    work(): void;
  }

  // web 实现Person接口，Person继承了Animal，所以内部有两个方法
  class Web implements Person { 
    public name: string
    constructor(name: string) {
      this.name = name
    }
    eat() {
      console.log(this.name + '喜欢吃粽子');
    }
    work() {
      console.log(this.name + '在上班！');
    }
  }
  var w = new Web('韩梅梅')
  w.work() //韩梅梅在上班！

  // 稍微复杂的例子

  class programmer {
    public name: string
    constructor(name: string) {
      this.name = name
    }
    coding(code: string) {
      console.log(this.name + '写' +  code);
    }
  }
  
  // web开发者继承程序员 并且 实现Person类的规范
  class Weber extends programmer implements Person {
    constructor(name: string) {
      super(name)
    }
    eat() {
      console.log(this.name + '喜欢吃粽子');
    }
    work() {
      console.log(this.name + '在上班！');
    }
  }
  var ww = new Weber('程序员小高')
  ww.coding('echo hello world') // 程序员小高写echo hello world
}
