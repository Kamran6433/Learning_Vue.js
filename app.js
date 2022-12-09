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
            ],
            todos: [
                'Clean Room',
                'Learn Vue.js',
                'Study for exams',
                'Learn Vue.js again'
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
        },
        removeTodo() {
            app.todos.pop()
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

var WHAT = new Vue({
    el: '#WHAT',
    data: {
        numbers: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    },
    computed: {
        oddNumbers: function() {
            return this.numbers.filter(function(number) {
                return number % 2 === 1
            })
        }
    }
});

var counter = new Vue({
    el: '#counter',
    data: {
        counter: 0
    }
});

var greeting = new Vue({
    el: '#greeting',
    methods: {
        say(message) {
            alert(message)
        },
        submit() {
            console.log('You have pressed enter.')
        }
    }
});

var check = new Vue({
    el: '#check',
    data: {
        checkedNames: [],
        selected: ''
    }
});