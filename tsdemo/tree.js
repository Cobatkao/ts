function createTabs(n) {
    return '----'.repeat(n);
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.children = [];
    }
    Person.prototype.addChild = function (child) {
        this.children.push(child);
    };
    Person.prototype.introduceFamily = function (n) {
        n = n || 0;
        // 打印族谱
        console.log("" + createTabs(n) + this.name);
        this.children.forEach(function (child) {
            child.introduceFamily(n + 1);
        });
    };
    return Person;
}());
var grandFather = new Person('王爷爷');
var child1 = new Person('王爸爸');
var child2 = new Person('王舅舅');
var child11 = new Person('王爸爸大儿子');
var child12 = new Person('王爸爸二儿子');
var child21 = new Person('王舅舅大儿子');
var child22 = new Person('王舅舅二儿子');
var child23 = new Person('王舅舅三儿子');
var child221 = new Person('王舅舅二儿子的女儿');
grandFather.addChild(child1);
grandFather.addChild(child2);
child2.addChild(child21);
child2.addChild(child22);
child2.addChild(child23);
child1.addChild(child11);
child1.addChild(child12);
child22.addChild(child221);
grandFather.introduceFamily();
