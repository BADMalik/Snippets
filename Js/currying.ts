function curry(func: Function): Function {
  console.log(func, "First");
  return function curried(this: any, ...args: Array<Function>): Function {
    console.log(args, "Args");
    if (args.length >= func.length) {
      console.log(">", args, func);

      return func.apply(this, args);
    } else {
      return function (this: any, ...args2: Array<Function>): Function {
        console.log(args.concat(args2), "concat");
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a: number, b: number, c: number) {
  console.log("SUM  PLEASE", a + b + c);
  return a + b + c;
}

let curriedSum = curry(sum);
console.log("curry1");

console.log(curriedSum(10, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 5)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(9));
