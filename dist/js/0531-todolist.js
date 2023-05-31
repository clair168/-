const init = () => {
    let addBnt = document.querySelector('#add-btn')
    let itemName = document.querySelector('#item-name')

    // 新增項目統一收納
    const doAddItem = () => {
        let value = itemName.value;

        if (!value) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            }).then(() => {//然後要幹嘛
                setTimeout(() => {//單次計時器
                    itemName.focus();
                }, 500)//數字太小動畫還沒跑完
            })

            return;
        }
    }

    addBnt.addEventListener('click', () => {
        doAddItem();
        console.log(value);
    })

    itemName.addEventListener('keyup', (e) => {
        if (e.key == 'Enter') {
            doAddItem();
        }
    })
}





init();
