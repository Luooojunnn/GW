<template>
  <div>
     <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="学会动态" name="first">学会动态</el-tab-pane>
        <el-tab-pane label="公告通知" name="second">公告通知</el-tab-pane>
        <!-- <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
    </el-tabs>
  </div>  
</template>
<script>
export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
  components:{
  }
}
</script>
<style lang="scss" scoped>

</style>
