module.exports = {
    randomPokers(arr) {
        arr.sort((a, b) => Math.random() - 0.5)
    },
    print(arr) {
        var a = "";
        for (let i = 0; i < arr.length; i++) {
            a += arr[i].toString() + ' ';
        }
        console.log(a)
    }
}