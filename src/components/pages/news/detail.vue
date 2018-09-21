<template>
  <div>
    <div class="detail-logo">
      <img :src="require('@/assets/images/news.jpg')" />
    </div>
    <div class="detail-content news-detail">
      <div class="news-content">
        <div class="head">
          <div class="title">{{news.title}}</div>
          <div class="time">{{news.time}}</div>
        </div>
        <div ref="content" class="space2"
             v-html="news.content"></div>
        <div class="news-operate flex-center">
          <div @click="prev">上一篇</div>
          <div @click="next">下一篇</div>
        </div>
      </div>
      <ul class="relative-news">
        <li>相关新闻</li>
        <li v-for="(item, i) in relList"
            :key="`rel-${i}`">
          <div class="time">{{item.time}}</div>
          <div class="title" @click="toDetail(item.id, true)">{{item.title}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      news: {},
      relList: [],
      newsList: JSON.parse(sessionStorage.getItem('news_list')),
      curId: this.$route.query.id,
      pageNo: 0
    }
  },
  mounted () {
    this.initPageNo()
    this.getNewsDetail()
    this.getRelativeNews()
  },
  methods: {
    initPageNo () {
      for (let i = 0; i < this.newsList.length; i++) {
        if (this.newsList[i].id === this.curId) {
          this.pageNo = i
          break
        }
      }
    },
    toDetail (id, flag = false) {
      flag && (this.newsList = JSON.parse(sessionStorage.getItem('news'))['sort1'])
      this.curId = id
      this.$router.push({
        name: 'newsDetail',
        query: {
          id
        }
      })
    },
    getNewsDetail () {
      this.$fetch({
        url: '/getnewsinfo',
        method: 'GET',
        params: {
          id: this.curId
        }
      }).then(res => {
        if (res && res.length !== 0) {
          const detail = res[0]
          this.news = {
            title: detail.news_title,
            time: detail.news_date,
            content: detail.news_body
          }
          this.setImgs()
        }
      })
    },
    getRelativeNews () {
      const cache = sessionStorage.getItem('news')
      this.relList = JSON.parse(cache).sort1.map(itemN => ({
        title: itemN.news_title,
        time: itemN.news_date,
        id: itemN.id
      }))
    },
    setImgs () {
      this.$nextTick(() => {
        [...this.$refs.content.getElementsByTagName('img')].forEach(item => {
          item.setAttribute('src', 'http://193.112.120.183:3000' + item.getAttribute('src'))
        })
      })
    },
    prev () {
      if (this.pageNo === 0) {
        this.pageNo = this.newsList.length - 1
      } else {
        this.pageNo--
      }
      this.setNews()
    },
    next () {
      if (this.pageNo === this.newsList.length - 1) {
        this.pageNo = 0
      } else {
        this.pageNo++
      }
      this.setNews()
    },
    setNews () {
      this.toDetail(this.newsList[this.pageNo].id)
    }
  },
  watch: {
    $route (v) {
      this.getNewsDetail()
    }
  }
}
</script>

<style lang="less" scoped>
.time {
  font-size: 12px;
  color: #999;
}
.news-detail {
  display: flex;
  justify-content: space-between;
  .news-content {
    width: 70%;
    .head {
      text-align: center;
      padding-bottom: 15px;
      border-bottom: 1px dotted #ccc;
      margin-bottom: 25px;
      .title {
        font-size: 24px;
        color: #333;
      }
      .time {
        margin-top: 20px;
      }
    }
    .news-detail {
      font-size: 14px;
      color: #666;
      line-height: 24px;
    }
    .news-operate {
      margin-top: 40px;
      & > div {
        width: 155px;
        height: 52px;
        line-height: 52px;
        color: #fff;
        font-size: 16px;
        background-color: #3e3e3e;
        text-align: center;
        &:first-child {
          margin-right: 40px;
        }
        &:hover {
          cursor: pointer;
          background-color: #1500aa;
        }
      }
    }
  }
  .relative-news {
    width: 25%;
    li {
      border-bottom: 1px dotted #ccc;
      padding-bottom: 20px;
      .title {
        font-size: 16px;
        color: #666;
        &:hover {
          cursor: pointer;
          color: #db2f2f;
        }
      }
      .time {
        margin: 15px 0;
      }
      &:first-child {
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
