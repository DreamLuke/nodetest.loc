
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

/*const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
});*/

const store = new Vuex.Store({
    state: {
        balance: 75,
        count: 0,
        urldata: [
            {'title':'Позиция 1', 'number':0, 'price':10},
            {'title':'Позиция 2', 'number':0, 'price':20},
            {'title':'Позиция 3', 'number':0, 'price':30},
        ],

        newTitle: '',
        newPrice: '',
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
        add({state, dispatch, commit}, index) {
            // store.commit('ADD', state.urldata[index].price);
            if(state.balance >= state.urldata[index].price) {
                // state.balance -= state.urldata[index].price;
                store.commit('ADD', state.urldata[index].price);
                state.urldata[index].number++;
            }
        },
        subtract({state, dispatch, commit}, index) {
            if(state.urldata[index].number > 0) {
                // state.balance -= state.urldata[index].price;
                store.commit('SUBTRACT', state.urldata[index].price);
                state.urldata[index].number--;
            }
        },
        reset({state, dispatch, commit}, index) {
            while(state.urldata[index].number > 0) {
                store.commit('RESET', state.urldata[index].price);
                state.urldata[index].number--;
            }
        },

        addPosition({state, dispatch, commit}, inputArr) {
            state.newTitle = inputArr[0];
            state.newPrice = parseFloat(inputArr[1]);

            if(state.newTitle == '') {
                state.newTitle = 'Новая позиция';
                // alert('Проверка');
            }
            if(state.newPrice == '') {
                state.newPrice = 0;
                // alert('Проверка');
            }
            var arr = {'title':state.newTitle, 'number':0, 'price':state.newPrice};
            state.urldata.push(arr);

            // this.$emit('addPosition', this.newTitle);
            //this.$emit('addPosition', arr);

            state.newTitle = '';
            state.newPrice = '';

            alert('Позиция успешно сохранена!');
        },
    },
    getters: {
        tasks (state) {
            return state.count;
        }
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


var router = new VueRouter({
    routes: [
        { path: '/', component: Main },
        { path: '/table', component: Table },
        { path: '/add-table-row', component: AddTableRow },
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
    methods: {
    }
});
