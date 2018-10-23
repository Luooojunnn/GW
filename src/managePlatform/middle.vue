<template>
    <div class="back-all-wrap">
        <el-row class="tac">
            <el-col class="col-wrap" :span="4">
                <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                >
                <el-menu-item index="1" @click="jumpTo('publishPage')">
                    <i class="el-icon-circle-plus-outline"></i>
                    <span slot="title">文章发布</span>
                </el-menu-item>
                <el-menu-item index="2" @click="jumpTo('pageList')">
                    <i class="el-icon-document"></i>
                    <span slot="title">文章列表</span>
                </el-menu-item>
                <el-menu-item index="3" @click="jumpTo('uploadFile')">
                    <i class="el-icon-upload2"></i>
                    <span slot="title">上传文档</span>
                </el-menu-item>
                <el-menu-item index="4" disabled>
                    <i class="el-icon-menu"></i>
                    <span slot="title">会员审核</span>
                </el-menu-item>
                <el-menu-item index="5" disabled>
                    <i class="el-icon-setting"></i>
                    <span slot="title">更多</span>
                </el-menu-item>
                </el-menu>
            </el-col>
            <el-col class="col-wrap" :span='16' :offset='2'>
                <div class="main-oper">
                    <el-button size='small' type='success' @click="jumpTo('/')">回到官网</el-button>
                    <el-button size='small' type='danger' @click="exitFc">退出登录</el-button>
                </div>
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  methods: {
    jumpTo(v) {
        this.$router.push(v)
    },
    exitFc() {
        localStorage.clear();
        this.jumpTo('/')
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("to", to);
    console.log("from", from);
    console.log("next", next);
    if (+localStorage.getItem("isAdmin") === 1) {
      next();
      return;
    }
    next("/index");
  },
  created() {

  }
};
</script>

<style lang='scss' scoped>
.back-all-wrap {
    height: 100vh;
    .tac {
        height: 100%;
        .col-wrap {
            height: 100%;
            .main-oper {
                margin-top: 2em;
            }
        }
    }
}
</style>


