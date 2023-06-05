let vm = Vue.createApp({
    data() {
        return {
            pending: [],
            done: [],
            itemValue: '',
        }
    },
    methods: {
        doAddItem() {
            let value = this.itemValue;
            if (!value) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                }).then(() => {//然後要幹嘛
                    setTimeout(() => {//單次計時器
                        itemName.focus();
                    }, 500)//數字太小動畫還沒跑完，0.5秒後再鎖定
                })
                return;
            }
            this.pending.push(value);
        },
        toDone(index) {
            console.log(index);
            // 把代辦項目搬移到已完成資料內
            // 刪除目前代辦項目
        }
    }
}).mount('#app');