// function sum(...args) {
//     //args收集了所有的参数，形成的一个数组
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }
//     return sum;
// }

// console.log(sum())
// console.log(sum(1))
// console.log(sum(1, 2))
// console.log(sum(1, 2, 3))
// console.log(sum(1, 2, 3, 4))
function sum(...arg) {
    let num = 0;
    for (let i = 0; i < arg.length; i++) {
        num += arg[i];
    }
    return num;
}
console.log(sum(1, 2, 3, 4, 5))