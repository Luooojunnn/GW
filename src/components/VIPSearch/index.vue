<template>
  <div class="vip-search-form">
    <div class="vip-search-form-wrap">
      <el-form class="vip-search-table" ref="form" :model="form" label-width="100px">
       <el-form-item label="会员号">
        <el-input size='small' v-model="form.personNum"></el-input>
      </el-form-item>
      
      <el-button size='small' type="primary">查询</el-button>
     </el-form>
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      form: {
        personNum: ""
      }
    };
  },
  components: {},
  methods: {
    goback() {
      this.$router.go(-1);
    },
    updataYZM() {
      
    }
  }
};
</script>
<style lang='scss'>
.vip-search-width {
  div.el-input {
    width: 60%;
  }
}
.vip-search-img {
  width: 30%;
  height: 32px;
  margin-top: 4px;
  float: right;
  cursor: pointer;
}
.vip-search-table {
  .el-form-item {
    margin-bottom: 10px;
  }
}
.btn-fsyzm {
  float: right;
  margin-top: 4px;
}
</style>

<style lang="scss" scoped>
.vip-search-form {
  background-color: #f6f6f6;
  .vip-search-form-wrap {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    // min-height: 100vh;s
    .vip-search-table {
      width: 40%;
      margin-top: 20px;
      padding: 40px;
      background: white;
      border-radius: 4px;
      box-shadow: 4px 4px 2px #ccc;
      .oper-wrap {
        text-align: center;
        margin-left: -100px;
      }
    }
  }
}
</style>
