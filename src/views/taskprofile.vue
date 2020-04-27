<template>
  <div class="taskProfile">
      <van-nav-bar title="任务详情">
            <template #left>
                <van-icon name="arrow-left" size="25px"/>
               <van-icon name="wap-home-o" size="25px" class="homeIcon"/>
            </template>
            <template #right>
                <van-icon name="ellipsis" size="25px"/>
            </template>
        </van-nav-bar>
        <div class="content">
        <van-tabs v-model="active" color="blue">
            <van-tab title="案件详情">
                <van-collapse v-model="activeNames">
                    <van-collapse-item name="1" value-class="vv">
                        <template #title>
                            <div class="cc"><div class="borderR"></div><strong>案件详情</strong></div>
                        </template>
                        <template #value>
                            <div>
                                <strong class="tprofile">案件详情</strong>
                                <strong class="tprofile">整案备注</strong>
                            </div>
                        </template>
                        <van-cell-group>
                            <van-cell title="报案号" value="DFSDFASFSD" />
                            <van-cell title="出现地点" value="SDASFAS" />
                        </van-cell-group>
                    </van-collapse-item>
                </van-collapse>
                 <van-collapse v-model="activeNames">
                    <van-collapse-item name="2" value-class="vv">
                        <template #title>
                            <div class="cc"><div class="borderR"></div><strong>案件详情</strong></div>
                        </template>
                        <template #value>
                            <div>
                                <strong class="tprofile">案件详情</strong>
                                <strong class="tprofile">整案备注</strong>
                            </div>
                        </template>
                        <van-cell-group>
                            <van-cell title="报案号" value="DFSDFASFSD" />
                            <van-cell title="出现地点" value="SDASFAS" />
                        </van-cell-group>
                    </van-collapse-item>
                </van-collapse>
                 <van-collapse v-model="activeNames">
                    <van-collapse-item name="3" value-class="vv">
                        <template #title>
                            <div class="cc"><div class="borderR"></div><strong>案件详情</strong></div>
                        </template>
                        <template #value>
                            <div>
                                <strong class="tprofile">案件详情</strong>
                                <strong class="tprofile">整案备注</strong>
                            </div>
                        </template>
                        <van-cell-group>
                            <van-cell title="报案号" value="DFSDFASFSD" />
                            <van-cell title="出现地点" value="SDASFAS" />
                        </van-cell-group>
                    </van-collapse-item>
                </van-collapse>
            </van-tab>
            <van-tab title="保单详情"></van-tab>
            <van-tab title="历史索赔"></van-tab>
        </van-tabs>
        </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      activeNames: ['1']
    }
  }
}
</script>

<style lang="less" scoped>
   .taskProfile .homeIcon{
        margin-left: 20px;
    }

    .tprofile {
        color:lightblue;
        height: 28px;
        width: 28px;
        border: 1px solid blue;
        border-radius: 5px;
        background-color: #ffffff;
        margin-right: 10px;
        padding: 2px;
        vertical-align: center;
        margin-bottom:3px ;
    }
    .cc{
        height: 18px;
        line-height: 18px;

    }
    strong{
        vertical-align: top;
        margin-left: 10px;
    }
    .borderR {
        width: 2px;
        height: 100%;
        background-color: blue;
        display: inline-block;
    }
</style>
