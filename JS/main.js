new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        style: ''
    },
    methods: {
        changeText(){
            this.title = 'Googbye!'
        }
    }
});