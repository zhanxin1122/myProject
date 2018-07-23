<template>
  <div>
    <div class="detail-logo">
      <img :src="require('@/assets/images/news.jpg')"/>
    </div>
    <div class="detail-content">
      <div class="big-title">{{bigTitle}}</div>
      <div class="news-list">
        <div v-for="(item, i) in list" :key="`news-${i}`">
          <img :src="item.img"/>
          <div class="detail">
            <div class="time">{{item.time}}</div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <el-button type="primary" @click="toDetail(item.id)">详情</el-button>
          </div>
        </div>
      </div>
      <el-pagination
        background
        :page-size="pageNum"
        @current-change="changeHandle"
        layout="prev, pager, next"
        :current-page="pageIndex"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { compnews } from '../home/elevator'
export default {
  data () {
    return {
      list: [{
        title: '2018年德国ANGA有线电视广播卫星展',
        id: '1',
        time: '2008-08-08',
        img: require('@/assets/images/resolve/fa2.jpg'),
        desc: '2018年3月22日，第二十六届中国国际广播电视信息网络展览会（简称CCBN 2018）在北京中国国际展览中心正式拉开帷幕。经过26年的不懈奋斗，CCBN已经发...'
      }, {
        title: '2018年德国ANGA有线电视广播卫星展',
        id: '1',
        time: '2008-08-08',
        img: require('@/assets/images/resolve/fa3.jpg'),
        desc: '2018年3月22日，第二十六届中国国际广播电视信息网络展览会（简称CCBN 2018）在北京中国国际展览中心正式拉开帷幕。经过26年的不懈奋斗，CCBN已经发...'
      }, {
        title: '2018年德国ANGA有线电视广播卫星展',
        id: '1',
        time: '2008-08-08',
        img: require('@/assets/images/resolve/fa4.jpg'),
        desc: '2018年3月22日，第二十六届中国国际广播电视信息网络展览会（简称CCBN 2018）在北京中国国际展览中心正式拉开帷幕。经过26年的不懈奋斗，CCBN已经发...'
      }, {
        title: '2018年德国ANGA有线电视广播卫星展',
        id: '1',
        time: '2008-08-08',
        img: require('@/assets/images/resolve/fa5.jpg'),
        desc: '2018年3月22日，第二十六届中国国际广播电视信息网络展览会（简称CCBN 2018）在北京中国国际展览中心正式拉开帷幕。经过26年的不懈奋斗，CCBN已经发...'
      }, {
        title: '2018年德国ANGA有线电视广播卫星展',
        id: '1',
        time: '2008-08-08',
        img: require('@/assets/images/resolve/fa2.jpg'),
        desc: '2018年3月22日，第二十六届中国国际广播电视信息网络展览会（简称CCBN 2018）在北京中国国际展览中心正式拉开帷幕。经过26年的不懈奋斗，CCBN已经发...'
      }],
      pageNum: 2,
      pageIndex: 1
    }
  },
  computed: {
    bigTitle () {
      const id = this.$route.query.id
      return compnews[id].label
    }
  },
  methods: {
    changeHandle (v) {
      this.pageIndex = v
    },
    toDetail (id) {
      this.$router.push({
        name: 'newsDetail',
        query: {
          id
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.news-list{
  margin: 30px 0;
  &>div{
    width: 835px;
    height: 225px;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: 0 0 5px #ccc;
    img{
      float: left;
      width: 322px;
      height: 225px;
    }
    .detail{
      float: right;
      width: 450px;
      .time{
        font-size: 12px;
        color: #999;
        line-height: 24px;
      }
      .title{
        font-size: 24px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 6px 0;
      }
      .desc{
        font-size: 14px;
        color: #666;
        line-height: 24px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
