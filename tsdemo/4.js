var ShirTSize;
(function (ShirTSize) {
    ShirTSize[ShirTSize["XS"] = 0] = "XS";
    ShirTSize[ShirTSize["S"] = 1] = "S";
    ShirTSize[ShirTSize["M"] = 2] = "M";
    ShirTSize[ShirTSize["L"] = 3] = "L";
    ShirTSize[ShirTSize["XL"] = 4] = "XL";
})(ShirTSize || (ShirTSize = {}));
function assertNever(value) {
    console.log(Error("Unexpected value '" + value + "'"));
}
function prettyPrint(size) {
    switch (size) {
        case ShirTSize.S: console.log("small");
        case ShirTSize.M: return "medium";
        case ShirTSize.L: return "large";
        case ShirTSize.XL: return "extra large";
        case ShirTSize.XS: return "extra small";
        default: return assertNever(size);
    }
}
console.log(prettyPrint(ShirTSize.L));
