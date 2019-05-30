var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + '' + lastName;
    }
    return User;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new User('Hang', 'Gao');
console.log(greeter(user));
var foo;
foo = ['12', 12];
foo[0].substr(1);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log('c ', c);
