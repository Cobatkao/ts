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