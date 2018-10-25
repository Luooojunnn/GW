<template>
  <div class="yzm-form">
    <div class="yzm-form-wrap">
      <el-form class="yzm-table" ref="form" :rules="rules" :model="form" label-width="100px">
       <el-form-item label="手机号码" prop='phone'>
        <el-input size='small' v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="图形验证码" class="yzm-width" prop='imgPsd'>
        <el-input size='small' v-model="form.imgPsd"></el-input>
        <img class="yzm-img" :src="yzmImg" alt="yzm" @click="updataYZM">
      </el-form-item>
      <el-form-item label="短信验证码" class="yzm-width" prop='dxPsd'>
        <el-input size='small' v-model="form.dxPsd"></el-input>
        <el-button size='small' class="btn-fsyzm" type='primary' @click="setPhoneCode" v-if="!timing" :disabled='!(form.phone.length === 11)'>发送短信</el-button>
        <span v-if="timing" class="timing">{{timeNum}}s</span>
      </el-form-item>
      <el-form-item label="设置新密码" prop='newPsd'>
        <el-input size='small' v-model="form.newPsd" type='password'></el-input>
      </el-form-item>
       <el-form-item class="oper-wrap">
    <el-button size='small' @click="goback">取消</el-button>
    <el-button size='small' type="primary" @click="submitFc">确定</el-button>
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
      yzmImg: "",
      ctoken: "",
      timing: false,
      timeNum: 60,
      rules: {
        imgPsd: [{ required: true, message: "请填写图形验证码", trigger: "blur" }],
        phone: [
          { required: true, message: "请填写正确手机号", trigger: "blur" }
        ],
        dxPsd: [{ required: true, message: "请填写短信密码", trigger: "blur" }],
        newPsd: [{ required: true, message: "请输入新密码", trigger: "blur" }]
      }
    };
  },
  components: {},
  methods: {
    goback() {
      this.$router.go(-1);
    },
    updataYZM() {
      this.http.get("http://chstpa.chstpa.com/verify/getVerifyCode", {
        params: {
          rnd: Math.random()
        }
      })
      .then(res => {
        if (res.err.code === 200) {
          this.yzmImg = res.data.img
          console.log(this.yzmImg)
          this.ctoken = res.data.token
        } else {
          this.$message.error(res.err.desc);
        }
      })
      .catch(e => {console.log(e)})
    },
    setPhoneCode() {
      this.timing = true
      this.http
      .post('http://chstpa.chstpa.com/verify/getPhoneCode', {
        phone: this.form.phone
      })
      .then(res => {
        console.log(res)
      })
      .catch(e => {
        console.log(e)
      })
      this.timeEndFc()
    },
    timeEndFc() {
      let timer = setInterval(() => {
        this.timeNum--
        if (this.timeNum <= 0) {
          clearInterval(timer)
          this.timing = false
          this.timeNum = 60
        } 
      }, 1000)
    },
    submitFc() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.http
          .post('http://chstpa.chstpa.com/common/foundPassword', 
          Object.assign({}, this.form, {'ctoken': this.ctoken})
          )
          .then(res => {
            console.log(res)
            if (+res.err.code === 200) {
              this.$emit('loginToast', 1)
              this.$router.push('/')
            } else {
              this.$message.error(res.err.desc);
            }
          })
          .catch(e => {
            console.log(e)
          })
        }
      })
    }
  },
  mounted() {
    this.updataYZM()
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
      .timing {
        float: right;
        margin-right: 30px;
      }
    }
  }
}
</style>
