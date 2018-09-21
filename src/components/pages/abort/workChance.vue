<template>
  <div>
    <div class="big-title mgb20 mgl">工作机会</div>
    <div class="content">
      <div class="item" v-for="(item, i) in list" :key="`item${i}`">
        <div class="title">{{item.work_title}}</div>
        <!-- <div class="zp-head">招聘人数：{{item.num}}</div>
        <div class="zp-head">招聘部门：{{item.section}}</div>
        <div class="zp-head">工作地点：{{item.place}}</div> -->
        <div class="detail">
          <div class="de-title">职位要求：</div>
          <div class="de-list" v-html="item.work_ask"></div>
          <div class="de-title">工作职责：</div>
          <div class="de-list" v-html="item.work_duty"></div>
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
  },
  mounted () {
    this.initList()
  },
  methods: {
    initList () {
      this.$fetch({
        // url: '/api/getworkinfo',
        url: '/api/worksList',
        method: 'GET',
        params: {
          id: this.$route.query.id
        }
      }).then(res => {
        if (res && res.length !== 0) {
          this.list = res
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.content{
  padding: 20px 0;
  overflow: hidden;
  .item{
    padding: 40px;
    box-sizing: border-box;
    width: 48%;
    float: left;
    border: 1px solid #eee;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 0 0 10px #ccc;
    .title{
      font-size: 24px;
      color: #d82f2f;
      margin-bottom: 30px;
    }
    .zp-head{
      font-size: 14px;
      color: #666;
      line-height: 24px;
    }
    .detail{
      margin-top: 30px;
      height: 250px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      /*滚动条里面小方块*/
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #ccc;
        opacity: 0.5;
      }
      .de-title{
        font-size: 16px;
        color: #333;
        font-weight: bold;
        margin: 10px 0;
      }
      .de-list {
        font-size: 14px;
        color: #666!important;
        line-height: 24px;
      }
    }
  }
}
</style>
