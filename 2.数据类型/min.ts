function add(a: string, b: string);
function add(a: number, b: number);
function add(a: any, b:any): any { // 兼容上面两种写法，支持多种形式的参数类型
  return a + b;
}

// console.log(add(1, 2));
// console.log(add('isaac', 'gao'));

enum Gender {
  Male,
  Female
}

interface Person {
  gender: Gender,
  age: number,
}

function merry(a: Person, b: Person): [Person, Person] {
  if (a.gender !== b.gender) {
    return [a, b]
  }
  throw new Error('性别相同不能结婚！')
}

let a = {gender: Gender.Male, age: 23};
let b = {gender: Gender.Female, age: 22};

console.log(merry(a, b));
