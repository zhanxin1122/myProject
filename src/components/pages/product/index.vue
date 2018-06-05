<template>
  <div>
    <div class="detail-logo">
      <img :src="require('@/assets/images/product.png')"/>
    </div>
    <div class="detail-content">
      <div class="product-list">
        <div class="title">{{listTitle}}</div>
        <ul>
          <li v-for="(item, i) in productList" :key="`product${i}`" @click="toProduct(item.href)">{{item.name}}</li>
        </ul>
      </div>
      <div class="product-detail">
        <div class="title">产品详细</div>
        <div class="info relative">
          <img :src="productImg"/>
          <div class="detail">
            <div class="detail-title">{{productTitle}}</div>
            <div class="detail-info" v-for="(value, key) of prodcuctDetail" :key="key">
              <label>{{key}}：</label>{{value}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { products, productInfo } from '../home/elevator'
export default {
  data () {
    return {
    }
  },
  computed: {
    listTitle () {
      const idArr = this.$route.query.id.split('-')
      return products[idArr[0]].label
    },
    productList () {
      const idArr = this.$route.query.id.split('-')
      return products[idArr[0]].detail
    },
    productTitle () {
      const idArr = this.$route.query.id.split('-')
      return products[idArr[0]].detail[idArr[1]].name
    },
    prodcuctDetail () {
      const idArr = this.$route.query.id.split('-')
      const info = products[idArr[0]].detail[idArr[1]].content
      const obj = {}
      productInfo.forEach((item, i) => {
        obj[item] = info[i]
      })
      return obj
    },
    productImg () {
      const idArr = this.$route.query.id.split('-')
      return products[idArr[0]].detail[idArr[1]].img
    }
  },
  methods: {
    toProduct (id) {
      this.$router.push({
        name: 'products',
        query: {
          id
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.product-list{
  float: left;
  width: 220px;
  background-color: rgb(249, 249, 249);
  .title{
    line-height: 55px;
    background-color: #1500AA;
    height: 55px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    box-sizing: border-box;
    padding-left: 10px;
  }
  ul{
    margin: 10px;
    li{
      cursor: pointer;
      line-height: 32px;
      text-align: center;
      background: url(../../../assets/images/probg.gif) no-repeat 0 0;
      font-size: 12px;
      color: #555;
      margin-bottom: 5px;
      &:hover{
        background: #1500AA;
        color: #fff;
      }
    }
  }
}
.product-detail{
  float: right;
  width: 900px;
  border: 1px solid #eee;
  .title{
    color: #000;
    font-size: 18px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    border-bottom: 1px solid #eee;
  }
  .info{
    overflow: hidden;
    box-sizing: border-box;
    padding: 20px;
    img{
      float: left;
      top: 30px;
      width: 300px;
      height: 200px;
    }
    .detail{
      width: 520px;
      float: right;
      top: 30px;
      .detail-title{
        background: #eee;
        color: #f39800;
        font-size: 16px;
        font-weight: bolder;
        padding: 5px;
        margin-bottom: 15px;
        box-sizing: border-box;
      }
      .detail-info{
        margin-top: 15px;
        font-size: 14px;
        color: #999;
        label{
          color: #666464;
        }
      }
    }
  }
}
</style>
