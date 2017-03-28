<template>
  <div class='nav'>
    <h2></h2>
    <el-row class='title'>
      <el-col :span='8'>
        <router-link tag='div' to='/' exact><a>职业选择</a></router-link>
      </el-col>
      <el-col :span='8'>
        <router-link tag='div' to='/currentAll'><a>初始卡牌</a></router-link>
      </el-col>
      <el-col :span='8'>
        <router-link tag='div' to='/currentLeft'><a>剩余卡牌</a></router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'nav'
  }
</script>

<style lang="scss">
.nav {
  padding-bottom: 20px;
  text-align: center;
  background: url('../assets/home-v2016.jpg') center no-repeat;
  background-size: cover;
  h2{
    margin: 0 auto;
    background: url('../assets/home-v2016.png') center no-repeat;
    height: 184px;
    width: 350px;
  }
  .title{
    font-size: 18px;
    margin-top: 10px;
    div{
      border-radius: 4px;
      a{
        color: #db6800;
        font-size: 21px;
        font-weight: 700;
        text-shadow: 0 0 1px #ffd99b;
        display: block;
        width: 100%;
        height: 100%;
      }
      &.active{
        border: 2px solid #4f0802;
        box-shadow: 1;
        background-color: rgba(206, 244, 54, 0.56);
      }
    }
    .el-col-8 div:hover{
      border: 2px solid #7c1c0c;
    }
  }
}
</style>
