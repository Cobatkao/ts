console.log('hello world')

let n: any = '123'
console.log((<string>n).split(''));

interface Shape {
    head: string;
    body: string;
}
interface Human {
    readonly name: string;
    age: number;
    shape: Shape;
    say(word: string): void;
    likedgame?: Array<string>; // 喜欢或者什么都不喜欢，可选属性
}
let isaacgao: Human = {
    name: 'isaac',
    age: 24,
    shape: {
        head: "⭕️",
        body: "正方形"
    },
    say(word: string) {
        console.log(this.name + ' 说 ' + word) // isaac 说 hello world
    },
    likedgame: ['pokemon', 'monster hunter']
}

isaacgao.say('hello world')