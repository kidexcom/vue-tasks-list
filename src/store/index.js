import { createStore } from 'vuex'

export default createStore({
  state: {
    list:[
       {id:1, title: 'Title', status: 'done', date: '16.01.2023', descriptions: 'descriptions'}
    ]
  },
  getters: {
    status (state) {
      return state.list.filter(item => item.status)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
