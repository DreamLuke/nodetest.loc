
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//var Vue = require('vue');
//const VueRouter = require('vue-router').default;
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import {mapGetters} from 'vuex';

Vue.use( VueRouter );
Vue.use( Vuex );

const store = new Vuex.Store({
    state: {
        balance: 75,
        urldata: [],

        newTitle: '',
        newPrice: '',

        date: '12345',

        addStatus: true,
        subtractStatus: true,
    },
    mutations: {
        ADD(state, price) {
            state.balance -= price
        },

        SUBTRACT(state, price) {
            state.balance += price
        },

        RESET(state, price) {
            state.balance += price
        },
    },
    actions: {
        add({state, dispatch, commit}, arr) {

            if(state.balance >= state.urldata[arr[0]].price && state.addStatus) {
                state.addStatus = false;
                state.urldata[arr[0]].number++;
                store.commit('ADD', state.urldata[arr[0]].price);

                axios.put('/table/' + arr[1] +'/', {
                    title: state.urldata[arr[0]].title,
                    number: state.urldata[arr[0]].number,
                    price: state.urldata[arr[0]].price,
                }).then((response) => {
                    axios.get('/get-date').then((response) => {
                        store.state.date = response.data.updated_at;
                        axios.get('/table').then((response) => {
                            state.urldata = response.data;
                            state.addStatus = true;
                        });
                    });
                });
            }
        },
        subtract({state, dispatch, commit}, arr) {
            if(state.urldata[arr[0]].number > 0  && state.subtractStatus) {
                state.subtractStatus = false;
                state.urldata[arr[0]].number--;
                store.commit('SUBTRACT', state.urldata[arr[0]].price);

                axios.put('/table/' + arr[1] +'/', {
                    number: state.urldata[arr[0]].number,
                }).then((response) => {
                    axios.get('/get-date').then((response) => {
                        store.state.date = response.data.updated_at;
                        axios.get('/table').then((response) => {
                            state.urldata = response.data;
                            state.subtractStatus = true;
                        });
                    });
                });
            }
        },

        reset({state, dispatch, commit}, arr) {
            while(state.urldata[arr[0]].number > 0) {
                store.commit('RESET', state.urldata[arr[0]].price);
                state.urldata[arr[0]].number--;
            }
            //console.log('balance ' + state.balance);

            axios.put('/table/' + arr[1] +'/', {
                number: state.urldata[arr[0]].number,
            }).then((response) => {
                axios.get('/get-date').then((response) => {
                    store.state.date = response.data.updated_at;

                    axios.get('/table').then((response) => {
                        this.urldata = response.data;
                        state.urldata = response.data;
                    });
                });
            });
        },

        addPosition({state, dispatch, commit}, inputArr) {
            state.newTitle = inputArr[0];
            state.newPrice = inputArr[1];

            if(state.newTitle == '') {
                state.newTitle = 'Новая позиция';
                // alert('Проверка 11111');
            }
            if(state.newPrice == '') {
                state.newPrice = 0;
            } else {
                state.newPrice = parseFloat(inputArr[1]);
            }

            axios.post('/table', {
                title: state.newTitle,
                number: 0,
                price: state.newPrice,
            }).then((response) => {

                axios.get('/get-date').then((response) => {
                    store.state.date = response.data.updated_at;

                    axios.get('/table').then((response) => {
                        state.urldata = response.data;
                        alert('Позиция успешно сохранена!');
                    });
                });


            });

        },


        updatePosition({state, dispatch, commit}, inputArr) {
            axios.put('/table-update/' + inputArr[2] +'/', {

                title: inputArr[0],
                // number: state.urldata[arr[0]].number,
                price: inputArr[1],
            }).then((response) => {

                axios.get('/get-date').then((response) => {
                    store.state.date = response.data.updated_at;

                    axios.get('/table').then((response) => {
                        state.urldata = response.data;
                        alert('Редактирование произведено.');
                    });
                });
            });
        },

        remove({state, dispatch, commit}, arr) {
            // dispatch('reset', {amount: arr); не работает
            while(state.urldata[arr[0]].number > 0) {
                store.commit('RESET', state.urldata[arr[0]].price);
                state.urldata[arr[0]].number--;
            }

            axios.put('/table/' + arr[1] +'/', {
                number: state.urldata[arr[0]].number,
            }).then((response) => {
                axios.get('/get-date').then((response) => {
                    // store.state.date = response.data.updated_at;
                    store.state.date = $.ajax({async: false}).getResponseHeader('Date');

                    axios.delete('/table/' + arr[1] +'/').then((response) => {
                        axios.get('/table').then((response) => {
                            state.urldata = response.data;
                        });
                    });
                });
            });
        },
    },
    getters: {
    }
})

// store.commit('add');
// console.log(store.state.count);


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

/* Стандартный компонент Vue по умолчанию и Vue сделанные на основе примеров */
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('prop-component', require('./components/PropComponent.vue').default);
Vue.component('ajax-component', require('./components/AjaxComponent.vue').default);

/* Компоненты Vue сделанные для выполнения задания */
Vue.component('layout', require('./components/Layout.vue').default);
Vue.component('main-component', require('./components/MainPageComponent.vue').default);
Vue.component('table-component', require('./components/TableComponent.vue').default);
Vue.component('add-table-row-component', require('./components/AddTableRowComponent.vue').default);

var Main = require('./components/MainPageComponent.vue').default;
var Table = require('./components/TableComponent.vue').default;
var AddTableRow = require('./components/AddTableRowComponent.vue').default;
var UpdateTableRow = require('./components/UpdateTableRowComponent.vue').default;

var router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Main },
        { path: '/table', component: Table },
        { path: '/add-table-row', component: AddTableRow },
        { path: '/update-table-row', component: UpdateTableRow },
    ]
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store,
    router: router,
    data: function () {
        return {
            //urldata: [],
            store,
            i: 0,
            date: '54321',
        }
    },
    mounted() {
        console.log('Component mounted.');
        this.getDataFromOrderModel();
        // this.addDataToOrderModel();
    },
    methods: {
        getDataFromOrderModel: function () {


            axios.get('/table').then((response) => {
                // this.urldata = response.data;
                store.state.urldata = response.data;

                for(this.i = 0; this.i < store.state.urldata.length; this.i++) {
                    store.commit('ADD', store.state.urldata[this.i].price*store.state.urldata[this.i].number);
                }
            });

            axios.get('/get-date').then((response) => {
                store.state.date = response.data.updated_at;
            });
        },
    }
});
