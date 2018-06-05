<template>
  <div>
    <div class="big-title mgb20 mgl">资质荣誉</div>
    <!-- <div class="honor-detail">
      <img v-for="(item, i) in list" :key="`img${i}`" :src="item.img"/>
    </div> -->
    <div class="flex-center">
      <img :src="require('@/assets/images/abort/honor.jpg')"/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  }
}
</script>
<style lang="less" scoped>
  .honor-detail{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 40px;
    img{
      width: 211px;
      height: 160px;
      margin: 50px 50px 0;
    }
  }
  .mgl{
    margin-left: 50px;
  }
</style>
