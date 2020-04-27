<template>
<div class="home">
  <van-nav-bar>
  <template #right>
    <van-icon name="ellipsis" color="#000"/>
  </template>
   <template #left>
    <van-icon name="cross" color="#000"/>
    <span class="ww">准入</span>
  </template>
</van-nav-bar>
<div class="content">
  <div class="time">2020/04/27 09:05:56</div>
  <div class="allow">准入</div>
  <div class="e1">
    请遵守公司考勤规范出勤打卡
  </div>
  <div class="e2">
    929园区
  </div>
  <div class="e2">
    9:30-17:30
  </div>
  <div class="e2">
    倪凯晨
  </div>
  <div class="e2">
    产险
  </div>
  <div class="e3">
    北京无线天利移动信息技术股份有限公司
  </div>
  <div class="e3">
    上海分公司
  </div>

</div>
</div>
</template>

<script>
export default {

}

</script>

<style lang="less" scoped>
.content{
  background-color: #008102;
  height:100%;
  .time{
    font-size: 25px;
    color: #fff;
    text-align: center;
    padding-top:50px ;
  }
  .allow{
    font-size: 30px;
    color:#fff;
    text-align: center;
    padding-top: 50px;
  }
  .e1{
    font-size: 12px;
    color: red;
    text-align: center;
    padding-top: 50px;
  }
  .e2{
    font-size: 14px;
    color: #fff;
    text-align: center;
    padding-top: 20px;
  }
  .e3{
    padding: 24px 20px 8px 75px;
    color: #fff;
  }
}
.van-nav-bar .ww{
  margin-left: 10px;
}
</style>
