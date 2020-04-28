// 泛型
// 如下 入参类型与返回值类型本意应该是一致的 但是传入number却返回string 这时候我们需要引入类型变量 只用于表示类型
{
  function identity1(arg: any): any {
    return arg + 'hello'
  }

  let rel1 = identity1('hello')
  let rel2 = identity1(1)
  console.log(rel2)
}


// T帮助我们捕获用户传入的类型 它帮助我们跟踪函数中使用的类型信息
// 以下的函数就称之为泛型 它可以适用于多个类型
{
  function identity2<T>(arg: T): T {
    return arg
  }
  // 它有两种调用方式
  let output = identity2<string>('myString') // 手动传入T的类型
  let output1 = identity2('myString') // 利用类型推断 更推荐

  function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length) // 此时报错 因为无法确定T的类型 所以不一定有length 改写为T[] T数组显然有length属性
    return arg
  }
}

// 泛型类型 泛型接口
{
  function identity3<T>(arg: T): T {
    return arg
  }

  // 定义泛型接口
  // interface GenericsIdentity {
  //   <T>(arg: T): T
  // }
  // 推荐用法 把T作为接口的参数拿出来 使其他成员使用该参数类型 并且调用时就可以知道是什么类型
  interface GenericsIdentity<T> {
    (arg: T): T
  }

  let myIdentity: GenericsIdentity<number> = identity3
  let myIdentity1: { <T>(arg: T): T } = identity3 // 使用对象字面量的形式定义
}