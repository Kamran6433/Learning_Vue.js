Vue.component('component' {
    data() {
        return {
            
        }
    }
});


var app = new Vue({
    el: '#app',
    data() {
        return {
            value: 0,
            username: '',
            users: [
                {username: 'Kamran'},
                {username: 'Dayyan'},
                {username: 'Haider'}
            ]
        }
    },
    methods: {
        increment() {
            this.value += 1;
        },
        decrement() {
            this.value -= 1;
        },
        submit() {
            console.log(this.username);
        }
    }
});