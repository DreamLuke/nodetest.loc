import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      header: 'Мой сайт по изучению Quasar',
      title: 'Главная страница',
      balance: 75,
      urldata: [ { 'title': 'ТАЙТЛ', 'number': 0, 'price': 10 }, { 'title': 'ТАЙТЛ 2', 'number': 0, 'price': 20 } ]
    },
    mutations: {
      ADD (state, price) {
        state.balance -= price
      },
      SUBTRACT (state, price) {
        state.balance += price
      },
      RESET (state, price) {
        state.balance += price
      }
    },
    modules: {
      example
    },
    actions: {
      add ({ state, dispatch, commit }, arr) {
        // alert('alert')
        // state.balance = 1000
        if (state.balance >= state.urldata[arr[0]].price) {
          // alert('alert inside')
          state.urldata[arr[0]].number++
          state.balance -= state.urldata[arr[0]].price
          // state.commit('ADD', state.urldata[arr[0]].price)
        }
      },
      subtract ({ state, dispatch, commit }, arr) {
        if (state.urldata[arr[0]].number > 0) {
          state.urldata[arr[0]].number--
          state.balance += state.urldata[arr[0]].price
          // state.commit('SUBTRACT', state.urldata[arr[0]].price)
        }
      },
      reset ({ state, dispatch, commit }, arr) {
        while (state.urldata[arr[0]].number > 0) {
          // store.commit('RESET', state.urldata[arr[0]].price);
          state.balance += state.urldata[arr[0]].price
          state.urldata[arr[0]].number--
        }
      },
      addPosition ({ state, dispatch, commit }, inputArr) {
        if (inputArr[0] === '') {
          inputArr[0] = 'Новая позиция'
        }
        if (inputArr[1] === '') {
          inputArr[1] = 0
        } else {
          inputArr[1] = parseFloat(inputArr[1])
        }
        state.urldata.push({ 'title': inputArr[0], 'number': 0, 'price': inputArr[1] })
        // alert('sfasfasdf')
      }
    }
  })

  return Store
}
