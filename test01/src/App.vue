<template>
  <div id="app">
    <!-- tag='li',replace不能返回到上一个页面  active-class修改默认属性 -->
    <router-link to="/home" tag='button'>首页</router-link>
    <router-link to="/about" tag='button'>关于</router-link>
    <router-link v-bind:to="'/use/'+userid" tag='button'>用户</router-link>
    <keep-alive>
          <router-view/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      userid: 'dragon'
    }
  },
  components: {
  }
}
</script>

<style>

</style>
