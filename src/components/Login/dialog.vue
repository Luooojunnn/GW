<!--
        弹出层！
        1. 注册登录motaikuang
-->
<template>
    <div id="login-dialog">
        <el-dialog class="dialog-wrap" :title="showStatus['whitchOper'] ? '登录' : '注册'" :visible.sync="dialogShow" center>
            <el-form :model="form" label-position="left">
                <el-form-item label="身份证号" :label-width="formLabelWidth">
                    <el-input size='small' v-model="form.id" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth" v-if="!showStatus['whitchOper']">
                    <el-input size='small' class="sjh" v-model="form.phone" autocomplete="off"></el-input>
                    <el-button size='small' class="btn-fsyzm" type='primary'>发送验证码</el-button>
                </el-form-item>
                <el-form-item v-if="showStatus['whitchOper']" label="密码" :label-width="formLabelWidth">
                    <el-input size='small' v-model="form.psw" autocomplete="off" type='password'></el-input>
                </el-form-item>
                <el-form-item label="验证码" :label-width="formLabelWidth">
                    <el-input size='small' class="yzm" v-model="form.yzm" autocomplete="off"></el-input>
                    <img v-if="showStatus['whitchOper']" class="yzm-img" :src="yzmImg" alt="yzm" @click="updataYZM">
                </el-form-item>
                <!--只是为了更换在在注册、登录时显示的位置的不同-->
                <el-form-item v-if="!showStatus['whitchOper']" label="密码" :label-width="formLabelWidth">
                    <el-input size='small' v-model="form.psw" autocomplete="off" type='password'></el-input>
                </el-form-item>
            </el-form>
            <div class="forget-psd" v-if="showStatus['whitchOper']" @click="forgetPSD">
                忘记密码
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button size='small' @click="dialogShow = false">取 消</el-button>
                <el-button size='small' type="primary" @click="enterFc">确 定</el-button>
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
      formLabelWidth: "100px",
      yzmImg: "http://chstpa.bdpku.com/verify/getVerifyCode"
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
      this.$router.push("YzmForm");
    },
    updataYZM() {
      this.yzmImg = "http://chstpa.bdpku.com/verify/getVerifyCode?rnd=" + Math.random()
    },
    enterFc() {
      console.log(this.showStatus.whitchOper)
      // 0 注册， 1 登录
      let url = this.showStatus.whitchOper ? 'http://localhost:9000/loginApi' : 'http://localhost:9000/registeredApi'
      let params = this.showStatus.whitchOper
                   ? {"username": "admin", "password": "123456", "yzm": "1234"}
                   : {
                     username: this.form.id,
                     phone: this.form.phone,
                     phoenyzm: this.form.yzm,
                     password: this.form.psw
                   }
      this.http
      .post(url, params)
      .then(res => {
        console.log(res)
        if (+res.err.code === 200) {
          localStorage.setItem('USERNAME', res.data.username)
          localStorage.setItem('TOKEN', res.data.token)
          localStorage.setItem('TIMEFIIL', res.data.time)
          // 改变头信息
          this.$emit('loginOK', res.data.username)
          this.dialogShow = false
        } else {
          this.$message.error(res.err.desc);
        }
      })
      .catch(e => {
        console.log(e)
      })
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
      .el-form-item {
        margin-bottom: 10px;
      }
      .yzm-img {
        width: 30%;
        height: 32px;
        margin-top: 4px;
        float: right;
        cursor: pointer;
      }
      .btn-fsyzm {
        float: right;
        margin-top: 4px;
      } 
    }
  }
}
</style>
<style>
.el-dialog--center .el-dialog__body {
  padding-top: 10px;
  padding-bottom: 0px;
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
