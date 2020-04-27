<template>
  <div class="stepOut">
       <ul>
      <li class="stepItem" v-for="(stepItem, index) in stepInfo.list" :key="index">
        <!-- 模拟步骤条的节点，此处为圆圈 -->
        <div :class="stepInfo.step >= index+1 ? 'icon active':'icon'">{{stepItem}}</div>
        <!-- 模拟步骤条连接线，动态显示  -->
        <div :class="stepInfo.step >= index+2 ? 'line lineActive':'line'" v-show="index!==stepInfo.list.length-1"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'steps',
  props: {
    // 传递步骤参数
    stepInfo: {
      type: Object,
      default: function () {
        return {
          list: [],
          step: 0
        }
      }
    }
  }

}
</script>

<style lang="less" scoped>
.stepOut {
  width: 100%;
  height: 70px;
  display: flex;
//   justify-content: center;
  .stepItem {
    width: 260px;
    height: 70px;
    float: left;
    font-size: 16px;
    text-align: center;
    position: relative;
    .icon {
      margin: 0 auto;
      position: relative;
      z-index: 888;
      height: 100px;
      background-color: #eee;
      font-size: 10px;
      height: 24px;
      width: 54px;
      color: #fffeff;
      text-align: center;
      line-height: 24px;
      border-radius: 5px;
    }
    .active {
      background-color: #1988fe;
    }
    .line {
      position: absolute;
      top: 11px;
      left: 50%;
      border-bottom: 1px solid #eee;
      width: 260px;
    //   flex:1;
      z-index: 111;
    }
    .lineActive {
      border-bottom: 1px solid #1988fe;
    }
  }
}
</style>
