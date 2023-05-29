const calcLevel = () => {
    let number = document.querySelector('#number')

    if (!number) {
        alert('沒有輸入框');
        return;
    }//驚嘆號是沒有

    if (!number.value) {
        alert('請輸入姓名');
        return;
    }

    let response = document.querySelector('#response');
    response.innerHTML = `Hi!,${number.value}`;
    number.value = '';
    number.focus();//輸入的"|"
}

let level = document.querySelector('#level')
level.addEventListener('click', calcLevel);

let number = document.querySelector('#number');


number.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        calcLevel();
    }
})
