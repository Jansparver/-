<template>
  <div class="home">
      <div>
        <router-view/>
      </div>
      <div class="bottom">
        <router-link to="/main/home">首页</router-link>
        <router-link to="/main/message">消息</router-link>
        <router-link to="/main/hippay">空间</router-link>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom{
  width: 100%;
  height: 50px;
  display: flex;
  background: #eee;
  position: fixed;
  bottom:0;
  a{
    flex:1;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
  }
}
.router-link-exact-active{
  background: red;
  color:#fff;
}
</style>
