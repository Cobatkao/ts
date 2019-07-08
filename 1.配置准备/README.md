
> Vue3.0底层都要用ts重写了，相信未来能用javascript写的都用typescript写了

# 配置准备

---

node的安装就不说了，这个必须有。

配置淘宝源，或者安装nrm，来方便切换npm源的版本（推荐后者）

```js
npm config set registry https://registry.npm.taobao.org/
```

安装

```js
npm install typescript@2.9.2 -g
npm install ts-node@7.0.0 -g // 让node支持ts
```

## 运行

两种方式快速运行ts代码

1. 安装[ts-node](https://www.npmjs.com/package/ts-node)，直接在命令行环境下敲ts代码，和node运行环境类似；
2. 创建一个目录 >>> 创建`.vscode`目录 >>> 创建`launch.json`文件，在文件内这么写：

    ```js
     {
     "configurations": [
             {
             "name": "ts-node",
             "type": "node",
             "request": "launch",
             "program": "注意看这里，要写成ts-node对应的可执行文件，Windows 用户注意了，你应该写成 ${workspaceRoot}/node_modules/ts-node/dist/bin.js",
             "args": ["${relativeFile}"],
             "cwd": "${workspaceRoot}",
             "protocol": "inspector"
             }
        ]
    }
    ```
    然后找到该目录下你新建的文件，找到vscode的调试选项，选择ts-node，然后点击调试，你就可以在控制台看到结果了！

配置文件

在终端中输入tsc --init：它是一个TypeScript项目的配置文件，可以通过读取它来设置TypeScript编译器的编译参数

```js
{
  "compilerOptions": {

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告switch语句的fallthrough错误。（即，不允许switch的case语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。
    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}
```

还可以指定不要被编译的文件

```js
{
  "files": [
    "./some/file.ts"
  ]
}

```
可以使用 include 和 exclude 选项来指定需要包含的文件，和排除的文件

```js
{
  "include": [
    "./folder"
  ],
  "exclude": [
    "./folder/**/*.spec.ts",
    "./folder/someSubFolder"
  ]
}


```


# 简单的命令行程序

**技巧**

文件首行写`#!/usr/bin/env ts-node`的作用？

- 此为shebang，说明该脚本用什么语言解析，并利用env查找该在哪查找该语言 

给文件添加执行权限

```
// 添加可执行权限（windows用户不需要）
chmod +x 1.ts
// 添加执行权限后可以直接执行文件，如下
./1.ts
```

这样，我们就可以通过给cmd.ts文件中打印process.argv，来获取到命令行参数了！

```js
┌─(~/TypeScript/tsdemo)────────────────────────────────────────────(gaohang@isaacgao:s005)─┐ ────────────────────────────────────────(gaohang@isaacgao:s005)─┐
└─(22:59:03)──> ./cmd.ts haha xixi                                           ──(Sun,Jun30)─┘                                                   ──(Sat,Jun29)─┘
hello world                                                                                  'string'.
[ 'node',
  '/Users/gaohang/TypeScript/tsdemo/cmd.ts',
  'haha',
  'xixi' ]
┌─(~/TypeScript/tsdemo)────────────────────────────────────────────(gaohang@isaacgao:s005)─┐ ────────────────────────────────────────(gaohang@isaacgao:s005)─┐
└─(23:05:23)──>     
```



新建add.ts，执行

```js
#!/usr/bin/env ts-nod
let a: number = process.argv[2];
let b: number = process.argv[3];
console.log(a + b);

//执行 ./add.ts 1 2
```
如上，我们执行`./add.ts 1 2`后，得到12，并不是预想中的3。可想而知，这里的a，b是字符串类型相加了把。当我们用typescript给a，b规范类型为number后，vscode立即出现红色下划线：`[ts] Type 'string' is not assignable to type 'number'.`

这就是typescript的厉害之处，在代码非运行时就告知我们类型错误！

进一步，vscode提供了一处便利，按住cmd同时光标指向`process.argv`就可以定位到index.d.ts中全局process的源代码

```js
interface Process extends EventEmitter {
        stdout: WriteStream;
        stderr: WriteStream;
        stdin: ReadStream;
        openStdin(): Socket;
        argv: string[];
        argv0: string;
        execArgv: string[];
        execPath: string;
        abort(): void;
        ......
```

注意到上面，argv是字符串类型的数组，这也解释了为什么上面`process.argv[2]`返回的是字符串，并且规范为number后还是报错了。

下面我们继续迭代一下add.ts

```js
#!/usr/bin/env ts-node
let a: number = parseInt(process.argv[2]);
let b: number = parseInt(process.argv[3]);

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.warn('对不起哦，你的输入错误了');
  process.exit(0)
}

console.log(a + b);
```

注意，不执行下面，退出进程可以使用`process.exit(0)`，一般程序约定，exit(0)是正常退出（即返回0），其余数据是异常退出，不同编号可以对应不同错误类型。

执行后竟然报错了，摘取的关键信息如下：

```js
TSError: ⨯ Unable to compile TypeScript:
add.ts(5,12): error TS2339: Property 'isNaN' does not exist on type 'NumberConstructor'.
add.ts(5,31): error TS2339: Property 'isNaN' does not exist on type 'NumberConstructor'.
```

通过谷歌，你会发现问题出在当前使用版本的api在ts中并不支持！解决方法是在根目录新建配置tsconfig.json

```
{
  "compilerOptions": {
    "lib": [
      "es2015"
    ]
  }
}
```

技巧

函数无返回值可以显式的声明`: void{}`

⚠️**可选参数**：参数后面加问号，`function xxx(n? :number): void {......}`

如果觉得代码很乱，需要优化，就使用提取函数法，把功能提取成一个函数。

```js
if (!n) {
    n = 1
}
// 优化为
n = n || 1
```

interface：接口，声明后必须完全符合接口的写法，才不会报错，可以多，但是不能少！

public：类里面写public + 参数代表student有三个属性，相当于把变量声明和赋值(this.name = name)给精简了；

函数：参数和返回值都可以规定类型

# 家谱命令行程序

下面通过一个简单的命令行打印家谱的程序来进一步理解typescript类型的基本使用。

```js
function createTabs(n: number): string {
  return '----'.repeat(n);
}

class Person {
  public children: Person[] = []
  constructor(public name: string) {}
  addChild(child: Person): void {
    this.children.push(child)
  }
  introduceFamily(n?: number): void {
    n = n || 0;
    // 打印族谱
    console.log(`${createTabs(n)}${this.name}`)
    this.children.forEach((child) => {
      child.introduceFamily(n + 1)
    })
  }
}

const grandFather = new Person('王爷爷')
const child1 = new Person('王爸爸')
const child2 = new Person('王舅舅')
const child11 = new Person('王爸爸大儿子')
const child12 = new Person('王爸爸二儿子')
const child21 = new Person('王舅舅大儿子')
const child22 = new Person('王舅舅二儿子')
const child23 = new Person('王舅舅三儿子')
const child221 = new Person('王舅舅二儿子的女儿')

grandFather.addChild(child1)
grandFather.addChild(child2)
child2.addChild(child21)
child2.addChild(child22)
child2.addChild(child23)
child1.addChild(child11)
child1.addChild(child12)
child22.addChild(child221)

grandFather.introduceFamily()

// 返回如下
王爷爷
----王爸爸
--------王爸爸大儿子
--------王爸爸二儿子
----王舅舅
--------王舅舅大儿子
--------王舅舅二儿子
------------王舅舅二儿子的女儿
--------王舅舅三儿子
```
