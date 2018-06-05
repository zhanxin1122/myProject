<template>
  <div>
    <div class="big-title mgb20">公司简介</div>
    <div class="intro-header">
      <img :src="require('@/assets/images/abort/compony.jpg')"/>
      <div>
        <p class="space2">通用电梯安装维保（广州）有限公司，成立于2014年，注册资金1000万，具有国家技术质量监督局特种设备安装维保 （ B级 ） 资 质 ， 并 同 时 取 得 ISO9001、 ISO14001及OHSAS18001认证、AAA级信用企业认证。</p>
        <p class="space2">长期以来，通过与日立电梯，瑞士迅达电梯，德国蒂森克虏伯电梯等大型电梯企业保持紧密的合作，荣幸成为其在广东地区销售、安装、维保指定代理商。</p>
        <p class="space2">本公司已成立由新梯销售部（旧楼加装电梯），安装部，日常售后保养服务部，大修急修部、质量监督中心等五大核心部门。公司积极引入现代化办公模式，配备OA办公流程系统，电梯远程监控系统，设置24小时服务热线，适应企业发展。</p>
        <p class="space2">本公司秉承“用户第一、安全第一、服务至上”的服务理念，坚持“以户满意为中心”为宗旨，公司将在现有各项基础下，完善各项制度，争取成为客户放心，满意的优秀企业。</p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.intro-header{
  overflow: hidden;
  img{
    width: 300px;
    height: 280px;
    float: left;
  }
  &>div{
    float: right;
    width: calc(100% - 350px);
  }
}
p{
  font-size: 14px;
  color: #666;
  line-height: 28px;
  margin-bottom: 20px;
}
</style>
