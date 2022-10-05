function curry(func) {
    console.log(func, "First");
    return function curried() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args, "Args");
        if (args.length >= func.length) {
            console.log(">", args, func);
            return func.apply(this, args);
        }
        else {
            return function () {
                var args2 = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args2[_i] = arguments[_i];
                }
                console.log(args.concat(args2), "concat");
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}
function sum(a, b, c) {
    console.log("SUM  PLEASE", a + b + c);
    return a + b + c;
}
var curriedSum = curry(sum);
console.log("curry1");
console.log(curriedSum(10, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 5)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(9));
