import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardsData: [
          {'name': '战士', 'simple': 'zs', 'subgroup': [{'desc': '这是一个套牌', 'cardname': '经典战士', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '萨满', 'simple': 'sm', 'subgroup': [{'desc': '这是一个套牌', 'cardname': '经典萨满', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '潜行者', 'simple': 'qx', 'subgroup': [{'desc': '这是一个套牌', 'cardname': '经典潜行', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '圣骑士', 'simple': 'sq', 'subgroup': [{'desc': '这是一个套牌', 'cardname': '经典圣骑', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '猎人', 'simple': 'lr', 'subgroup': [{'desc': '这是一个套牌', 'cardname': '经典战士', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '德鲁伊', 'simple': 'dly', 'subgroup': [{'desc': '这是一个套牌', 'cardname': '经典战士', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '术士', 'simple': 'ss', 'subgroup': [{'desc': '这是一个套牌', 'cardname': '经典战士', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '法师', 'simple': 'fs', 'subgroup': [{'desc': '这是一个套牌', 'cardname': '经典战士', 'cardsDetails': [1, 2, 3, 4]}]},
          {'name': '牧师', 'simple': 'ms', 'subgroup': [{'desc': '这是一个套牌', 'cardname': '经典战士', 'cardsDetails': [1, 2, 3, 4]}]}],
    currentCards: [5, 4, 3, 2, 1]
  },
  mutations: {
    addCard: state => state.currentCards.push(null),
    deleteCard: (state, payload) => state.currentCards.splice(payload.index, 1),
    saveCard: (state, payload) => { state.currentCards[payload.index] = payload.value }
  }
})
