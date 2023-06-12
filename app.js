// HTML’s built-in input types won’t always meet your needs. 
// Fortunately, Vue components allow you to build reusable 
// inputs with completely customized behavior.
Vue.component('add-component', {
    template: '<li>This is a component called by add-component in the HTML. Its very simple as all it does is render a list item. I am reusable.</li>'
});
// Components are reusable Vue instances with a name:
Vue.component('complex-component', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

Vue.component('blog-post', {
    props: ['title'],
    template: '<h1>{{ title }}</h1>'
});

Vue.component('fontsize-demo', {
    props: ['post'],
    template: `
        <div class="fontsize-demo">
            <h2>{{ post.title }}</h2>
            <button v-on:click="$emit('enlarge-text')">
                Enlarge the text
            </button>
            <div v-html="post.content"></div>
        </div>
    `
});

Vue.component('custom-checkbox', {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean,
    },
    template: `
        <input
            type="checkbox"
            v-bind:checked="checked"
            v-on:change="$emit('change', $event.target.checked)"
        >
    `
});

Vue.component('random-number-generator', {
    props: ['newTopValue'],
    template: `
        <code><h2>Random Number Generator <br>
        <code>{{ randomNumber }}</code> <br>
        <button v-on:click="generateNumber">Click me to generate a random number from 0 to {{ topValue - 1 }}</button>
        </h2><br>
        <input type="text" v-model="topValue" placeholder="top value">
        </code>
    `,
    data() {
        return {
            randomNumber: 0,
            topValue: 100
        }
    },
    methods: {
        generateNumber() {
            this.randomNumber = Math.floor(Math.random() * this.topValue)
        }
    }
});

new Vue({ el: '#random' });

new Vue({
    el: '#custom-checkbox'
})

new Vue({
    el: '#fontsize-demo',
    data: {
        posts: [
            { 
            id: 1, 
            title: 'Example Header' 
            }
        ],
        postFontSize: 1
    }
});

new Vue({ el: '.title' });

Vue.component('list-paste', {
    data() {
        return {
            props: ['language'],
            listOfLanguagesIKnow: [
                { id: 1, text: 'Python' },
                { id: 2, text:'C' },
                { id: 3, text: 'JavaScript' },
                { id: 4, text: 'Java' },
                { id: 5, text: 'Vue.js' },
                { id: 6, text: 'Bulma' },
                { id: 7, text: 'Flask' }
            ]
        }
    },
    template: '<liOfLanguagesIKnow">{{ language.text }}</li>'
});

new Vue({ el: '#components-demo' });

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

// When you reference elements in Vue, you're able to access many of the elements methods and attributes to grab information about them.
new Vue({
    el: '#vue-refs',
    data: {
        output: 'my cat'
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs);
            this.output = this.$refs.giveitaname.value;
        }
    }
});

new Vue({
    el: '#stylinggg',
    data: {
        styleObject: {
            color: 'red',
            fontSize: '20px'
        }
    },
    methods: {
        changeColour: function(event) {
            console.log(this.styleObject.color);
            this.styleObject.color.value = event;
        },
        changeFont: function(event) {
            console.log(this.styleObject.fontSize);
            this.styleObject.fontSize.value = event;
        }
    }
})