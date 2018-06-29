<template>
  <div>
    <div class="detail-logo">
      <img :src="require('@/assets/images/partner.png')"/>
    </div>
    <div class="detail-content">
      <div class="big-title mgl">合作伙伴</div>
      <div class="partner-detail">
        <div v-for="(item, i) in 10" :key="`img${i}`" class="flex-center">
          <div class="flex-center"><img :class="{sylg: i === 7 || i === 3 || i === 4 || i === 9}" :src="require(`@/assets/images/partners/p${i+1}.jpg`)"/></div>
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
    margin-bottom: 10px;
  }
  .partner-detail{
    margin-bottom: 30px;
    &>div{
      float: left;
      width: 25%;
      height: 130px;
      text-align: center;
      &>div{
        width: 200px;
        height: 90px;
        border: 1px solid #eee;
        img{
          height: 70px;
        }
        .sylg{
          width: 198px;
        }
      }
    }
  }
</style>
