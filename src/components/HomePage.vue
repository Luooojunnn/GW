<template>
  <div class="all-content-wrap">
    <Header @loginToast="loginToast" :name="name"></Header>
    <router-view class="view-model" @loginToast="loginToast"></router-view>
    <bottomInfo></bottomInfo>
    <Login-dialog :showStatus='showStatus' @loginOK="loginOK"></Login-dialog>
  </div>  
</template>
<script>
import Header from './Header/Header.vue'
import LoginDialog from './Login/dialog.vue'
import bottomInfo from "./Modules/bottom-info";
export default {
  data() {
    return {
      showStatus: {},
      name: ''
    }
  },
  methods: {
    loginToast(v) {
      this.showStatus = Object.assign({}, {
        show: true,
        whitchOper: v
      })
    },
    loginOK(v) {
      this.name = v
    }
  },
  components:{
    Header,
    LoginDialog,
    bottomInfo
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
