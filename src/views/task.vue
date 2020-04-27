<template>
  <div class="task">
      <zj-header>人伤</zj-header>
      <van-tabs v-model="active">
          <div class="tt">
               <van-tab title="标签 1">
                <div class="firstTask">
                    <div class="header">
                        <span>都是代码号1</span>
                        <van-tag round type="success" size="medium" class="taskTag">处理中</van-tag>
                    </div>
                    <div class="content">
                        <div>neirong</div>
                        <div>neirong</div>
                        <div>neirong</div>
                        <div>neirong</div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="标签 2">
                <div class="firstTask">
                    <div class="header">
                        <span>都是代码号2</span>
                        <van-tag round type="success" size="medium" class="taskTag">处理中</van-tag>
                    </div>
                    <div class="content">
                        <div>neirong</div>
                        <div>neirong</div>
                        <div>neirong</div>
                        <div>neirong</div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="标签 3">
                <div class="firstTask">
                    <div class="header">
                        <span>都是代码号3</span>
                        <van-tag round type="success" size="medium" class="taskTag">处理中</van-tag>
                    </div>
                    <div class="content">
                        <div>neirong</div>
                        <div>neirong</div>
                        <div>neirong</div>
                        <div>neirong</div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="标签 4">
                <div class="firstTask">
                    <div class="header">
                        <span>都是代码号4</span>
                        <van-tag round type="success" size="medium" class="taskTag">处理中</van-tag>
                    </div>
                    <div class="content">
                        <div>neirong</div>
                        <div>neirong</div>
                        <div>neirong</div>
                        <div>neirong</div>
                    </div>
                </div>
            </van-tab>
          </div>
        </van-tabs>
        <van-tabbar v-model="acti">
            <van-tabbar-item>
                <span>自定义</span>
                <template #icon="props">
                <img :src="props.active ? icon.active : icon.inactive" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
       </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      acti: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tt{
    padding-right: 20px ;
    padding-left:20px ;
}
.header{
    border-bottom: 1px solid #ccc;
    height: 50px;
    line-height: 50px;
}
    .taskTag{
        float: right;
        margin-right:10px ;
        margin-top: 14px ;
    }
</style>
