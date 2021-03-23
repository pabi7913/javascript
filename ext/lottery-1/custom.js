//①設置隨機亂數取得函式 
function getRandom(x) {
    return Math.floor(Math.random() * x) + 1
}
// ②設陣列為空集合（取得範圍38取6）
let arr = []

// ③設取的範圍8取1
let n = getRandom(8);

// ④設範圍取得隨機亂數
function getPowerNum() {
    // 總共有6個位子，1次放1個位子
    for (a = 1; a <= 6; a++) {
        // 從38個數裡面取
        let num = getRandom(38);
        // [沒有的數]index都叫做-1,0開始的都是有位子的
        if (arr.indexOf(num) > -1) {
            // ★不重複做法
            // 遇到重複的，要-1個位子
            a--;
            // 換下個，重新放上數字（直到不重複）
            continue;
        } else {
            // 加後面1個數字
            arr.push(num);
        }
    }
    // ⑤排序：依照首字排序（不是真的排序14,2,3,5）
    // arr.sort();

    // 真正排序：由小到大
    arr.sort(function (a, b) { return a - b });

    // 真正排序：由大到小
    // arr.sort(function(a,b){return b-a});

    // ⑦設置傳回值
    return `第一區號碼為： ${arr.join(",")}，第二區號碼為： ${n}`;
}

// ⑧彈出視窗答案
alert(getPowerNum())

document.write(getPowerNum())