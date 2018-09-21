<template>
  <div>
    <div class="detail-logo">
      <img :src="require('@/assets/images/news.jpg')" />
    </div>
    <div class="detail-content">
      <div class="big-title">{{bigTitle}}</div>
      <div class="news-list">
        <div v-for="(item, i) in list"
             :key="`news-${i}`">
          <img :src="item.img" />
          <div class="detail">
            <div class="time">{{item.time}}</div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <el-button type="primary"
                       @click="toDetail(item.id)">详情</el-button>
          </div>
        </div>
      </div>
      <el-pagination background
                     :page-size="10"
                     @current-change="changeHandle"
                     layout="prev, pager, next"
                     :current-page="pageIndex"
                     :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { compnews } from '../home/elevator'
let totalList = []
export default {
  data () {
    return {
      list: [
      ],
      pageNum: 2,
      pageIndex: 1,
      total: 0
    }
  },
  mounted () {
    this.initList()
  },
  computed: {
    bigTitle () {
      const id = this.$route.query.id
      return compnews[id].label
    }
  },
  methods: {
    toDetail (id) {
      this.$router.push({
        name: 'newsDetail',
        query: {
          id
        }
      })
    },
    initList () {
      const res = JSON.parse(sessionStorage.getItem('news'))[this.$route.query.type]
      sessionStorage.setItem('news_list', JSON.stringify(res))
      totalList = res.map(
        (itemN, i) => ({
          title: itemN.news_title,
          img: require(`@/assets/images/resolve/fa${
            (i % 4) + 2
          }.jpg`),
          id: itemN.id,
          item: itemN.news_date,
          desc: itemN.new_txt.substr(0, 70) + '...'
        })
      )
      this.total = res.length
      this.changeHandle(1)
    },
    changeHandle (v) {
      this.pageIndex = v
      this.list = totalList.slice((v - 1) * this.pageNum, v * this.pageNum)
    }
  }
}
</script>
<style lang="less" scoped>
.news-list {
  margin: 30px 0;
  & > div {
    width: 835px;
    height: 225px;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: 0 0 5px #ccc;
    img {
      float: left;
      width: 322px;
      height: 225px;
    }
    .detail {
      float: right;
      width: 450px;
      .time {
        font-size: 12px;
        color: #999;
        line-height: 24px;
      }
      .title {
        font-size: 24px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 6px 0;
      }
      .desc {
        font-size: 14px;
        color: #666;
        line-height: 24px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
