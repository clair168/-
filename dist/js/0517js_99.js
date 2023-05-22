//alert(123);

//單選
let lis = document.querySelector('#main');
console.log(lis);

//操控內容
main.innerHTML = 'Oops';


//多選
let menu = document.querySelectorAll('#menu li');
console.log(menu);

let num1 = document.querySelector('#num-1');
let showBtn = document.querySelector('#show-btn');

//
showBtn.addEventListener('click', () => {
    num1.value = '12345';
});

//99乘法表

const genTable = () => {
    let n1 = document.querySelector('#n1');
    let n2 = document.querySelector('#n2');
    //抓n1&n2的值
    //console.log(n1.value, n2.value);

    //不能是沒填/0以下
    if (!n1) { return; }
    if (n1.value <= 0) { return; }
    if (!n2) { return; }
    if (n2.value <= 0) { return; }

    //down???????????????????????????????????????????????????????????????????
    let thead = [];
    thead.push('');

    //抓n1值=>抓n2值=>push出來長的形狀，i&j是為了push做的代號
    let result = {};
    for (let i = 1; i <= n1.value; i++) {
        thead.push(i);
        result[i] = [];
        for (let j = 1; j <= n2.value; j++)
            result[i].push(i * j);
    }

    let table = document.querySelector(`#table`);
    let theadTr = table.querySelector(`thead tr`);

    theadTr.innerHTML = '';
    theadTr.forEach((n, nindex) => {
        theadTr.innerHTML += `<th>${n}</th>`;
        // theadTr.innerHTML = theadTr.innerHTML + `<th>${n}</th>`; 
    })
    console.log(thead);

    let tbody = table.querySelector('tbody');
    let tbodyTr = '';
    tbody.innerHTML = '';

    for (let row in result) {
        tbodyTr = `<tr><td>${row}</td>`;
        let columns = result[row];
        columns.forEach(value => {
            tbodyTr += `<td>${value}</td>`;
        });

        tbodyTr += '</tr>';
        tbody.innerHTML += tbodyTr;
    }
}

let make = document.querySelector('#make');
make.addEventListener('click', genTable);

