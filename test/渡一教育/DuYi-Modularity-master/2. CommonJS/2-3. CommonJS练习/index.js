let pokers = []; //扑克牌的数组
let Poker = require("./poker") //导入扑克牌的构造函数
for (let i = 1; i <= 13; i++) {//循环牌面
    for (let j = 1; j <= 4; j++) {//循环花色
        pokers.push(new Poker(j, i));
    }
}
pokers.push(new Poker(null, 14), new Poker(null, 15));
console.log(pokers)
// 打乱扑克牌
let util = require("./util");
util.sortRandom(pokers);
console.log(pokers)

// let player1 = pokers.slice(0, 17);
// let player2 = pokers.slice(17, 34);
// let player3 = pokers.slice(34, 51);
// let desk = pokers.slice(51)

// console.log("玩家1：")
// util.print(player1);

// console.log("玩家2：")
// util.print(player2);

// console.log("玩家3：")
// util.print(player3);

// console.log("桌面：")
// util.print(desk);