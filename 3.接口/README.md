# 接口

---

## 理解接口

就是定义标准，相比抽象类更强大，能规范属性、函数，类。在面向对象编程中，接口的意义在于定义了一种行为和动作的规范，起到限制和规范的作用。ts的接口类型，包括属性，函数，可索引和类，接口扩展等等。

其实说白了，**接口就是用代码描述一个对象必须有什么属性（包括方法）**，至于对象有没有其他属性就不管了，只要接口定义的有就行，没有就报错！

看个简单的例子： 

```js
// 传入参数必须是对象，对象属性有类型约束
function printLabel(label: {label: string, size: number}) {
  console.log(`${label.label}${label.size}`);
}
var labelJson = {label: 'amoy', size: 99} // 这个对象满足约束条件，没有报错
printLabel(labelJson) // amoy99
```
复杂一些的例子，其实我们可以把interface理解为**要求**
```js
// 要求Human的类型和属性
interface Shape {
    head: string;
    body: string;
}
interface Human {
    readonly name: string;
    age: number;
    shape: Shape;
    say(word: string): void; // 属性是个函数
    likedgame?: Array<string>; // 喜欢或者什么都不喜欢，可选属性
}
let isaacgao: Human = {
    name: 'isaac',
    age: 24,
    shape: {
        head: "⭕️",
        body: "正方形"
    },
    say(word: string) {
        console.log(this.name + ' 说 ' + word) // isaac 说 hello world
    },
    likedgame: ['pokemon', 'monster hunter']
}

isaacgao.say('hello world')
isaacgao.name = 'gao' // Cannot assign to 'name' because it is a read-only property.
```

还有一个有意思的地方，如果你声明一个interface作为参数，你是通过一个变量传入的，你是可以传递多余interface规定的属性的。但是你不通过变量直接传则会报错。

## 属性接口

```js
interface fullName { // 对函数传参进行约束，
  firstName: string; // 注意 分号结束
  lastName: string;
  age?: number // 可选属性
}

function printName(name: fullName): string {
  return `你的全名是：${name.firstName}${name.lastName}`
}
var parameter = { firstName: '尼古拉斯', lastName: '赵四', age: 25 } // 传参必须包含firstName、lastName，顺序无所谓
console.log(printName(parameter)); // 你的全名是：尼古拉斯赵四

// $.ajax例子
interface ajaxConfig {
  type: string;
  url: string;
  data?: string|null;
  dataType: string 
}

function ajax(config: ajaxConfig): void {
  var xhr = new XMLHttpRequest()
  xhr.open(`${config.type}`, config.url, true)
  xhr.send(config.data)
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200 || xhr.status === 304) {
      console.log('success');
      if (config.type === 'json') {
        return JSON.parse(xhr.responseText)
      } else {
        xhr.responseText
      }
      
    }
  }
}

ajax({
  type: 'GET',
  url: 'http://a.itying.com/api/productlist',
  dataType: 'json',
  data: 'name=zhaosi'
})
```

## 函数接口

```js
// 注意写法  同样支持批量约束
interface encrypt {
  (key: string, val: string): string;
}

var md5: encrypt = function (key: string, val: string): string {
  return key+val
}
console.log(md5('isaac', 'kao')); //isaackao
```

## 可索引接口(不常用)

可以约束属性和值的类型

```js
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
  // [propName: string]: number // 对象一般这么写
}
var obj: userObj = {name: 'isaac', age: '25'}
```

## class类型接口

和抽象类有点相似，父类定义一个标准，子类实现接口标准

```js
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
```

## 接口继承

一个interface可以批量继承多个interface，你还可以继承一个已经继承其他interfce的interface（比如Mamel继承了Animal，Human再继承Mamel）

注意，如果继承（包括多重继承）的两个interface有相冲突的属性或类型，会报错！

```js
interface Animal {
    move(): void;
}

interface Mamel {
    fur: boolean;
    pregnancy: boolean;
    intelligent: boolean
}

interface Human extends Animal, Mamel { // 人类继承了动物的move方法
    name: string;
    age: number;
}

let gao: Human {
    name: 'hang',
    age: 24,
    move() {
        console.log('在动!')
    },
    fur: true;
    pregnancy: true;
    intelligent: true
}

gao.move()
```

## 接口扩展

接口可以继承接口
1. 接口可以相互继承
2. 类不仅可以继承父类，还可以实现接口

```js
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
  
  // web开发者继承程序员 并且 实现Person类的规范（必须有eat和work方法）
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
```