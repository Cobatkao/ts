const getInfo = function(name: string, age: number=33): string {
  if (age) {
    return `我的名字是${name},今年${age}岁了！`
  } else {
    return `我的名字是${name}，年龄保密!`
  }
}

console.log(getInfo('gaogao'))
// 我的名字是gaogao,今年33岁了！

const sum = function(a: number, ...rel: number[]) {
  return rel.reduce((acc, cur) => acc + cur, a)
}

console.log(sum(1,2,3,4,5)) //15