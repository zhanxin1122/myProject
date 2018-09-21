<template>
  <div class="main_home">
    <header :class="{headerShadow: shadowFlag}">
      <div>
        <img :src="require('../../../assets/images/logo2.jpg')" @click="$router.push({name: 'home_main'})"/>
        <div class="nav-box">
          <img src="../../../assets/images/phone.jpg"/>
          <ul>
            <li v-if="i !== 3" v-for="(item, i) in navs" :key="`home-nav${i}`" @click="toDetail(item.label)" :class="{'active': navActiveIndex === i}" @mouseover.stop="navActiveIndex = i">{{item.label}}</li>
          </ul>
        </div>
      </div>
    </header>
    <nav-products v-model="navActiveIndex"></nav-products>
    <div class="home-content">
      <router-view></router-view>
    </div>
    <footer>
      <div class="content">
        <div class="all">
          <ul>
            <li v-if="i !== 2" v-for="(item, i) in navs" :key="i">{{navs[5 - i].label}}</li>
          </ul>
          <div>
            <ul v-if="key !== 'supports'" v-for="(value, key) of contentObj" :key="`obj-${key}`">
              <li v-for="(item0, i) in value" :key="`${key}-${i}`" @click="toPage(key, item0.href)">{{item0.label}}</li>
            </ul>
          </div>
        </div>
        <div class="code flex-center">
          <img :src="require('@/assets/images/code.jpg')"/>
          <span>扫一扫加入微信</span>
        </div>
      </div>
      <div class="copyright">Copyright © 2014 - 2018 通用电梯安装维保(广州)有限公司 粤ICP备18068287号</div>
    </footer>
  </div>
</template>
<script>
import NavProducts from './products'
import contentObj from './elevator'
export default {
  data () {
    return {
      shadowFlag: false,
      num: 0,
      navs: [{
        label: '关于我们',
        href: ''
      }, {
        label: '合作伙伴',
        href: ''
      }, {
        label: '新闻中心',
        href: ''
      }, {
        label: '服务&支持',
        href: ''
      }, {
        label: '解决方案',
        href: ''
      }, {
        label: '产品中心',
        href: ''
      }],
      navActiveIndex: -1,
      contentObj
    }
  },
  components: {
    NavProducts
  },
  mounted () {
    const $html = document.documentElement
    $html.onmouseover = () => {
      this.navActiveIndex = -1
    }
    let time = Date.now()
    let timer = null
    window.onscroll = () => {
      timer && window.clearTimeout(timer)
      if (time + 1000 < Date.now()) {
        time = Date.now()
        this.shadowFlag = $html.scrollTop !== 0
      }
      timer = window.setTimeout(() => {
        this.shadowFlag = $html.scrollTop !== 0
      }, 300)
    }
  },
  methods: {
    toDetail (txt) {
      txt === '合作伙伴' && this.$router.push({
        name: 'partners'
      })
    },
    toPage (name, id) {
      if (name === 'aborts') {
        this.$router.push({
          name: id
        })
      } else {
        this.$router.push({
          name,
          query: {
            id
          }
        })
      }
    }
  }
}
</script>
