let pokers = [];//扑克牌数组
let Poker = require("./poker");
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 13; j++) {
        pokers.push(new Poker(i, j))
    }
}
pokers.push(new Poker(null, 14), new Poker(null, 15));
let util = require('./util');
util.randomPokers(pokers);
//发牌
let player1 = pokers.slice(0, 17);
let player2 = pokers.slice(17, 34);
let player3 = pokers.slice(34, 51);
let desk = pokers.slice(51);
//玩家手牌
console.log("玩家1：")
util.print(player1);

console.log("玩家2：")
util.print(player2);

console.log("玩家3：")
util.print(player3);

console.log("底牌：")
util.print(desk);

