<template>
  <div class="currentlist">
    <div class="list-content">
      <div class="card" v-for='(card,index) of currentCards'>
        <span class="list">{{index + 1 + '.'}}</span>
        <input type="text" :value="card" v-show="mode === 'edit'" @change='save(index)'>
        <span class="name" v-show="mode === 'present'">{{card}}</span>
        <el-button type="warning" size='mini' v-show="mode === 'edit'" @click='deleteCard(index)'>删除</el-button>
      </div>
    </div>
    <div class="actions" v-show="mode === 'present'">
      <el-button type="success" @click='goPlay'>去搓一把</el-button>
      <el-button type="warning" @click="mode = 'edit'">编辑卡牌</el-button>
    </div>
    <div class="actions" v-show="mode === 'edit'">
      <el-button type="success" v-show='isEnough !== true' @click='addOneCard'>添加一张</el-button>
      <el-button type="info" @click="mode = 'present'">完成编辑</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mode: 'present'
      }
    },
    computed: {
      currentCards () {
        return this.$store.state.currentCards
      },
      isEnough () {
        return this.$store.state.currentCards.length >= 30
      }
    },
    methods: {
      save (index) {
        let currentValue = event.target.value
        this.$store.commit('saveCard', {index: index, value: currentValue})
      },
      addOneCard () {
        this.$store.commit('addCard')
      },
      deleteCard (index) {
        this.$store.commit('deleteCard', {index})
      },
      goPlay () {
        if (this.currentCards.length < 30) {
          let state = confirm('你的牌小余30张')
          if (state) {
            this.$router.push('/currentLeft')
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  .currentlist{
    div.actions{
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
    .list-content{
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      .card{
        flex: 0 0 20%;
        margin-bottom: 20px;
        height: 40px
      }
    }
  }
</style>
