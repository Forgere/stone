<template>
  <div class="currentlist">
    <div class="list-content">
      <div class="card" v-for='card of currentCards'>
        {{card}}
      </div>
    </div>
    <div class="actions">
      <el-button type="success">去搓一把</el-button>
      <el-button type="warning">编辑卡牌</el-button>
      <el-button type="info">保存卡牌</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      currentCards () {
        return this.$store.state.currentCards
      }
    }
  }
</script>
