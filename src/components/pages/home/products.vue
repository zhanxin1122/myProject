<template>
  <div class="nav-detail"  @mouseover.stop="() => {}">
    <!-- <div class="product" :class="{'heiAuto': this.value === 5}">
        <div v-for="(item, i) in products" :key="`product-detail${i}`" :class="{'none': activeIndex !== i}">
          <div class="detail flex-center">
            <div class="flex-center">
              <ul>
                <li>{{item.label}}</li>
                <li v-for="item1 in item.detail" :key="item1.name">{{item1.name}}</li>
              </ul>
            </div>
            <div>
              <img :src="item.img"/>
            </div>
          </div>
        </div>
        <ul class="title">
          <li :class="{'actived': activeIndex === i}" :key="`product-label${i}`" v-for="(item, i) in products" @mouseover="activeIndex = i">{{item.label}}</li>
        </ul>
    </div> -->
    <div class="product" :class="{'heiAuto': this.value === 5}">
      <div class="detail0 flex-center" v-for="(item, i) in products" :key="`product-detail${i}`">
        <ul>
          <li>{{item.label}}</li>
          <li v-for="item1 in item.detail" @click="toDetail('products', item1.href)" :key="item1.name">{{item1.name}}</li>
        </ul>
      </div>
    </div>
    <div class="resolve flex-center" ref="nav_resolve" :class="{'heiAuto': value === 4}">
      <div class="detail flex-center" v-for="item in resolves" @click="toDetail('resolves', item.href)" :key="item.label">
        <img :src="item.img"/>
        <span>{{item.label}}</span>
      </div>
    </div>
    <div class="service flex-center" :class="{'heiAuto': value === 3}">
      <div class="detail flex-center" v-for="item in supports" :key="item.label">
        <img :src="item.img"/>
        <span>{{item.label}}</span>
      </div>
    </div>
    <div class="news" :class="{'heiAuto': value === 2}" ref="nav_news">
      <div class="detail" v-for="item in compnews" :key="item.label">
        <div>
          <img :src="item.img"  @click="toDetail('compnews', item.href)"/>
        </div>
        <div>
          <div class="title"  @click="toDetail('compnews', item.href)">{{item.label}}</div>
          <div class="desc">{{item.desc}}</div>
        </div>
      </div>
    </div>
    <div class="partner" :class="{'heiAuto': value === 1}"></div>
    <div class="about flex-center" :class="{'heiAuto': value === 0}" ref="nav_abort">
      <div class="detail flex-center" v-for="item in aborts" :key="item.label" @click="$router.push({name: item.href})">
        <img :src="item.img"/>
        <span>{{item.label}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { products, resolves, supports, compnews, aborts } from './elevator'
// 导航解决方案图片比例
const ratio1 = 209 / 130
// 导航新闻图片比例
const ratio2 = 162 / 120
// 导航关于我们图片比例
const ratio3 = 174 / 110
export default {
  name: 'products',
  props: ['value'],
  data () {
    return {
      products,
      resolves,
      supports,
      compnews,
      aborts,
      activeIndex: 0,
      hei1: 0,
      hei2: 0,
      hei3: 0
    }
  },
  mounted () {
    this.setImgHeight()
  },
  methods: {
    setImgHeight () {
      const width1 = this.$refs.nav_resolve.getElementsByTagName('img')[0].clientWidth
      this.hei1 = width1 / ratio1
      const width2 = this.$refs.nav_news.getElementsByTagName('img')[0].clientWidth
      this.hei2 = width2 / ratio2
      const width3 = this.$refs.nav_abort.getElementsByTagName('img')[0].clientWidth
      this.hei3 = width3 / ratio3
    },
    toDetail (name, href) {
      this.$router.push({
        name,
        query: {
          id: href
        }
      })
      this.hideNav()
    },
    hideNav () {
      this.value = -1
      this.$emit('input', -1)
    }
  }
}
</script>

<style lang="less">
@navBgColor: #323133;
.nav-detail {
  box-sizing: border-box;
  z-index: 1000;
  position: fixed;
  left: 50%;
  top: 120px;
  width: 100%;
  max-width: 1349px;
  min-width: 1000px;
  box-sizing: border-box;
  position: fixed;
  transform: translate(-50%, 0) translateZ(0);
  padding: 0 75px;
  & > div {
    width: 100%;
    background-color: @navBgColor;
    height: 0;
  }
  .heiAuto {
    height: auto;
  }
  .product {
    overflow: hidden;
    .title {
      li{
        box-sizing: border-box;
        width: 25%;
        height: 60px;
        line-height: 60px;
        color: #fff;
        float: left;
        text-align: center;
        cursor: pointer;
        font-size: 20px;
        border-right: 1px solid #666;
        background-color: #29282a;
        &:last-child{
          border: none;
        }
      }
      .actived{
        background-color: #db2f2f;
      }
    }
    .detail {
      width: 100%;
      box-sizing: border-box;
      padding: 30px;
      justify-content: space-around;
      &>div{
        width: 50%;
        height: 300px;
      }
      li{
        color: #888;
        font-size: 14px;
        padding: 4px 0;
        cursor: pointer;
        &:first-child{
          color: #fff;
          font-size: 16px;
          padding: 8px 0;
        }
        &:hover{
          color: red;
        }
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    .detail0{
      width: 25%;
      float: left;
      margin: 30px 0;
      box-sizing: border-box;
      border-right: 1px solid #666;
      &:last-child{
        border: 0;
      }
      ul{
        height: 165px;
        li{
          cursor: pointer;
          color: #c2c2c2;
          font-size: 14px;
          line-height: 25px;
          &:first-child{
            color: #fff;
            font-size: 16px;
            line-height: 32px;
          }
          &:hover{
            color: #db2f2f;
          }
        }
      }
    }
  }
  .resolve,
  .service,
  .about {
    box-sizing: border-box;
    justify-content: space-between;
    overflow: hidden;
    padding: 0 20px;
    .detail{
      padding-top: 20px;
      width: 18%;
      flex-direction: column;
      cursor: pointer;
      img{
        width: 100%;
        height: 130px;
      }
      span{
        display: inline-block;
        height: 44px;
        color: #fff;
        margin-top: 10px;
        font-size: 14px;
      }
      &:hover{
        span{
          text-decoration: underline;
        }
      }
    }
  }
  .service {
    .detail{
      width: 19%;
    }
  }
  .about{
    .detail{
      width: 15%;
      img{
        height: 110px;;
      }
      span{
        height: 30px;
      }
    }
  }
  .news {
    overflow: hidden;
    .detail{
      float: left;
      width: 50%;
      box-sizing: border-box;
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &>div{
        font-size: 14px;
        &:first-child{
          width: 30%;
        }
        &:last-child{
          width: 66%;
        }
        .title{
          color: #fff;
          padding: 10px 0;
          border-bottom: 1px solid #444;
          &:hover{
            cursor: pointer;
            text-decoration: underline;
          }
        }
        .desc{
          margin-top: 15px;
          color: #999;
          line-height: 24px;
        }
      }
      img{
        width: 100%;
        height: 120px;
        &:hover{
          cursor: pointer;
        }
      }
    }
  }
  .partner {
  }
  .about {
  }
}
</style>
