var count = 0; //需要隐藏的内部实现

console.log("util模块执行了!")
exports.a = 1;
module.exports = {
    b: function () { }
}
console.log(exports, module.exports)