//filter
Vue.filter('capitalize', function (value){
    value = value.toString();
    return value.replace(/\b\w/g, function (l){
        return l.toUpperCase();
    });
});
//filter

//components (templates) !important
Vue.component('app-car', {
    data: function (){
        return {
            cars: [
                'BMW', 'Opel', 'Audi', 'Mercedes'
            ]
        }
    },
    template: '<div class="car"><p v-for="car in cars">{{car}}</p></div>'
})
//components (templates) !important
new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        style: '',
        value: '1',
        show: true,
        people: [
            {name: 'Alex', age: 18},
            {name: 'Mike', age: 22},
            {name: 'John', age: 21},
        ],
        text: ''
    },
    methods: {
        changeText(){
            this.title = 'Googbye!';
        },
        pow(value){
            if(value === 'qwerty'){
                alert("Are you joking me?!");
            }
            this.value = value;
        },
        /*changeReg(text){
            this.text = text.toUpperCase();
        }*/
    },
    computed: {
        doubleValue(){
            if(this.value !== ''){
                return Math.pow(this.value, 2);
            }
        }
    },
    filters: {
        lowerCase(value){
            return value.toLowerCase();
        }
    }
});