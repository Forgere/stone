import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardsData: [
          {'name': '战士', 'simple': 'zs', 'subgroup': [{'cardname': '经典战士', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '萨满', 'simple': 'sm', 'subgroup': [{'cardname': '经典萨满', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '潜行者', 'simple': 'qx', 'subgroup': [{'cardname': '经典潜行', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '圣骑士', 'simple': 'sq', 'subgroup': [{'cardname': '经典圣骑', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '猎人', 'simple': 'lr', 'subgroup': [{'cardname': '经典战士', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '德鲁伊', 'simple': 'dly', 'subgroup': [{'cardname': '经典战士', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '术士', 'simple': 'ss', 'subgroup': [{'cardname': '经典战士', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '法师', 'simple': 'fs', 'subgroup': [{'cardname': '经典战士', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '牧师', 'simple': 'ms', 'subgroup': [{'cardname': '经典战士', 'cardsDetails': [1, 2, 3, 4]}]}]
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})
