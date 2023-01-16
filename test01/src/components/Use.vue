<template>
    <div>
        <h2>我是用户</h2>
        <p>我是用户内容哈哈哈</p>
        <p>{{userid}}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Use",
    computed:{
        userid(){
            return this.$route.params.userid
        }
    }
  }
  </script>
  <style scoped>
  
  </style>