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
// this作为参数传入: Deck后，this.suit就可以推断出类型是deck，为数组
var deck = {
    suit: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suit[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
console.log(cardPicker);
var pickedCard = cardPicker();
console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onClickBad = function (e) {
        this.type = e.type;
    };
    return Handler;
}());
var h = new Handler();
var uiElement = {
    addClickListener: function () {
    }
};
uiElement.addClickListener(h.onClickBad);
// The 'this' types of each signature are incompatible. Type 'void' is not assignable to type 'Handler'.
// 此时会报错 因为这里传入的h.onClickBad 中的this: Handler与this: void类型不符合
// 解决的办法是把this: Handler 改为 this: void 但这与我们规范this类型的目的违背了 且this为void 无法访问this.type
