// function add(n1, n2) {
//   return n2 + n2
// }

// add(1, 2) // 3
// add('isaac', 'gao') // 'isaacgao'
// add(1, '2') //12

// /**
//  * 函数重载写法
//  */

// function add(n1: number, n2: number) // 类型1
// function add(n1: string, n2: string) // 类型2
// function add(n1, n2) { // 真正的实现
//   return n2 + n2
// }

// add(1, '2') //12

/**
 * 类型推断
 */

function add(n1: string, n2: string) { // 未定义返回值类型
  return  n1 + n2
}

var s = add('isaackao','hang') // 这里ts已经推断出s的类型为string，然而我们并没有给函数返回值类型
console.log(s.split('')) // 这里使用split方法不报错

/**
 * 类型兼容
 */

interface Human {
  name: string;
  age: number;
}

let x: Human = {name: 'isaac', age: 18, gender: 'male'} // error 'gender' does not exist in type 'Human'.ts(2322)

// 如果这样用变量传递，就不会报错

let y = { name: 'isaac', age: 18, gender: 'male' }
let x: Human = y