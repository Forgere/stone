<template>
  <div class="leftlist">
    <div class="actions">
      <el-button type="info" @click='reset'>再来一局</el-button>
    </div>
    <div class="list-content">
      <div class="left">
        <div class="card" v-for='(card,index) of leftCards'>
          {{card}}
          <el-button type="primary" size="mini" @click='use(index, card)'>ok</el-button>
        </div>
      </div>
      <div class="right">
        <div class="card" v-for='(card,index) of usedCards'>
          {{card}}
          <el-button type="primary" size="mini" @click='reback(index, card)'>ok</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        usedCards: [],
        leftCards: []
      }
    },
    computed: {
      // leftCards () {
      //   return this.$store.state.currentCards
      // }
    },
    methods: {
      use (index, something) {
        this.leftCards.splice(index, 1)
        this.usedCards.push(something)
      },
      reback (index, something) {
        this.leftCards.push(something)
        this.usedCards.splice(index, 1)
      },
      reset () {
        const cards = [].concat(this.$store.state.currentCards)
        this.leftCards = cards
        this.usedCards = []
      }
    },
    mounted () {
      const cards = [].concat(this.$store.state.currentCards)
      this.leftCards = cards
    }
  }
</script>
<style lang='scss'>
  .leftlist{
    .list-content{
      display: flex;
      .left,.right{
        flex: 1;
      }
      .left{
        border-right: 1px solid #b88b50;
      }
    }
    .actions{
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
