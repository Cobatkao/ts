# 泛型

标签（空格分隔）： Typescript

---

泛型就是用一个东西表示广泛的类型，对传入的参数类型和返回的类型可以定义。T指的是这个函数的类型。

## 泛型函数

函数用ts数据类型，想要同时返回string类型和number类型，如下：

```
function getData1(value:string):string{
    return value;
}
function getData2(value:number):number{
    return value;
}
```

这样要写不同的函数，不能按照需求返回不同类型数据，造成代码冗余 => 由此引入泛型。

> 表示泛型，调用的时候指定T的数据类型

```
function dataT<T> (value: T): T { // <类型变量名>表明函数属性泛型，传入参数为T，返回值为T
    return value
}

let getData1 = dataT<string>('Hello World')
let getData2 = dataT<number>(1234) // 调用指定泛型为number类型，则传入参数也必须为number类型

```

### 基本语法

一般，声明泛型有以下两种方法：

```
function gen_func1<T>(arg: T): T {
    return arg;
}
// 或者
let gen_func2: <T>(arg: T) => T = function (arg) {
    return arg;
}
```

调用方式也有两种：

```
gen_func1<string>('Hello world');
gen_func2('Hello world'); 
// 第二种调用方式可省略类型参数，因为编译器会根据传入参数来自动识别对应的类型。
```

## 泛型类

> 泛型类使用（<>）括起泛型类型，跟在类名后面

有个最小堆算法，需要同时支持返回数字和字符串两种类型

使用泛型之前：只能在类的类部指定数据类型，实现需求还要写一套string类型的类

```
class MinClass{
    public list:number[]=[];
    add(num:number){
        this.list.push(num)
    }
    min():number{
        var minNum=this.list[0];
        for(var i=0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum=this.list[i];
            }
        }
        return minNum;
    }
}

var m=new MinClass();
m.add(1);
m.add(2);
alert(m.min());
```

使用泛型之后：只用一套类来实现

```
class MinClassT<T>{ // 泛型类型跟在类名后面
    public list:T[]=[];
    add(value:T):void{
        this.list.push(value);
    }
    min():T{        
        var minNum=this.list[0];
        for(var i=0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum=this.list[i];
            }
        }
        return minNum;
    }
}
var m1=new MinClassT<number>();   /*实例化类 并且指定了类的T代表的类型是number*/
m.add(1);
m.add(2);
alert(m1.min())

var m2=new MinClassT<string>();   /*实例化类 并且指定了类的T代表的类型是string*/
m2.add('c');
m2.add('a');
alert(m2.min())
```

## 泛型接口

如下，一个函数类型的接口

```
interface ConfigFn{
    (value:string):string;
}
var setData:ConfigFn = function(value:string):string{
    return value
}
setData('name');
// setData(20); // 错误
```

`setData(20);`写法错误，想要还想支持传入number类型的参数又要写一个函数类型接口 => 用泛型接口

泛型接口有两种写法

```
// 泛型接口定义方式一
interface ConfigFnOne{
    <T>(value:T):T;
}
var setDataOne:ConfigFnOne = function<T>(value:T):T{
    return value
}
// 既可以传入string也可以传入number类型参数
setDataOne<string>('name');
setDataOne<number>(20);

// 泛型接口定义方式二
interface ConfigFnTwo<T>{
    (value:T):T;
}
function setDataTwo<T>(value:T):T{
    return value
}
var setDataTwoFn:ConfigFnTwo<string> = setDataTwo
setDataTwoFn('name');
```


## 泛型约束

```
function returnIt<T>(arg: T): T{
    console.log(arg.length) // error
    return arg;
}

// 添加约束后

interface HasLength{
    length: number
}

function returnIt<T extends HasLength>(arg: T): T{
    console.log(arg.length) // no error
    return arg;
}
```