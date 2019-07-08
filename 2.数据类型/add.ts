#!/usr/bin/env ts-node
let p1: number = parseInt(process.argv[2]);
let p2: number = parseInt(process.argv[3]);

if (Number.isNaN(p1) || Number.isNaN(p2)) {
  console.warn('对不起哦，只接收数字类型!');
  process.exit(1);
}

console.log(p1 + p2);