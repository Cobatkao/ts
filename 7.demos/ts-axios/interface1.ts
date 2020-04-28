/**
 * 3-9 ~ 11
 */

let a:number[] = [1,2,3,4];
let rel:ReadonlyArray<number> = a;
// console.log(rel);

interface LabelConfig {
  label: string,
}

function printLabel(labelObj: LabelConfig): void {
  console.log(labelObj.label);
}

let testObj = {label: "outdated food", count: 100};
// 调用函数时传入变量与对象字面量的区别
printLabel(testObj);
// printLabel({label: "green food", size: "XL"}); // 报错
printLabel({ label: "green food", size: "XL" } as LabelConfig); // 使用类型断言解决报错

interface Square {
  color: string,
  area: number
}

interface SquareConf {
  color?: string,
  width?: number,
  [propName:string]: any // 使用索引签名解决报错
}

function createSquare (config: SquareConf): Square {
  let dafaultSquare = {color: 'red', width: 100};
  if (config.color) {
    dafaultSquare.color = config.color;
  }
  if (config.width) {
    dafaultSquare.width = config.width;
  }
  return {
    color: dafaultSquare.color,
    area: dafaultSquare.width * dafaultSquare.width
  }
}

// ts对对象字面量会做额外的属性检查，若发现传入的key不在interface中会报错 
// 解决方法
// 1. 类型断言 xx as xx
// 2. 赋值中间变量（如上testObj）
// 3. 添加字符串的签名索引（最好办法）
createSquare({ colour: 'pink', width: 200 });

// ============================================== // 

// 函数类型
interface searchFunc {
  (source:string, subString:string): boolean
}

// 函数类型实现
let mySearch: searchFunc = function (src: string, sub: string): boolean {
  let rel = src.search(sub);
  return rel > -1;
}

// 可以不用这么写 直接利用ts的类型推断，只要函数实现符合即可
let mySearch2: searchFunc = function (src, sub) {
  let rel = src.search(sub);
  return rel > -1;
}

// ============================================== // 

// 可索引类型
// ts支持字符串/数字签名（[index: number]）二者可以同时使用 数字索引的返回值必须是字符串索引返回值的子类型（注意是返回值）

// 当用number去索引stringarray时 会得到一个string的值
interface StringArray {
  [index: number]: string
}
let myArray: StringArray = ['Bob', 'Isaac']
let myStr: string = myArray[1]

interface NumberDictionary {
  [test: string]: number,
  length: number,
  // name: string // 报错 这里必须遵守索引签名
}

// 索引签名也可以是只读的
interface ReadonlyStringArray {
  readonly [index: number]:string,
  readonly [name: string]:string,
  // readonly [size:string]:number
}

// let myArr:ReadonlyStringArray = ['tom', 'jack', 'tony', ];
// myArr[1] = 'michael'; // 报错 索引签名是只读的

class Animal {
  name: string
}

class Dog extends Animal {
  breed: string
}

// 这就违反了数字索引的返回值必须是字符串索引返回值的子类型（注意是返回值）
interface notOkay {
  [test1: number]: Dog,
  [test2: string]: Animal
}
 
