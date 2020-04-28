/**
 * 类类型 类实现接口(implement 实现接口的属性和方法) 
 * 继承接口 接口继承类
 */

 // 实例接口
// interface ClockInterface {
//   currentTime: Date,
//   setTime(d: Date)
// }
// // 构造器签名
// interface ClockConstructor {
//   new(hour: number, minute: number)
// }

// // implements ClockConstructor 会报错
// // 当一个类实现接口时，实际上是对实例部分（currentTime/setTime）做静态检查，而constructor是静态部分，是不会做检查的
// class Clock implements ClockInterface {
//   constructor(h: number, m: number) {

//   }
//   currentTime: Date
//   setTime(d: Date) {
//     this.currentTime = d
//   }
// }

// =========================

interface ClockInterface {
  tick()
}

interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface
}

// =========================

// 接口可以同时继承多个接口
interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  slideLength: number
}

let squareShape = {} as Square
squareShape.color = 'purple'
squareShape.penWidth = 10
squareShape.slideLength = 5.0

// =========================

//混合类型

// 一个interface里面可以包含多种类型，函数，属性，对象登登

interface Counter {
  (start: number): string,
  interval: number,
  reset(): void
}

function getCounter(): Counter {
  let counter = (function(start: number) {
    console.log(start)
    return start + '开始时间'
  }) as Counter
  counter.interval = 123
  counter.reset = function() {
    console.log('have been reset...')
  }
  return counter
}

let c = getCounter()
c(10)
c.reset()

// =========================

// 接口继承类
// 继承接口的成员但不包含类的实现