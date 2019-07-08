enum ShirTSize {
  XS,
  S,
  M,
  L,
  XL
}

function assertNever(value: never): never {
  console.log(Error(`Unexpected value '${value}'`));
}

function prettyPrint(size: ShirTSize) {
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
