const database = {
    set(key, value) {
        value = JSON.stringify(value);
        localStorage.setItem(key, value)
    },
    get(key) {
        let value = localStorage.getItem(key);
        if (value) {
            value = JSON.stringify(value);
        }
        return value;
    },
    remove(key) {
        localStorage.setItem(key, value);
    }
}

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
                    }, 500)//數字太小動畫還沒跑完，0.5秒後再鎖定
                })
                return;
            }
            this.pending.push(value);
            this.itemValue = '';
            this.$refs.itemValue.focus();
        },
        toDone(index) {
            let value = this.pending[index];
            this.done.push(value);
            this.pending.splice(index, 1);
        },
        toPenging(index) {
            let value = this.done[index];
            this.pending.push(value);
            this.done.splice(index, 1);
        }
    }
}).mount('#app');