// 函数
// 1.可选参数必须在参数列表的后面
{
  function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
      return firstName + ' ' + lastName
    } else {
      return firstName
    }
  }

  let r1 = buildName('gao', 'hang')
  let r2 = buildName('gao')
// let r3 = buildName('hao', 'hang', 'xi') // 报错
}

// 2.默认参数
{
  function buildName2(firstName = "gao", lastName: string): string {
    if (lastName) {
      return firstName + ' ' + lastName
    } else {
      return firstName
    }
  }

  let r1 = buildName2('gao', 'hang')
  // let r2 = buildName2('gao') // 报错 因为第二个参数没有传
  let r3 = buildName2(undefined, 'hang') // 第一个参数用默认值的话 必须显式 传undefined
}

// 3.剩余参数
{
  function buildName3(firstName: string, ...restOfName: string[]): string {
    return firstName + ' ' + restOfName
  }

  let r1 = buildName3('gao', 'hang')
  let r2 = buildName3('gao') // 报错 因为第二个参数没有传
  let r3 = buildName3(undefined, 'hang') // 第一 个参数用 默认值的话 必须显式 传undefined
  let r4 = buildName3('hao', 'hang', 'xi') 
}