<template>
  <div class="all-content-wrap">
     <Header @loginToast="loginToast"></Header>
      <router-view class="view-model"></router-view>
      <Login-dialog :showStatus='showStatus'></Login-dialog>
  </div>  
</template>
<script>
import Header from './Header/Header.vue'
import LoginDialog from './common/dialog.vue'
export default {
  data() {
    return {
      showStatus: {}
    }
  },
  methods: {
    loginToast(v) {
      this.showStatus = Object.assign({}, {
        show: true,
        whitchOper: v
      })
    }
  },
  components:{
    Header,
    LoginDialog
  }
}
</script>
<style>
  /* .el-button>span {
    font-size: 14px;
  } */
</style>

<style lang="scss" scoped type="text/css">
.all-content-wrap {
  padding: 0 80px;
  font-size: 14px;
  .view-model {
    padding: 10px;
    background-color: #f6f6f6;
  }
}
</style>
