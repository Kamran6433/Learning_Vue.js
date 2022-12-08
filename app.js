Vue.component('add-component', {
    template: '<li>This is a component called by add-component in the HTML. Its very simple as all it does is render a list item. I am reusable.</li>'
});

Vue.component('complex-component', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app5 = new Vue({
    el: '#app5',
    data: {
        groceryList: [
            { id: 0, text: 'This is me!' },
            { id: 1, text: 'Dont forget me >:/' },
            { id: 2, text: 'You shall not pass!!' }
        ]
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
                {username: 'Haider'},
                {username: 'Travis'}
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

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: false
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
        message: 'Click below'
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        }
    } 
});

var hello = new Vue({
    el: '#hello',
    data: {
        styleObject: {
            color: 'red',
            fontSize: '100px',
        }
    }
});

var example1 = new Vue({
    el: '#for-loop-example',
    data: {
        why: 'Why?',
        cars: [
            { message: 'BMW' },
            { message: 'Mercedes' },
            { message: 'Tesla' },
            { message: 'Lamborghini' }
        ]
    }
});

var vvv = new Vue({
    el:'#v-for-object',
    data() {
        return {
            object: {
                title: 'Hello World',
                author: 'Kamran Ahmed',
                integer: 123,
                boolean: true,
                float: 99.9999999,
                char: '\''
            }
        }
    },
    methods: {
        remove(name) {
            vvv.$delete(vvv.object, name)
        }
    }
});