#!/usr/bin/env ts-node
let p7: number = parseInt(process.argv[2])
let p8: number = parseInt(process.argv[3])

if (Number.isNaN(p7) || Number.isNaN(p8)) {
  console.warn('对不起哦，只接收数字类型!')
  process.exit(1)
}

if (p8 === 0) {
  console.warn('除数不能是0');
  process.exit(2);
}

console.log(p7 / p8)
