import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    valute: [],
  },
  getters: {
    GET_VALUTE: (state) => state.valute,
  },
  mutations: {
    SET_VALUTE(state,valute) {
      state.valute = valute
    }
  },
  actions: {
    async FETCH_VALUTE({commit}){
      try {
        const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js',{
        })
            commit('SET_VALUTE', response.data.Valute)
    }
    catch (error) {
        console.log(error)
    }
    },
  },
  modules: {
  }
})
