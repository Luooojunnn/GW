<template>
  <div>
     <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="学会动态" name="first">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="公告通知" name="second">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </el-tab-pane>
    </el-tabs>
  </div>  
</template>
<script>
export default {
  props: ['tabNewsData'],
    data() {
      return {
        activeName: 'first',
        allData: {}
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
  components:{
  },
  watch: {
    tabNewsData(n, o) {
      this.allData = n
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
