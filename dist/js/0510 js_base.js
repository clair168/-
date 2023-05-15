let age = 18;
let firstName = 'David';
let lastName = 'Lin';
let country = 'TW';

// 淺藍是變數，橘色是變數的值，包起來=文字
// '放字元' "放字串"
// 字元 char ,強型態語言時,一次只能塞一個


console.log('(' + country + ') ' + firstName + ' ' + lastName);
console.log(`(${country}) ${firstName} ${lastName}`);

let num1 = 1;
let num2 = 1.2;
let num3 = num1 + num2;
let num4 = '10'; //文字
let num5 = num1 + num4; //num4不能轉換成數字
let num6 = num1 - num4; //num可轉換成數字，優先權
let num7 = num1 * num4;
let num8 = num1 / num4;
let num9 = num1 % num4;
let num10 = num1 + 'a';

console.log(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10,)

let num11 = parseInt(num1, 10) + parseInt(num4, 10);
//大小寫敏感
let num12 = +num1 + +num4;
let num13 = +num1 + +'a';
console.log(num11, num12, num13);

let s1 = 'S1 \t S1';
// 字串 string 
let s2 = "S2 \t S2";

// escape \
// \n -> new line
// \r\n -> new line
// \t -> tab

console.log(s1);
console.log(s2);

console.log(num1, num1.toString(), typeof num1, typeof num1.toString());


//布林 boolean
//只要不是 0 / false / 空格，就是true
let b1 = true;
let b2 = false;
let b3 = 1;
let b4 = 0;
let b5 = 's';
let b6 = '';
let b7 = -1;
let b8 = 2;
//以下測試
if (b7) {
    console.log('Yes');
} else {
    console.log('No');
}

//陣列array
let students = [1, 2, 3, 4]
console.log(students);

students.push(5); //加入5
console.log(students);

console.log(students[0]);//第0個=1
console.log(students.join('::')); // 值中間加入::

let index = students.indexOf(2);
let index1 = students.indexOf(3);
//找這個數字是第幾個索引，2是[1,2,3,4]的第一個，所以回傳1
console.log(index);
console.log(index1);

students.splice(index, 1);
//減掉第1個索引
console.log(students);

//迴圈
let nums = [40, 50, 60, 70, 80];

console.log('調整前');
//nums=陣列
nums.forEach((snum, index) => {
    console.log(`第 ${index + 1} 位學生: ${snum}`);
    nums[index] = snum + 20;
})
//上下一樣
nums.forEach(function (snum, index) {
    console.log(`第 ${index + 1} 位學生: ${snum}`);
    nums[index] = snum + 20;
})

console.log('調整後');
nums.forEach((snum, index) => {
    console.log(`第 ${index + 1} 位學生: ${snum}`);
});


let students100 = [];
for (let sindex = 0; sindex < 100; sindex++) {
    students100[sindex] = Math.ceil(Math.random() * 100);
}

console.table(students100);


const a1 = function () {
    console.log('Origin function');
}

const a2 = () => {
    console.log('Arror function');
}

nums.forEach(function (snum, index) {
    console.log(`第 ${index + 1} 位學生: ${snum}`);
})

const add20 = function (snum, index) {
    console.log(`具名函數--第 ${index + 1} 位學生: ${snum}`);
}

nums.forEach(add20);


const addNum = (originNum, addNum) => {
    // let originNum = 40;
    // let addNum = 20;
    originNum = +originNum;
    addNum = +addNum;
    // 判斷是否真的是數字
    let total = originNum + addNum;
    // 判斷是否超過一百分
    console.log(`In function: ${total}`);
    return total;
}

let students1 = [40, 50, 80, 75];
students1.forEach((s, index) => {
    let add = 30;
    students1[index] = addNum(s, add);
});


console.table(students1);

//物件&陣列
let students3 = [];
students3.push({
    name: 'David',
    num: 40
});

students3.push({
    name: 'John',
    num: 50
});

students3.push({
    name: 'Helen',
    num: 80
});

students3.push({
    name: 'Mary',
    num: 20
});

let add = 30;
students3.forEach((student, index) => {
    console.log(`Student ${student.name}: ${student.num}`);
    student.num = addNum(student.num, add);
    students3[index] = student;
})


// students.forEach((s, index) => {
//     students[index] = addNum(s, add);
//     console.log(`${studentNames[index]}: ${s}`);
// });

//迴圈99乘法表
for (let start = 1; start <= 9; start++) {
    for (let end = 1; end <= 9; end++)
        console.log(`${start}*${end}=${start * end}`)
}