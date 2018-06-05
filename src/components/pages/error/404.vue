<template>
  <div class="error404">
    <div class="error404-body-con">
      <div class="error404-body-con-title">40<label class="animation">4</label></div>
      <p class="error404-body-con-message">YOU&nbsp;&nbsp;LOOK&nbsp;&nbsp;LOST</p>
      <div class="error404-btn-con">
        <el-button @click="goHome" size="large" style="width: 200px;">返回首页</el-button>
        <el-button @click="backPage" size="large" style="width: 200px;margin-left: 40px;" type="primary">返回上一页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error-404',
  methods: {
    backPage () {
      this.$router.go(-1)
    },
    goHome () {
      this.$store.commit('changeIndex', 0)
      this.$store.commit('setCurrentRoute', 'home')
      this.$router.push({
        name: 'home_main'
      })
    }
  }
}
</script>
<style lang="less" scoped>
@keyframes error404animation {
  0% {
    transform: rotateZ(0deg);
  }
  20% {
    transform: rotateZ(-60deg);
  }
  40% {
    transform: rotateZ(-10deg);
  }
  60% {
    transform: rotateZ(50deg);
  }
  80% {
    transform: rotateZ(-20deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
.animation {
  display: inline-block;
  animation: error404animation 3s ease 0s infinite alternate;
}
.error404{
  &-body-con{
    width: 700px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    &-title{
      text-align: center;
      font-size: 240px;
      font-weight: 700;
      color: #2d8cf0;
      height: 260px;
      line-height: 260px;
      margin-top: 40px;
    }
    &-message{
      display: block;
      text-align: center;
      font-size: 30px;
      font-weight: 500;
      letter-spacing: 12px;
      color: #dddde2;
    }
  }
  &-btn-con{
    text-align: center;
    padding: 20px 0;
    margin-bottom: 40px;
  }
}
</style>
