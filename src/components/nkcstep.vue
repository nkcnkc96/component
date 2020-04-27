<template>
  <div class="step">
     <ul class="steps" @click="nextStep">
              <li class="active stepItem"><slot name="first"></slot></li>
              <li class="line" :class="{active:isshow}"></li>
              <li class="stepItem" :class="{active:isshow}"><slot name="second"></slot></li>
              <li class="line " :class="{active:isshow1}"></li>
              <li class="stepItem" :class="{active:isshow1}"><slot name="third"></slot></li>
              <li class="line" :class="{active:isshow2}"></li>
              <li class="stepItem" :class="{active:isshow2}"><slot name="fourth"></slot></li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isshow: false,
      isshow1: false,
      isshow2: false,
      index: ''
    }
  },
  methods: {
    nextStep (e) {
      const target = e.target// 事件发生的元素
      const nodeList = e.target.parentNode.children// 同级元素集合
      const targetIndex = this.tabIndex(target, nodeList)// 调用tabIndex方法，返回值便是元素下标
      if (targetIndex > 1) {
        this.isshow = true
      } else {
        this.isshow = false
      }
      if (targetIndex > 3) {
        this.isshow1 = true
      } else {
        this.isshow1 = false
      }
      if (targetIndex > 5) {
        this.isshow2 = true
      } else {
        this.isshow2 = false
      }
    },
    tabIndex (target, nodeList) {
      for (let i = 0; i < nodeList.length; i++) {
        if (target === nodeList[i]) {
          return i
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .steps{
    display: flex;
    .stepItem{
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
    .line{
      height: 1px;
      flex: 1;
      background-color: #eee;
      margin-top:12px ;
    }
    .active{
      background-color: #1988fe;
    }
  }
</style>
