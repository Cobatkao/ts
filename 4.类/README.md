# 类

标签（空格分隔）： Typescript

---

## 什么是类

简单来说，类就是用来**创建对象**的概念。有一些语言（如 Java，存疑）创建对象必须先声明一个类，而有的语言（JS）则不需要。

对于没有使用过 TS 的 JS 程序员来说，类看起来还挺无聊的

> 我需要什么属性随时加不就好了吗？为什么一开始就好说好对象里面有什么属性好呢。。。

对于使用过 TS 的 JS 程序员来说，类可以让你的系统更加「可预测」，因为你定以后无法修改类

> 这个对象不会出现一些我不知道的属性，一切都尽在我的掌握。

所以别废话，赶快开始学类吧！

### 接口和类

简单来说，接口是低配版的类，类是高配版的接口，都是用来描述一个对象需要什么属性。

class比interface更进一步的优点是，你可以写一个如何初始化这个类的函数，即`constructor`，可以传入参数。

```
class Human {
    name: string;
    age: string;
    constructor(name: string = 'isaac', age: number = 18) {
        this.name = name
        this.age = age
    }
    move(): void {
        console.log('我在动！')
    }
}

let isaac1 = new Human()

interface Human2 {
    name: string,
    age: number,
    move(): void
}

let isaac2: Human2 {
    name: 'isaac',
    age: 18,
    move(): void {
        console.log('我在动！')
    }
}
```

interface实际上只是做了一个约束，而不实现任何功能，class更精确的控制一个类。

class的语法内容涵盖：

- 声明类
- 声明对象的非函数属性
- 声明对象的函数属性
- 使用 constructor（实例化类时可以传递参数）
- 声明类的属性（static）：给类添加属性，通过class本身调用
- 使用 this 代指当前对象（注意不要以为 this 永远都代指当前对象，JS 的 this 有更多功能，而且默认 this 为 window）

### 开始

ES6前生成实例对象的方法是构造函数，如下：

```
class Person {
  name: string // 属性 前面省略了public
  constructor(n: string) { //实例化类时调用的方法，接受实例化时传递的参数
    this.name = n
  }
  run(): void {
    console.log(this.name + '在跑步！')
  }
}
var p = new Person('尼古拉斯赵四')
console.log(p.run());
console.log(p.name);
```

TS 提供了更接近传统语言的写法，引入了 `Class` 这个概念，让javascript工程师不用再另辟蹊径～

```
class Person {
  name: string // 属性 前面省略了public
  constructor(n: string) { //实例化类是调用的方法，接收实例化是传递的参数
    this.name = n
  }
  getName(): string {
    return this.name
  }
  setname(name: string = '默认名字'): boolean {
    this.name = name
    return true
  }
}
var p = new Person('尼古拉斯赵四')
console.log(p.getName()); //尼古拉斯赵四
console.log(p.setname('宇智波四')); //true
console.log(p.getName()); //宇智波四
```

关于类，你必须知道：

1. 类内部的所有方法都定义在类的prototype属性上面，在类的实例上面调用方法，其实就是调用原型上的方法；
2. 一个类内部必须有`constructor`方法，就算你没有写上去，引擎也会自动添加一个空的`constructor`
3. 生成类的实例必须通过`new`调用；
4. 类的方法内部如果含有`this`，它默认指向类的实例，即类本身；

## 类的继承

要点：`super`，调用基类的构造函数

Class 可以通过extends关键字实现继承，这比 ES5 的通过修改原型链实现组合式继承要清晰非常多！如下，Man从*基类*中继承了属性和方法，Man是一个*派生类*，它派生自Person基类，通过 extends 关键字。 派生类通常被称作 *子类*，基类通常被称作 *超类*。

如下，派生类Man包含了构造函数，并且**必须在构造函数内部调用 `super`，它等同于执行构建基类的构造函数**。 而且，在构造函数里访问 `this`的属性之前，我们 一定要调用 `super()`。 这个是TypeScript强制执行的一条重要规则。

另外，子类可以重写父类的方法，如下 `run`。

```
{
  class Person {
    name: string
    constructor(name: string) {
      this.name = name
    }
    run(): void {
      console.log(`${this.name}在健身房运动!`);
    }
  }
  var q = new Person('尼古拉斯赵四')
  // console.log(q.run()); // 尼古拉斯赵四在运动!

  class Man extends Person {
    constructor(name: string) {
      super(name) //初始化父类的构造函数，super里面的参数是传递给父类的参数！
    }
    run(): void {
      // return `${this.name}在子类里面运动！`
      console.log(super.run()); // 这里的super指代父类构造函数
    }
    work(): void {
      console.log(this.name + '在工作！');
    }
  }
  var w = new Man('宇智波四')
  console.log(w.run()) // 宇智波四在健身房运动!
  console.log(w.work()) // 宇智波四在工作！
}
```

如果子类没有定义`constructor`方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有`constructor`方法。

```
class ColorPoint extends Point {
}

// 等同于
class ColorPoint extends Point {
  constructor(...args) {
    super(...args);
  }
}
```

此外，下面在静态方法中提到过，父类的静态方法也会被子类继承。

```
class A {
  static hello() {
    console.log('hello world');
  }
}

class B extends A {
}

B.hello()  // hello world
```

## 类中的修饰符

1. `public` 公有 在当前类内部 子类 类外部都可以使用
2. `protected` 保护 在当前类内部及子类（派生类）可以访问，类外部无法访问
3. `private` 私有 仅在当前类里面可以访问，子类和类外部都无法访问

PS. 属性如果不加修饰符，默认为 `public`，你也可以明确的将一个成员标记成 `public`

```
class Person {
    public name: string
    public constructor(name: string) {
      this.name = name
    }
    public run(): void {
      console.log(`${this.name}在健身房运动!`);
    }
  }
  
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // 错误: 'name' 是私有的.
```

## get&set

有一些值你不希望外部的人随意更改，于是用private来声明（把真正用到的值隐藏起来），用get，set方法来增加一些限定规则。

如下，用户get时返回藏起来的值，用户set时判断新的值是否符合要求，符合则直接set，不符合则返回默认的值。

![Screen Shot 2019-07-07 at 6.53.33 PM.png](https://i.loli.net/2019/07/07/5d21cfdc2abf742452.png)


## 静态属性&方法

静态方法直接通过构造函数来调用，可以理解为jq中有$构造函数，`$.ajax()`、`$.get()`这种方法就是静态方法的运用。

```
function Person() {
  this.run1 = function() {
    
  }
}
Person.name = '哈哈啊哈' /*静态属性*/
Person.run2 = function() { /*静态方法 */

}
// 调用实例方法run1
var y = new Person()
y.run1()
// 调用静态方法run2
Person.run2()
y.run2() //y.run2 is not a function
```

typescript中通过`static`关键字定义静态属性、方法，静态属性直接通过类来调用，且注意：
1. 静态属性和方法不会被实例继承（`new`创建的新实例）；
2. 父类的静态属性和方法可以被子类继承（`extends`），见下例中的`Son.work()`；

```
class Person {
  public name: string
  public age: number
  static sex: string = '男'
  constructor(name: string, age?: number) {
    this.name = name
    this.age = age
  }
  run() { // 实例方法（成员方法），实例化后才能调用
    console.log(this.name + '在运动');
  }
  work() {
    console.log(this.name + '在工作');
  }
  static work() { // 静态方法 静态方法无法直接调用类里面的属性，除非改为静态属性
    console.log('我是静态方法！' + this.sex);
  }
}
var p = new Person('尼古拉斯赵四')
p.work() //尼古拉斯赵四在工作
Person.work() //我是静态方法！男
p.sex // [ts] Property 'sex' does not exist on type 'Person'.

class Son extends Person {

}
// 父类的静态方法和属性被子类继承
Son.work() // 我是静态方法！男
```

如上，若访问`p.sex`和`p.print()`都会报错，表示不存在该方法或属性，因为静态属性和方法不会被继承到实例中。

此外，我们还注意到

 1. 静态方法可以与非静态方法重名，见上例中的work方法
 2. 静态方法内部的this指向类本身，见上例中`this.sex`等同于访问`Person.sex`，这不同于实例方法的this指向新创建的实例。

## 多态

父类定义一个方法不去实现，让继承他的子类去实现，且每一个子类有不同的表现。多态是继承的一种表现。

```
class Animal {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  eat() {
    console.log('吃的方法！'); // 具体吃什么不知道 让继承他的子类去实现 每个子类有不同的表现
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat() {
    return this.name + '吃骨头' // 重写父类eat
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
  eat() {
    return this.name + '吃鱼'
  }
}
```

## 抽象方法&抽象类

可以理解为**爸爸类**，专门用来做其它类的爸爸。也可以叫**没有写完的类**，只描述有什么方法，并没有完全实现这些方法。

如果你想声明一个类，又不想实现类和方法，就在前面加上一个`abstract`。

抽象类，它是提供其他类继承的基类。有以下特性

1. 抽象类不能直接被实例化（因为你类没写完啊。。。）
2. 不同于接口，抽象类可以包含成员的实现细节（当然了）
2. 我们用`abstract`关键字定义的抽象类和抽象方法
3. 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现！（儿子来实现。。。）

比如你想定义一个动物叫的方法，但是你无法确定是什么动物，所以定义一个抽象方法。**注意！`abstract`抽象方法只能放在抽象类里面，很奇怪的规定。**

实际上，抽象类和抽象方法也是被用来定义标准，下面例子中也就是`Animal`这个类要求他的子类必须包含`eat`方法！

```
abstract class Animal {
  public name: string
  constructor (name: string) {
    this.name = name
  }
  abstract eat(): void; // 抽象方法，必须在派生类中实现
}
// var a = new Animal
// Cannot create an instance of an abstract class.ts(2511)

class Dog extends Animal { // 抽象类的子类必须实现抽象类里面的抽象方法
  constructor(name: string) {
    super(name)
  }
  eat() {
    console.log(this.name + '吃粮食!');
  }
}

var h = new Dog('哈巴狗')
console.log(h.eat()); //哈巴狗吃粮食!

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }
  run () {}
  eat() {
    console.log(this.name + '吃老鼠！');
  }
} 
// cat类故意不实现eat方法，出现以下报错
// Non-abstract class 'Cat' does not implement inherited abstract member 'eat' from class 'Animal'.ts(2515)
 var c = new Cat('虎妞')
console.log(c.eat()); //虎妞吃老鼠！
```