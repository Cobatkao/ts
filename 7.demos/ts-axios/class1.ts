// 类的基本使用
class Greeter {
  constructor(msg: string) {
    this.greeting = msg
  }
  greeting: string
  greet() {
    return `Hello ${this.greeting}!`
  }
}

let greeter = new Greeter('Bejing')
greeter.greet()

// 使用继承扩展现有的类
// 派生类=子类 基类=超类
{
  class Animal {
    move(distance = 0) {
      console.log(`A animal has moved ${distance} m`)
    }
  }

  class Dog extends Animal {
    bark() {
      console.log('woof woof')
    }
  }

  let dog = new Dog()
  dog.bark()
  dog.move(100)
}

// 复杂例子
{
  class Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }
    move(distance: number = 5) {
      console.log(`${this.name} has moved ${distance} m!`)
    }
  }

  class Snake extends Animal {
    constructor(name: string) {
      super(name)
    }
    move(distance: number = 9) {
      console.log('slitering......')
      super.move(distance)
    }
  }

  class Horse extends Animal {
    constructor(name: string) {
      super(name)
    }
    move(distance: number = 45) {
      console.log('Galloping......')
      super.move(distance)
    }
  }

  let sam = new Snake('sammy')
  let tom = new Horse('tommy')
  sam.move()
  tom.move(245)
}

// 修饰符
// 默认是public
// private 无法在类的外部使用
// protect 在派生类中可以访问（extends）
// protectd constructor() {} 使构造函数变为受保护的 也就是无法被new
 

// readonly
{
  class Person {
    readonly name: string
    constructor (name: string) {
      this.name = name
    }
  }

  let john = new Person('john')
  // john.name = '' // 报错

  // 参数属性 实际是一种简写 在一个地方简写并初始化成员
  {
    class Person {
      constructor (readonly name: string) {

      }
    }
    let john = new Person('john')
    console.log(john.name)
  }

}
