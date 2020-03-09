// Generics
// 前面的<T>實際上就是佔位符，理解爲捕獲類型的變量

function returnIt<T>(arg: T): T {
  return arg;
}

//複雜的寫法 聲明時定義
let returnIt2: <T>(arg: T) => T = returnIt;

let rel = returnIt<string>("YoHoo");
console.log(rel);

interface Human {
  name: string;
  age: number;
}

// 一般不用明確寫<Human> ts會自己推斷出來
let re = returnIt<Human>({ name: "gao", age: 25 });
console.log(re);

function returnArray<T>(array: T[]): T[] {
  return array;
}

let arr1: Array<Human> = returnArray<Human>([{ name: "gao", age: 25 }]);

// 其實這裏已經用到了Generics
let s1: string[] = ["gao", "hang"];
let s2: Array<string> = ["huang", "huang"];

// Generics與接口
interface Add {
  (a: number, b: number): number;
}

let addFn: Add = (a: number, b: number) => {
  return a + b;
};

// 接口支持Genecrics 注意寫法
// Anyadd<T> 同樣的 聲明時 Anyadd<string>
interface Anyadd<T> {
  (a: T, b: T): T;
}

let stringAdd: Anyadd<string> = (a: string, b: string): string => {
  return a + b;
};
console.log(stringAdd("gao ", "hang"));

let numberAdd: Anyadd<number> = (a: number, b: number): number => {
  return a + b;
};
console.log(numberAdd(1, 99));

// Generics約束
// 通過接口約束，沒有約束的話，arg.lenth會報錯
// 有時我們只需要滿足某些條件的類型，可以繼承interface或class
interface Type {
  length: number;
}

function returnSth<T extends Type>(arg: T): T {
  console.log(arg.length);
  return arg;
}
