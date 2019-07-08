#!/usr/bin/env ts-node
let p3: number = parseInt(process.argv[2])
let p4: number = parseInt(process.argv[3])

if (Number.isNaN(p3) || Number.isNaN(p4)) {
  console.warn('对不起哦，只接收数字类型!')
  process.exit(1)
}

console.log(p3 - p4)