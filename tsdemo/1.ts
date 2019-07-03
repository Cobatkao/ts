//枚举
{
  enum Color { Red = 1, Green, Blue }
  let c: Color = Color.Green;
  // console.log(c)

  //接口、可选属性
  interface Trip {
    bag: number;
    kettle: number;
    map: boolean;
    compass: boolean;
    destination: string;
    magazine?: boolean;
    biscuit: boolean;
  }
  function checkEquipment(ready: Trip): void {
    let ct: string[] = []
    for (let i in ready) {
      ct.push(i)
    }
    // console.log(`这次出行，我们带上的装备有: ${ct.join('、')}`)
  }
  const ready = { bag: 3, kettle: 3, map: true, compass: true, destination: 'AMAZON', biscuit: true }
  checkEquipment(ready)
}

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = {x: 5, y: 10}
// p1.x = 10

// 对象属性的额外检查
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// let mySquare = createSquare({ color: "red", width: 100 });
