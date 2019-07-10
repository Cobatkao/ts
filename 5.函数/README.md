# 函数

---

## 要点

- 规范函数的返回值（括号后大括号前）和参数的类型；
- **可选参数**：ES5中形参和实参可以不同，而ts中参数个数和类型必须一样，否则就要配置可选参数（形参后面，冒号前面加`age?: number`），表示该参数可传可不传；
- **默认参数**：和ES6的写法一致：`getInfo(name: string, age: number=20): string {xxx}`，这里可以不写number类型
- **函数重载**：两个或两个以上的同名函数，它们的参数不一样，这时会出现函数重载，ts中的重载则是通过为同一个函数提供**多个函数类型定义**来实现多种功能的目的；

## JS中的函数

> 什么是函数？

在JS中，函数是一种可以被调用的特殊对象。调用指的是以下这两种方式：

```javascript
xxx()
xxx.call()
```

> 什么是方法？

如果一个函数是另外一个对象的属性，它又叫作方法。

> 形参与实参

![Screen Shot 2019-07-07 at 11.07.09 PM.png](http://ww4.sinaimg.cn/large/006tNc79ly1g4roimtqfcj307k09cjt5.jpg)

当你用call调用函数时，call的第一个参数赋值给this，其余参数依次赋值给`argument[x]`。

> 关于this？

```javascript
function printThis() {
    'use strict'
    console.log(this)
    console.log(arguments)
}

printThis.call('fuck!', 100, 200) // fuck 100 200，可见this取决于call的第一个参数 

// 第一种this
printThis.call(100, 200)
printThis.call(undefined, 100, 200)
// 以上调用的情况下，this有可能是：
// 1
// 1.1 this => Whindow 浏览器里
// 1.2 this => Global Node.js中
// 1.3 this => undefined 'use strict'

let obj = {
    'use strict'
    fn() {
        console.log(this)
    }
}

// 第二种this
// 2
// 2.1 obj.fn() => this指向.fn前面的对象obj，要记住
// 2.2 obj.fn.call('fuck') => 指向fuck，this是参数，所以this是什么取决于你怎么调用的！

let fn3 = obj.fn 
fn3() // 这里的this是什么？undefined
```

`this`是什么？实际上，this就是call的第一个参数！其次，第二种情况下要注意，this的指向取决于最后调用的环境。

此外，第三种this情况，箭头函数的this就是函数外部作用域中的this。

## 箭头函数

ts中的箭头函数和ES6的一样

```js
let fn = (a: number, b: number): number => {
    return a + b
}
```

箭头函数的简写，去掉花括号可以简化掉return（如果只有一行代码的话）

```js
let fn = (a: number, b: number): number => a + b
```

此外，箭头函数内部没有`this`，`arguments`，`new.target`。如果箭头函数内部写了this，则它指向外部，也就是上层作用域的this。

## 函数声明（TS）

```js
// 函数声明
function fn(x: Type, y: Type): Type {}

// 函数表达式
var fn = (x: Type, y: Type): Type => {}

// 函数表达式：指定变量fn的类型
var fn: (x: Type, y: Type) => Type = (x, y) => {}
```

定义函数有函数声明和函数表达式两种形式。定义函数的参数和返回值可以指定其类型；当调用函数时，传入参数类型必须与定义函数参数类型保持一致。

```js
// 函数声明法
function run(x: number, y: number): number {
    return x + y;
}

// 函数表达式法
var run2 = (x: number, y: number): string => {
    return 'run2'
}

run(1, 2);
run2(1, 2);
```

- 这段代码中，函数run和run2指定了参数类型，调用时传入参数类型必须保持一致。

**函数表达式法另外一种写法**

```js
var run3: (x: number, y: number) => string = function(x: number, y: number): string{
    return 'run3';
}
run3(1, 2);
```

- 当给变量run3指定类型的时候，应该是函数的参数和返回值的约束类型。如果用后面学到的ts类型推论，可以简写为：

```js
var run4: (x: number, y: number) => string = function(x, y){ // 类型推论可以确定函数的参数和返回值类型，也就可以省略类型指定
    return 'run4';
}
run4(1, 2);
```

- 函数没有返回值用void类型指定返回值类型

```js
function voidFnc(): void{
    console.log('没有返回值的方法用void')
}
voidFnc();
```

## 可选参数

需要注意，可选参数必须配置在必选参数的后面，否则会报错，如下age红色下划线报错：

```js
const getInfo = function(name?: string, age: number): string {
  if (age) {
    return `我的名字是${name},今年${age}岁了！`
  } else {
    return `我的名字是${name}，年龄保密!`
  }
}

getInfo('gaogao', 25)
// [ts] A required parameter cannot follow an optional parameter.
```

## 默认参数

ES5里面无法设置默认参数（`var a = 'hello' || null`），ES6和ts中可以设置

```js
const getInfo = function(name: string, age: number=33): string {
  if (age) {
    return `我的名字是${name},今年${age}岁了！`
  } else {
    return `我的名字是${name}，年龄保密!`
  }
}

console.log(getInfo('gaogao'))
// 我的名字是gaogao,今年33岁了！
```

## 剩余参数

当有很多参数时候或参数个数不确定，可以用三点运算符

```js
// sum参数传过来的是一个数组
function sum(...result: number[]): number {
    var sum = 0;

    for (var i = 0; i < result.length; i++) {

        sum += result[i];
    }

    return sum;
}
console.log('剩余参数', sum(1, 2, 3, 4, 5, 6));

// a=1 b=2 其他参数为剩余参数
function sum2(a: number, b: number, ...result: number[]): number {
    var sum = a * b;

    for (var i = 0; i < result.length; i++) {

        sum += result[i];
    }

    return sum;
}
console.log('剩余参数2', sum2(1, 2, 3, 4, 5, 6));

const sum = function(a: number, ...rel: number[]) {
  return rel.reduce((acc, cur) => acc + cur, a)
}

console.log(sum(1,2,3,4,5)) //15
```

## 函数重载

[函数重载参考](https://jkchao.cn/article/5bb9c63963a5d23d5ce3091b)

> 同名函数，传入不同的参数，实现不同的功能，这就叫作函数重载。

- java中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。
- typescript中的重载：**通过为同一个函数提供多个函数类型定义来实现多种功能的目的。**
- ts为了兼容es5以及es6，重载的写法和java中有区别

es5中同名函数，后面会覆盖前面的函数，ts中则不会：

```js
function overloadingFn(x: number, y: number): number;
function overloadingFn(x: string, y: string): string;

// 上面定义函数的格式，下面定义函数的具体实现
function overloadingFn(x: any, y: any): any {
    return x + y;
}

overloadingFn(1, 2);
overloadingFn('a', 'b');
```

这段代码中，同名函数overloadingFn首先定义两个函数的格式，然后再去实现功能，原来要传入不同类型参数要用多个函数实现，现在可以用同名函数来实现，这就是函数重载。