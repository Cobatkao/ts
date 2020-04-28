// 1.this
// 1.1函数被调用时才能确定this的指向
// 1.2还必须搞清楚调用时的上下文才能确定
// let deck = {
//   suit: ['hearts', 'spades', 'clubs', 'diamonds'],
//   cards: Array(52),
//   createCardPicker: function() {
//     var that = this
//     return function() {
//       let pickedCard = Math.floor(Math.random() * 52)
//       let pickedSuit = Math.floor(pickedCard / 13)
//       return {
//         suit: that.suit[pickedSuit],
//         card: pickedCard % 13
//       }
//     }
//   }
// }

// let cardPicker = deck.createCardPicker()
// console.log(cardPicker)
// let pickedCard = cardPicker()

// console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);

interface Card {
  suit: string
  card: number
}

interface Deck {
  suit: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}

// this作为参数传入: Deck后，this.suit就可以推断出类型是deck，为数组
let deck: Deck = {
  suit: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)
      return {
        suit: this.suit[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}

let cardPicker = deck.createCardPicker()
console.log(cardPicker)
let pickedCard = cardPicker()

console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)

// this参数在回调函数内
// UIElement接收一个函数作为参数
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void
}

// class Handler {
//   type: string
//   onClickBad(this: void, e: Event) {
//     this.type = e.type
//   }
// }

class Handler {
  type: string
  onClickBad = (e: Event) => { // 使用箭头函数达成 既满足接口的约定 又能访问到箭头函数
    this.type = e.type
  }
}

let h = new Handler()
let uiElement: UIElement = {
  addClickListener() {

  }
}

uiElement.addClickListener(h.onClickBad) 
// The 'this' types of each signature are incompatible. Type 'void' is not assignable to type 'Handler'.
// 此时会报错 因为这里传入的h.onClickBad 中的this: Handler与this: void类型不符合
// 解决的办法是把this: Handler 改为 this: void 但这与我们规范this类型的目的违背了 且this为void 无法访问this.type
// Property 'type' does not exist on type 'void'.
// 此时可以使用箭头函数解决 见上


// 函数重载
// 1.先写冲载的定义（函数名，参数，返回值等等） 最后写重载的实现
// 2.最精确的定义要卸载最前面