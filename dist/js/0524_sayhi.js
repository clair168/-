const sayHi = () => {
    let name = document.querySelector('#name')

    if (!name) {
        alert('沒有輸入框');
        return;
    }//驚嘆號是沒有

    if (!name.value) {
        alert('請輸入姓名');
        return;
    }

    let response = document.querySelector('#response');
    response.innerHTML = `Hi!,${name.value}`;
    name.value = '';
    name.focus();//輸入的"|"
}

let hi = document.querySelector('#hi')
hi.addEventListener('click', sayHi);