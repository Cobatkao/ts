// 泛型
function identity(arg) {
    return arg + 'hello';
}
var rel1 = identity('hello');
var rel2 = identity(1);
console.log(rel2);
