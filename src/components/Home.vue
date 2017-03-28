<template>
  <div class='home'>
    <ul>
      <li class="career" :class="somecareer.simple" v-for='somecareer of cardsGroup' @click='dealwith(somecareer)'>
        <div class="career-top">
          <div class="title"></div>
          <div class="career-name">{{somecareer.name}}</div>
        </div>
      </li>
    </ul>
    <div class="subgroup">
      <div class="card" v-for='card of currentCareerCards'>
        <div class="card-name">{{card.cardname}}</div>
        <div class="card-desc">{{card.desc}}</div>
        <div class="actions">
          <el-button type="success">选定套牌</el-button>
          <el-button type="warning">编辑套牌</el-button>
          <el-button type="danger">删除套牌</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentCareerCards: null
      }
    },
    computed: {
      cardsGroup () {
        return this.$store.state.cardsData
      }
    },
    methods: {
      dealwith (which) {
        this.currentCareerCards = which.subgroup
      }
    }
  }
</script>

<style lang="scss">
  #app{
  }
  .home{
    overflow-x: hidden;
    width: 100%;
    display: flex;
  }
  ul{
    flex: 0 0 140px;
    margin: 0;
    .career{
      flex: 1;
      display: block;
      margin-bottom: 15px;
      .career-top{
        text-align: left;
        display: flex;
        justify-content: flex-start;
      }
      &:last-child{
        margin-bottom: 0;
      }
      .title{
        flex: 0 0 70px;
        display: inline-block;
        height: 70px;
        background: url('../assets/heroes-icon.png') left center no-repeat;
      }
      .career-name{
        height: 70px;
        display: inline-block;
        line-height: 70px;
        text-align: center;
      }
      &.fs{
        .title{
          background-position: -11px -80px;
        }
      }
      &.lr{
        .title{
          background-position: -84px -80px;
        }
      }
      &.zs{
        .title{
              background-position: -230px -80px;
        }
      }
      &.sq{
        .title{
          background-position: -156px -80px;
        }
      }
      &.dly{
        .title{
          background-position: -307px -80px;
        }
      }
      &.ss{
        .title{
          background-position: -385px -80px;
        }
      }
      &.sm{
        .title{
          background-position: -458px -80px;
        }
      }
      &.ms{
        .title{
          background-position: -543px -80px;
        }
      }
      &.qx{
        .title{
          background-position: -618px -80px;
        }
      }
    }
  }
  .subgroup{
    flex: 1;
    border: 1px solid #b88b50;
    margin: 12px 12px 10px 0;
    .card{
      padding: 12px;
      border-bottom: 1px solid #b88b10;
      div{
        line-height: 36px;
      }
    }
  }
</style>
