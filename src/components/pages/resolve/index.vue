<template>
  <div>
    <div class="detail-logo">
      <img :src="require('@/assets/images/resolve.png')"/>
    </div>
    <div class="detail-content">
      <div class="resolve-title">{{info.label}}</div>
      <div v-if="info.img_con" class="flex-center img-content">
        <img v-for="(item, i) in info.img_con" :key="i" :src="item"/>
      </div>
      <div v-else class="resolve-desc">{{info.desc}}</div>
    </div>
  </div>
</template>
<script>
import { resolves } from '../home/elevator'
export default {
  computed: {
    info () {
      const id = this.$route.query.id
      return resolves[id]
    }
  }
}
</script>
<style lang="less" scoped>
.resolve-title{
  color: #005ba8;
  font-size: 30px;
  text-align: center;
  margin-bottom: 50px;
}
.img-content{
  flex-direction: column;
}
.resolve-desc{
  color: #999;
  font-size: 14px;
}
</style>
