<template>
  <div class="yzm-form">
    <div class="yzm-form-wrap">
      <el-form class="yzm-table" ref="form" :model="form" label-width="100px">
       <el-form-item label="手机号码">
        <el-input size='small' v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="图形验证码" class="yzm-width">
        <el-input size='small' v-model="form.imgPsd"></el-input>
        <img class="yzm-img" :src="yzmImg" alt="yzm" @click="updataYZM">
      </el-form-item>
      <el-form-item label="短信验证码" class="yzm-width">
        <el-input size='small' v-model="form.dxPsd"></el-input>
        <el-button size='small' class="btn-fsyzm" type='primary'>发送短信</el-button>
      </el-form-item>
      <el-form-item label="设置新密码">
        <el-input size='small' v-model="form.newPsd" type='password'></el-input>
      </el-form-item>
       <el-form-item class="oper-wrap">
    <el-button size='small' @click="goback">取消</el-button>
    <el-button size='small' type="primary">确定</el-button>
  </el-form-item>
     </el-form>
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      form: {
        phone: "",
        imgPsd: "",
        dxPsd: "",
        newPsd: ""
      },
      yzmImg: ""
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
.yzm-width {
  div.el-input {
    width: 60%;
  }
}
.yzm-img {
  width: 30%;
  height: 32px;
  margin-top: 4px;
  float: right;
  cursor: pointer;
}
.yzm-table {
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
.yzm-form {
  background-color: #f6f6f6;
  .yzm-form-wrap {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    // min-height: 100vh;s
    .yzm-table {
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
