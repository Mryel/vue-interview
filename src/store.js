import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    getDataList (state, moreDatas) {
      state.dataList = state.dataList.concat(moreDatas)
    }
  },
  getters: {
    getAverage: state => {
      if (state.dataList.length === 0) {
        return 0
      }
      var sum = 0
      state.dataList.forEach(item => {
        sum = sum + item.data
      })
      return (sum / state.dataList.length).toFixed(2)
    },
    getData: state => state.dataList
  },
  actions: {
    getDataCall (context, dataInfor) {
      // TODO
      mockGenerator(dataInfor.startIndex, dataInfor.count).then(data => {
        context.commit('getDataList', data)
      })
    }
  }
})
