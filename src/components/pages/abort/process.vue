<template>
  <div>
    <div class="big-title mgb20 mgl">发展历程</div>
    <div class="process-content">
      <div class="process-box" v-for="(value, key) of list" :key="key">
        <ul>
          <li class="flex-center">
            <div class="icon"><div class="label"></div></div>
            <div class="text">{{key}}</div>
          </li>
          <li class="flex-center" v-for="(item0, i) in value" :key="`${key}-${i}`">
            <div class="icon"><div class="label"></div></div>
            <div class="text">{{item0}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: {
        '2017': ['2月通用电梯科技股份有限公司挂牌上市。'],
        '2018': ['成功通过国家证券会上会审核和批准。', '成功通过国家证券会上会审核和批准。']
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .mgl{
    margin-left: 180px;
  }
  .process-content{
    padding: 50px 180px;
  }
  .process-box{
    position: relative;
    li{
      justify-content: flex-start;
      margin-bottom: 18px;
      .icon{
        position: relative;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        border: 3px solid #ccc;
        padding: 3px;
        .label{
          position: absolute;
          left: 2px;
          top: 2px;
          bottom: 2px;
          right: 2px;
          display: inline-block;
          border-radius: 50%;
          background-color: #ccc;
        }
        &:after{
          content: ' ';
          position: absolute;
          left: 8px;
          top: 21px;
          border-left: 3px solid #ccc;
          height: 36px;
        }
      }
      .text{
        height: 42px;
        width: 600px;
        line-height: 42px;
        padding: 0 30px;
        margin-left: 30px;
        font-size: 14px;
        color: #333;
        border-radius: 50px;
        background-color: #eaeaea;
      }
      &:first-child{
        margin-bottom: 25px;
        .icon{
          border-color: #1500AA;
          .label{
            background-color: #1500AA;
          }
        }
        .text{
          font-size: 18px;
          width: auto;
          background-color: #1500AA;
          padding: 0 10px;
          color: #fff;
          height: auto;
          line-height: 24px;
        }
      }
    }
    &:last-child{
      margin-bottom: 200px;
      &:before{
        content: ' ';
        position:absolute;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        border: 3px solid #ccc;
        padding: 3px;
        bottom: -130px;
        left: 0;
      }
      &:after{
        content: ' ';
        position:absolute;
        left: 11px;
        bottom: -107px;
        border-left: 3px solid #ccc;
        height: 80px;
      }
    }
  }
</style>
