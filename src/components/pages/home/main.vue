<template>
  <div>
    <el-carousel class="self-wid1"
                 height="700px"
                 trigger="click"
                 :interval="5000">
      <el-carousel-item v-for="(item, i) in data0"
                        :key="`data0-${i}`">
        <img class="topImg"
             alt="通用电梯安装维保有限公司"
             :src="item.img"
             @click="homePage" />
      </el-carousel-item>
    </el-carousel>
    <div class="main-content">
      <div class="news">
        <div class="detail"
             v-for="(item, j) in news"
             :key="j">
          <div class="label"><img :src="item.img" />{{item.label}}</div>
          <div class="content"
               ref="home_news">
            <el-carousel height="200px">
              <el-carousel-item v-for="(item0, i) in item.detail"
                                :key="i">
                <div class="img">
                  <img :src="item0.img" @click="toNews(item0, item.type)"/>
                </div>
                <div class="new-detail">
                  <div class="title"
                       @click="toNews(item0, item.type)">{{item0.title}}</div>
                  <div class="desc">{{item0.desc}}</div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <div class="self-scroll">
        <div class="label flex-center">
          <img :src="require('@/assets/images/service/product.png')" />
          <span>产品系列</span>
        </div>
        <div class="content"
             ref="home_pro"
             @mousemove="clearTimer"
             @mouseout="addTimer">
          <ul :style="{'transform': `translate(${sumLeft}%)`}">
            <li v-for="(item, i) in data2"
                class="flex-center"
                @click="toPro(item.href)"
                :key="i"
                :style="{'left': `${item.left}%`}">
              <img :src="item.img" />
              <span>{{item.label}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="resolve">
        <div class="label flex-center">
          <img :src="require('@/assets/images/service/resolve.png')" />
          <span>解决方案</span>
        </div>
        <div class="flex-center jsb">
          <div v-for="(item, i) in resolves"
               v-if="resolveIndex.indexOf(i) >= 0"
               :key="`resolves-${i}`"
               class="content"
               @click="toDetail('resolves', item.href)">
            <div class="img">
              <img :src="item.img" />
            </div>
            <div class="title">{{item.label}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { resolves } from './elevator'
// 首页大图片比例
const ratio1 = 1349 / 700
// 首页新闻图片比例
const ratio2 = 590 / 200
// 首页产品图片比例
const ratio3 = 1199 / 220
// 首页解决方案图片比例
const ratio4 = 346 / 210
const screenwidth = document.body.clientWidth
// 获取新闻接口
const newsUrl = ['sort1', 'sort2']

let timer = null
export default {
  data () {
    return {
      hei1: screenwidth / ratio1 + 'px',
      hei2: (screenwidth / 2 - 85) / ratio2,
      hei3: (screenwidth - 150) / ratio3,
      hei4: (screenwidth * 0.3 - 12) / ratio4 - 12,
      sumLeft: 0,
      data0: [
        {
          img: require('@/assets/images/home1.jpg'),
          href: 'home'
        },
        {
          img: require('@/assets/images/home2.jpg'),
          href: 'home'
        },
        {
          img: require('@/assets/images/home3.jpg'),
          href: 'home'
        }
      ],
      news: [
        {
          label: '公司动态',
          img: require('@/assets/images/service/comp.png'),
          type: 'sort1',
          detail: []
        },
        {
          label: '行业新闻',
          img: require('@/assets/images/service/profess.png'),
          type: 'sort2',
          detail: []
        }
      ],
      data1: [
        {
          label: '发布的一款新一代具体广播级质量的高性价比标清',
          desc:
            'GN-1858是高斯贝尔面向广电运营商发布的一款新一代具体广播级质量的高性价比标清MPEG-2/H.264编码器，可有效地进一步降低运营商在前端设备上的成本投入。',
          img: require('@/assets/images/resolve/fa2.jpg'),
          href: ''
        },
        {
          label: '发布的一款新一代具体广播级质量的高性价比标清',
          desc:
            'GN-1858是高斯贝尔面向广电运营商发布的一款新一代具体广播级质量的高性价比标清MPEG-2/H.264编码器，可有效地进一步降低运营商在前端设备上的成本投入。',
          img: require('@/assets/images/resolve/fa3.jpg'),
          href: ''
        }
      ],
      data2: [
        {
          label: '载货电梯',
          img: require('@/assets/images/resolve/fa2.jpg'),
          left: '0',
          href: '0-0'
        },
        {
          label: '载货电梯',
          img: require('@/assets/images/resolve/fa3.jpg'),
          left: '25',
          href: '1-0'
        },
        {
          label: '载货电梯',
          img: require('@/assets/images/resolve/fa4.jpg'),
          left: '50',
          href: '2-0'
        },
        {
          label: '载货电梯',
          img: require('@/assets/images/resolve/fa5.jpg'),
          left: '75',
          href: '3-0'
        },
        {
          label: '载货电梯',
          img: require('@/assets/images/resolve/fa2.jpg'),
          left: '100',
          href: '0-0'
        },
        {
          label: '载货电梯',
          img: require('@/assets/images/resolve/fa3.jpg'),
          left: '125',
          href: '1-0'
        },
        {
          label: '载货电梯',
          img: require('@/assets/images/resolve/fa4.jpg'),
          left: '150',
          href: '2-0'
        },
        {
          label: '载货电梯',
          img: require('@/assets/images/resolve/fa5.jpg'),
          left: '175',
          href: '3-0'
        }
      ],
      resolves,
      resolveIndex: [0, 1, 4]
    }
  },
  mounted () {
    this.addTimer()
    this.initNews()
  },
  destroyed () {
    this.clearTimer()
  },
  methods: {
    // 初始化新闻
    initNews () {
      let news = {
        sort1: null,
        sort2: null
      }
      newsUrl.forEach((item, i) => {
        this.$fetch({
          url: '/api/newsList',
          method: 'GET',
          params: {
            news_sort: item
          }
        }).then(res => {
          if (res && res.length !== 0) {
            this.news[i].detail = res.map(
              (itemN, j) =>
                j <= 2 && {
                  title: itemN.news_title,
                  img: require(`@/assets/images/resolve/fa${
                    i === 0 ? j + 2 : 4 - j
                  }.jpg`),
                  href: itemN.id,
                  desc: itemN.new_txt.substr(0, 70) + '...'
                }
            )
            news[item] = res
            sessionStorage.setItem('news', JSON.stringify(news))
          }
        })
      })
    },
    interval () {
      this.sumLeft -= 25
      window.setTimeout(() => {
        const target = this.data2.splice(0, 1)[0]
        target.left = +target.left + 200
        this.data2.push(target)
      }, 500)
    },
    clearTimer () {
      window.clearInterval(timer)
    },
    addTimer () {
      timer = window.setInterval(this.interval, 2000)
    },
    homePage () {
      window.location.reload()
    },
    toPage (name) {
      this.$router.push({ name })
    },
    more () {},
    toPro (id) {
      this.$router.push({
        name: 'products',
        query: {
          id
        }
      })
    },
    toNews (item, type) {
      sessionStorage.setItem('news_list', JSON.stringify(JSON.parse(sessionStorage.getItem('news'))[type]))
      this.$router.push({
        name: 'newsDetail',
        query: {
          id: item.href
        }
      })
    },
    toDetail (name, href) {
      this.$router.push({
        name,
        query: {
          id: href
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.topImg {
  height: 100%;
  cursor: pointer;
}
.main-content {
  width: 1349px;
  margin: 0 auto;
}
.news {
  margin-top: 40px;
  height: 250px;
  .detail {
    box-sizing: border-box;
    width: 50%;
    float: left;
    &:first-child {
      padding-left: 75px;
      padding-right: 10px;
    }
    &:last-child {
      padding-left: 10px;
      padding-right: 75px;
    }
    .label {
      position: relative;
      color: #333;
      height: 50px;
      line-height: 50px;
      padding-left: 30px;
      font-size: 24px;
      img {
        position: absolute;
        left: -5px;
        top: 7px;
        width: 35px;
        height: 35px;
      }
    }
    .content {
      height: 200px;
      .img {
        width: 50%;
        height: 100%;
        float: left;
        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }
      .new-detail {
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        padding: 20px;
        background-color: #e8e8e8;
        float: left;
        .title {
          color: #005ba8;
          font-size: 16px;
          font-weight: bold;
          padding-bottom: 20px;
          cursor: pointer;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          &:hover {
            color: #d82f2f;
          }
        }
        .desc {
          line-height: 24px;
          overflow: hidden;
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
}
.self-carousel {
  margin-top: 50px;
}
.self-scroll {
  position: relative;
  margin-top: 50px;
  .label {
    width: 100%;
    height: 50px;
    img {
      width: 40px;
      height: 40px;
      position: relative;
      top: 1px;
    }
    span {
      margin-left: 5px;
      font-size: 24px;
    }
  }
  .content {
    overflow: hidden;
    position: relative;
    height: 250px;
    box-sizing: border-box;
    margin: 0 75px;
    ul {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      transition: transform 0.3s linear;
      backface-visibility: hidden;
      perspective: 1000;
      transform: translate3d(0, 0, 0);
      li {
        cursor: pointer;
        position: absolute;
        top: 0;
        width: 25%;
        flex-direction: column;
        box-sizing: border-box;
        border: 1px solid #fff;
        img {
          width: 100%;
          height: 200px;
        }
        span {
          display: inline-block;
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          text-align: center;
          background-color: #e8e8e8;
          color: #666;
        }
      }
    }
  }
}
.products {
  height: 660px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .label,
  .desc,
  .self-btn {
    position: absolute;
    z-index: 10;
  }
  .label {
    top: 50px;
    width: 100%;
    text-align: center;
    font-size: 36px;
    color: #111;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      color: #d82f2f;
    }
  }
  .desc {
    top: 120px;
    width: 100%;
    text-align: center;
    line-height: 24px;
    overflow: hidden;
    font-size: 16px;
    color: #777;
    padding: 0 40px;
  }
}
.resolve {
  box-sizing: border-box;
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 0 75px;
  .label {
    width: 100%;
    height: 50px;
    img {
      width: 40px;
      position: relative;
      top: 3px;
    }
    span {
      margin-left: 5px;
      font-size: 24px;
    }
  }
  .jsb {
    justify-content: space-between;
  }
  .content {
    width: 30%;
    height: 100%;
    background-color: #fff;
    .img {
      width: 100%;
      box-sizing: border-box;
      padding: 6px;
      border: 1px solid #ccc;
      img {
        cursor: pointer;
        width: 100%;
        height: 220px;
      }
    }
    .title {
      cursor: pointer;
      font-size: 16px;
      color: #005ba8;
      font-weight: bold;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-top: 10px;
      &:hover {
        color: #d82f2f;
      }
    }
    .desc {
      line-height: 24px;
      overflow: hidden;
      color: #666;
      font-size: 14px;
      margin-top: 10px;
    }
  }
}
</style>
