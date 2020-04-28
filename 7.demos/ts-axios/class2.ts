// 存取器 通过getters和setters截取对对象成员的访问
// 使用场景：如设置fullname时触发一些额外逻辑
let psd = "secret1 password"

class Employee {
  private _fullName
  get fullName(): string {
    return this._fullName
  }
  set fullName(newName: string) {
    if (psd && psd === "secret password") {
      this._fullName = newName
      return
    }
    console.warn("Error: an error occured due to Unauthorized Update action...")
  }
}

let employee = new Employee()
employee.fullName = "Isaac Gao"
if (employee.fullName) {
  console.log(employee.fullName);
}

// 类的静态属性 存在类的本身 而不在类的实例 
// 因此静态属性可以通过类的本身来访问
// 因为是静态属性static 只存在于类的本身 所以是Grid.origin.x 而不是 this.origin.x
interface Point {
  x: number,
  y: number
}

class Grid {
  static origin = {x: 0, y: 0}
  public scale: number
  constructor(scale: number) {
    this.scale = scale
  }
  calculateDistanceFromOrigin(point: Point): number {
    let xDis = point.x - Grid.origin.x
    let yDis = point.y - Grid.origin.y
    return Math.sqrt(xDis*xDis + yDis*yDis) * this.scale
  }
}
let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)
console.log(grid1.calculateDistanceFromOrigin({x: 3, y: 4})); // 5
console.log(grid2.calculateDistanceFromOrigin({x: 3, y: 4})); // 25

// 抽象类 abstract
// 1.通常作为派生类的基类使用 不能被直接实例化
// 2.抽象方法只能包含在抽象类中，抽象类中可以包含抽象方法和非抽象方法
// 3.子类继承抽象类，实现抽象方法（重点）
abstract class Beast {
  abstract eat(): void
  move(): void {
    console.log('run run run...');
  }
}
class Tiger extends Beast {
  constructor() {
    super()
  }
  eat() {
    console.log('eat eat eat...');
  }
  move() {
    console.log('tiger says');
    super.move()
  }
}
let t = new Tiger()
t.eat()
t.move()

// 复杂的例子
abstract class Department {
  name: string
  constructor(name: string) {
    this.name = name
  }
  printName(): void {
    console.log('Department name is ' + this.name); 
  }
  abstract printMeeting(): void
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing')
  }
  printMeeting(): void {
    console.log('Accounting Department meets each Monday!'); 
  }
  generateReport(): void {
    console.log('Generating accounting reports......');
  }
}

// let department: Department = new AccountingDepartment() // 只有派生类才能被实例化
let department: AccountingDepartment = new AccountingDepartment() // 只有派生类才能被实例化
department.printName()
department.printMeeting()
// department.generateReport() // 报错 因为上面已经定义了department为Department类型 所以不存在generateReport方法 解决办法是改为AccountingDepartment
department.generateReport()

// 类的高级技巧
// typeof 取Greeter的类的类型 而不是 实例的类型