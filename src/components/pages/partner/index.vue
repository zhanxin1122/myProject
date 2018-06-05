<template>
  <div>
    <div class="detail-logo">
      <img :src="require('@/assets/images/partner.png')"/>
    </div>
    <div class="detail-content">
      <div class="big-title mgl">合作伙伴</div>
      <div class="partner-detail">
        <div v-for="(item, i) in 10" :key="`img${i}`" >
          <img :src="require(`@/assets/images/partners/p${i+1}.jpg`)"/>
        </div>
      </div>
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
  .mgl{
    margin-left: 45px;
    margin-bottom: 60px;
  }
  .partner-detail{
    margin-bottom: 30px;
    &>div{
      float: left;
      width: 25%;
      height: 200px;
      text-align: center;
    }
    img{
      margin-bottom: 40px;
    }
  }
</style>
