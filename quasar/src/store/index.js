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
      urldata: [ { 'title': 'ТАЙТЛ', 'number': 2, 'price': 10 }, { 'title': 'ТАЙТЛ 2', 'number': 4, 'price': 20 } ]
    },
    modules: {
      example
    },
    actions: {
      add ({ state, dispatch, commit }, arr) {
        alert('alert')
        // state.balance = 1000
      }
    }
  })

  return Store
}
