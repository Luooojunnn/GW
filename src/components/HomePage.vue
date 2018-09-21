<template>
  <div>
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
<style lang="scss" scoped type="text/css">
.view-model {
  padding: 10px;
  background-color: #f6f6f6;
}
</style>
