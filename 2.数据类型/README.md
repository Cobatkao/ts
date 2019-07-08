# 类型

标签（空格分隔）： Typescript

---

## 原始类型

Javascript原始类型也同样适用于 TypeScript的类型系统。因此，string, number,boolean也可以被用作类型注解：

```
 let num: number;
 let str: string;
 let bool: boolean;

 num = 123;
 num = 123.45;
 num = '123'; //Type '"123"' is not assignable to type 'number'

 str = '123';
 str = 123; //Type '123' is not assignable to type 'string'

 bool = true;
 bool = false;
 bool = 'false';//Type '"false"' is not assignable to type 'boolean'.

```

## 数组

类型注解+`[]`，它能让你安全的使用任何有关数组的操作，而且它能放置一些类似赋值错误类型给成员的行为。

```
// 元素类型加[]写法
let list:number[] = [1,2,3]
// 数组泛型写法
let list: Array<number> = [1,2,3]
```

## 元祖

已知元素**数量**和**类型**的数组

```
// 声明一个元组类型
let x: [string, number];
// 初始化赋值
x = ['hello', 10]; // OK
// 初始化错误
x = [10, 'hello']; // Error
```

## 枚举

在计算机语言中一般用数值来表示某种状态，这种方式不直观，可读性很差。枚举就是把给一些计算机的状态（数字）和一个自然语言相应含义的单词对应起来，目的是把所有的情况都用枚举写出来，这样根据不同的状态对应不同的枚举值，提高了代码的可读性。

枚举类型可以为一组数值赋予友好的名字。默认情况下，从0开始为元素编号，你也可以手动的指定成员的编号。

```
enum Color {Red = 1,Geeen = 2, Blue = 4}
let c: Color = Color.Green
```
编译后
```
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
console.log(Color) // 在函数最后进行打印，返回一个JSON
var c = Color.Green;
```
枚举的key对应是一个变量,然后判断是否有值,如果没有赋值json,然后在自调用函数里，对对象进行赋值，可以在函数最后进行打印，此时json里的值所有的表达式都有返回值，它的返回值就是等号右边的赋值，如下：

```
{ '1': 'Red', '2': 'Green', '3': 'Blue', Red: 1, Green: 2, Blue: 3 }
```

如果你看不大明白上面的代码，那么你必须知道`console.log(Color["Red"]=0)`返回0。


此外，枚举类型提供的一个便利是你可以由枚举的值得到它的名字（从上面编译后的源码就可以看出）。例如，我们知道值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：

```
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
```

合理使用枚举，可以让代码的可读性提高很多！

```
const enum MediaTypes {
  JSON = "application/json"
}

fetch("https://swapi.co/api/people/1/", {
  headers: {
      Accept: MediaTypes.JSON
  }
})
.then((res) => res.json())
```

## null & undefined

null和undefined是其他所有类型的子类型，也就是说null和undefined可以赋值给任何一个类型的值。

```
const n1: null = 123;
const n2: undefined = '123';
const n3: string = undefined;
```

如果一个变量的值确实需要是null或者undefined, 可以像下面这么用, ts会自动根据if/else推导出正确类型:

```
// 这是"联合类型", 在"高级类型"中会有详细介绍, 表示n可能是undefined也可能是number
let num: undefined|number;

if(Math.random()>0.5) num = 1;

if(undefined !== num) {
    num++;
}
```

## any

any类型在 TypeScript 类型系统中占有特殊的地位。它提供给你一个类型系统的【后门】,TypeScript将会把类型检查关闭。在类型系统里any能够兼容所有的类型（包括它自己）。因此，所有的类型都能够被赋值给它。它也能被赋值给其他任何类型。

## void

使用 `:void`来表示一个函数没有返回值，避免你把一个空类型的值赋给另一个值

```
 function log(message:string):void{
    console.log(message)
}
var bar: string = log('hello world') //error
```
声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：

```
let unusable:void = undefined
```

## never

never 表示代码永远没有可能执行到这里, 否则报错, 常常可以应用在 switch case 的 default 中，防止我们遗漏 case 未处理，比如：

```
enum ShirTSize {
  XS,
  S,
  M,
  L,
  XL
}

function assertNever(value: never): never {
  console.log(Error(`Unexpected value '${value}'`));
}

function prettyPrint(size: ShirTSize) {
  switch (size) {
      case ShirTSize.S: console.log("small");
      case ShirTSize.M: return "medium";
      case ShirTSize.L: return "large";
      case ShirTSize.XL: return "extra large";
        // case ShirTSize.XS: return "extra small";
      default: return assertNever(size);
  }
}
```

如上，编辑器会报错提示我们还有未处理的情况。

## 断言

类型断言其实程序员主观上告诉编译器：你不用担心，我能确保someValue是string类型。编译器就不会取管，如果你写错了，编译后才会报错。如下，123明显不是strig，不具备split方法，但是你信誓旦旦的对编译器保证了n是string类型，编译器没有立即报错！

只有你运行过后，控制台才会有一片错误！

```
let n: any = 123
console.log((<string>n).split(''));
// TypeError: n.split is not a function
```

有两种不同的方式可以添加类型断言：

```
<string>someValue
someValue as string
```