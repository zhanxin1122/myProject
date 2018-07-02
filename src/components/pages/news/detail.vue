<template>
  <div>
    <div class="detail-logo">
      <img :src="require('@/assets/images/news.jpg')"/>
    </div>
    <div class="detail-content news-detail">
      <div class="news-content">
        <div class="head">
          <div class="title">{{news.title}}</div>
          <div class="time">{{news.time}}</div>
        </div>
        <div class="news-detail space2">{{news.content}}</div>
        <div class="news-operate flex-center">
          <div>上一篇</div>
          <div>下一篇</div>
        </div>
      </div>
      <ul class="relative-news">
        <li>相关新闻</li>
        <li v-for="(item, i) in relList" :key="`rel-${i}`">
          <div class="time">{{item.time}}</div>
          <div class="title">{{item.title}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      news: {
        title: 'CCBN2018 通用电梯大展风采',
        time: '2018-03-27',
        content: '2018年3月22日，第二十六届中国国际广播电视信息网络展览会（简称CCBN 2018）在北京中国国际展览中心正式拉开帷幕。经过26年的不懈奋斗，CCBN已经发展成为立足于广电，辐射通信、IT、电子等多个行业的国家级信息传媒行业盛会和世界知名的广播影视技术设备展览会。'
      },
      relList: [{
        title: 'CCBN2018 通用电梯大展风采',
        time: '2018-03-27',
        id: ''
      }, {
        title: 'CCBN2018 通用电梯大展风采',
        time: '2018-03-27',
        id: ''
      }, {
        title: 'CCBN2018 通用电梯大展风采',
        time: '2018-03-27',
        id: ''
      }]
    }
  },
  mounted () {
    this.getNewsDetail()
  },
  methods: {
    getNewsDetail () {
      const newsId = this.$route.query.id
      console.log(newsId)
    }
  }
}
</script>

<style lang="less" scoped>
  .time{
    font-size: 12px;
    color: #999;
  }
  .news-detail{
    display: flex;
    justify-content: space-between;
    .news-content{
      width: 70%;
      .head{
        text-align: center;
        padding-bottom: 15px;
        border-bottom: 1px dotted #ccc;
        margin-bottom: 25px;
        .title{
          font-size: 24px;
          color: #333;
        }
        .time{
          margin-top: 20px;
        }
      }
      .news-detail{
        font-size: 14px;
        color: #666;
        line-height: 24px;
      }
      .news-operate{
        margin-top: 40px;
        &>div{
          width: 155px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          font-size: 16px;
          background-color: #3E3E3E;
          text-align: center;
          &:first-child{
            margin-right: 40px;
          }
          &:hover{
            cursor: pointer;
            background-color: #1500AA;
          }
        }
      }
    }
    .relative-news{
      width: 25%;
      li{
        border-bottom: 1px dotted #ccc;
        padding-bottom: 20px;
        .title{
          font-size: 16px;
          color: #666;
          &:hover{
            cursor: pointer;
            color: #db2f2f;
          }
        }
        .time{
          margin: 15px 0;
        }
        &:first-child{
          font-size: 24px;
          color: #333;
          border: none;
          padding: 0;
          padding-bottom: 5px;
        }
      }
    }
  }
</style>
