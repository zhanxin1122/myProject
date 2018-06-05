<template>
  <div>
    <div class="big-title mgb20">联系我们</div>
    <div class="content flex-center">
      <div class="detail">
        <div class="place">广州</div>
        <div class="other">联系人：林小姐</div>
        <div class="other">传真：020-34567686</div>
        <div class="other">网址：http://www.tydtazwbgz.com/</div>
        <div class="other">地址：广东省广州市番禺区石楼镇花城创意园B-408</div>
      </div>
      <div id="map" class="map">
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import mapObj from '@/utils/map'
let map = null
let mPoint = null
let local = null
export default {
  data () {
    return {
      lng: '113.490',
      lat: '22.977'
    }
  },
  mounted () {
    mapObj.init().then(BMap => {
      // 创建Map实例
      map = new BMap.Map('map')
      mPoint = new BMap.Point(this.lng, this.lat)
      map.centerAndZoom(mPoint, 16)
      const top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT})
      const top_left_navigation = new BMap.NavigationControl()
      map.addControl(top_left_control)
      map.addControl(top_left_navigation)
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_PERSPECTIVE_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP]
        })
      )
			map.addOverlay(new BMap.Marker(mPoint))
      map.panTo(mPoint)
      const opts = {
        width : 330,
        height: 65
      }
      const content = '<p style="margin-bottom: 5px;color: #cc5522;font-size: 16px;font-weight: bold;">通用电梯安装维保（广州）有限公司</p><p style="font-size: 14px;color:#000;">地址：广东省广州市番禺区石楼镇花城创意园B-408</p><p style="font-size: 14px;color:#000;">电话：020-34567686</p>'
      const infoWindow = new BMap.InfoWindow(content, opts)
      map.openInfoWindow(infoWindow, mPoint)
    })
  }
}
</script>

<style lang="less" scoped>
.content{
  margin: 40px 0;
  justify-content: space-between;
  align-items: flex-start;
  .detail{
    .place{
      font-size: 30px;
      color: #D72F2E;
      margin-bottom: 15px;
    }
    .other{
      font-size: 16px;
      color: #666;
      line-height: 30px;
    }
  }
  .map{
    width: 674px;
    height: 376px;
  }
}
</style>
