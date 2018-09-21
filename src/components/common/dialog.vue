<!--
        弹出层！
        1. 注册登录motaikuang
-->
<template>
    <div id="login-dialog">
        <el-dialog class="dialog-wrap" :title="showStatus['whitchOper'] ? '登录' : '注册'" :visible.sync="dialogShow" center>
            <el-form :model="form" label-position="left">
                <el-form-item label="身份证号" :label-width="formLabelWidth">
                    <el-input v-model="form.id" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth" v-if="!showStatus['whitchOper']">
                    <el-input class="sjh" v-model="form.phone" autocomplete="off"></el-input>
                    <el-button class="btn-fsyzm" type='primary'>发送验证码</el-button>
                </el-form-item>
                <el-form-item v-if="showStatus['whitchOper']" label="密码" :label-width="formLabelWidth">
                    <el-input v-model="form.psw" autocomplete="off" type='password'></el-input>
                </el-form-item>
                <el-form-item label="验证码" :label-width="formLabelWidth">
                    <el-input class="yzm" v-model="form.yzm" autocomplete="off"></el-input>
                    <img v-if="showStatus['whitchOper']" class="yzm-img" src="../../assets/join.png" alt="yzm">
                </el-form-item>
                <!--只是为了更换在在注册、登录时显示的位置的不同-->
                <el-form-item v-if="!showStatus['whitchOper']" label="密码" :label-width="formLabelWidth">
                    <el-input v-model="form.psw" autocomplete="off" type='password'></el-input>
                </el-form-item>
            </el-form>
            <div class="forget-psd" v-if="showStatus['whitchOper']" @click="forgetPSD">
                忘记密码
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogShow = false">取 消</el-button>
                <el-button type="primary" @click="dialogShow = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
  props: ["showStatus"],
  data() {
    return {
      dialogShow: false,
      form: {
        id: "",
        psw: "",
        yzm: "",
        phone: ""
      },
      formLabelWidth: "100px"
    };
  },
  watch: {
    showStatus() {
      this.dialogShow = this.showStatus.show;
    }
  },
  methods: {
      forgetPSD() {
          console.log(this.$router);
          this.dialogShow = false;
          this.$router.push('YzmForm')
      }
  }
};
</script>
<style lang="scss">
/**
*   必须写在全局样式，否则不生效，所以需要一个id作为包裹
*/
#login-dialog {
  .dialog-wrap {
    .el-dialog {
      width: 40%;
      .yzm {
        width: 60%;
      }
      .sjh {
        width: 60%;  
      }
    //   .btn-fsyzm {
    //       float: right;
    //   }
    // 在验证码表单组件里写了全局样式了
    //   .yzm-img {
    //     width: 30%;
    //     height: 41px;
    //     vertical-align: middle;
    //     float: right;
    //   }
    }
  }
}
</style>
<style lang='scss' scoped>
    #login-dialog {
        .forget-psd {
            padding-top: 10px;
            text-align: right;
            text-decoration: underline;
            cursor: pointer;
        }
    }
</style>
