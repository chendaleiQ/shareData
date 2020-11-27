// // const obj = {
// //     a: 1,
// //     b: 2,
// // };
// // obj.a = obj.b;
// // console.log(obj.a, obj.b);
// const obj = {
//     a: 1,
//     b: 2,
//     sum: () => {
//         console.log(this)
//         return this.a + this.b;
//     }
// };
// console.log(obj.sum());
// const getSum = (...args1) => (...args2) => args1.concat(args2).reduce((a, b) => a * b);

// const result = getSum(1, 2, 3)(4, 5, 6)
// console.log(result)
// var p = {
//     value: "",
//     info: function () {
//         alert(this.value);
//     }
// }
// function method({ a = 1, b = 2, c = 3 }) {
//     console.log(a, b, c);
// }
// method();
// let div = document.querySelectorAll('div');
// console.log(div)

// const urls = ['1.json', '2.json'];
// const result = [];
// const proms = urls.map(async (url) => {
//     r = {
//         requestTime: new Date()
//     }
//     r.data = await fetch(url).then(resp => resp.json())
//     r.responseTime = new Date();
//     result.push(r);
// })
// Promise.all(proms).then(() => {
//     console.log(result)
// })
// const urls = ["1.json", "2.json"]; //模拟urls数组
// const results = []; //用于存放结果
// const proms = urls.map(async (url) => {
//     const r = {
//         requestTime: new Date()
//     }
//     r.data = await fetch(url).then(resp => resp.json());
//     r.responseTime = new Date();
//     results.push(r);
// })
// Promise.all(proms).then(() => {
//     console.log(results);
// })
async function test() {
    const div = document.getElementById("test"); //得到某个div dom
    const divProxy = createDomProxy(div); //创建它的代理
    while (true) {//使用一个死循环，是为了不断的监听它被点击
        const e = await divProxy.onclick;//等待它被点击，e是事件参数
        console.log("div被点击了", e) //被点击后运行的代码
    }
}

function createDomProxy(dom) {
    return new Proxy(dom, {
        get(target, prop) {
            if (prop.startsWith("on")) {
                return new Promise(resolve => {
                    target.addEventListener(prop.replace('on', ''), e => {
                        resolve(e);
                    }, { once: true })
                })
            }
            return Reflect.get(target, prop);
        }
    })
}
test();
