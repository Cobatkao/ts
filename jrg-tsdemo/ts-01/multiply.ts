#!/usr/bin/env ts-node
let p5: number = parseInt(process.argv[2])
let p6: number = parseInt(process.argv[3])

if (Number.isNaN(p5) || Number.isNaN(p6)) {
  console.warn('对不起哦，只接收数字类型!')
  process.exit(1)
}

console.log(p5 * p6)
