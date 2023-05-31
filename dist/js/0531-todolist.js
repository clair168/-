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
            })
            itemName.focus();
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
