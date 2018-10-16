<template>
  <div id='header' :style="{'border-bottom': (this.$route.path === '/index' || this.$route.path === '/YzmForm') ? 'inhert' : 'inhert'}">
    <div class="title">
        <img class="logo" src="../../assets/logo.jpg" alt="LOGO" title="主页" @click="goIndex">
        <div class="oper"  v-if="!username">
            <el-button class="search-btn" size='small' type="primary" @click="loginFc(0)">注册</el-button>
            <el-button class="search-btn" size='small' @click="loginFc(1)">登录</el-button>
        </div>
        <div class="person-info" v-if="username">
          <p>{{username}} <span class="exit-btn" @click="exitFc">[退出]</span></p>
        </div>
    </div>
    <div class="nav" v-if="this.$route.path === '/index'">
        <nav class="nav-parent">
            <ul class="nav-child">
                <li v-for="(item, key) in navInfo" @mouseover="showChild(true, key)" @mouseout="showChild(false)">
                    <span>{{item.level1Name}}</span>
                    <div class="extr-txt" v-if='item.child.length && !!showStatus[key]'>
                        <span class="level2" v-for="i in item.child">{{i.level2Name}}</span>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
    <div v-if="routerName !== 'Index'" class="breadcrumb"><span @click="$router.push('/')" style="cursor: pointer;">主页</span> > <span>{{routerName}}</span></div>
    <!--面包屑繁琐，看情况再加-->
    <!-- <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right" v-if="this.$route.path !== '/index' && this.$route.path !== '/YzmForm'">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb> -->
  </div>  
</template>
<script>
export default {
  props: ["name"],
  data() {
    return {
      username: "",
      input: "",
      navInfo: [],
      showStatus: [],
      routerName: ''
    };
  },
  created() {
    this.getData("http://localhost:9000/navInfoApi");
    this.judge();
  },
  methods: {
    showChild(v, k = -1) {
      if (k > -1) {
        // 数组不能脏检查，需要用变异方法
        this.showStatus.splice(k, 1, 1);
      } else {
        this.showStatus = new Array(this.showStatus.length).fill(0);
      }
    },
    loginFc(v) {
      this.$emit("loginToast", v);
    },
    getData(url) {
      this.http
        .get(url)
        .then(res => {
          if (+res.err.code === 200) {
            this.navInfo = res.data.navInfo;
            this.showStatus.length = this.navInfo.length;
            this.showStatus.fill(0);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    /**
     * 判断localstorage有没有token且过期没，有效的话，直接显示登录态
     * ps 本来想直接操作 this.name 但是报警告了，不要直接操作props
     */
    judge() {
      let logined =
        localStorage.getItem("TOKEN") &&
        new Date().getTime() < localStorage.getItem("TIMEFIIL");
      if (logined && !this.name) {
        this.username = localStorage.getItem("USERNAME");
      }
    },
    exitFc() {
      this.http
        .post("http://localhost:9000/exitLoginApi", {
          token: localStorage.getItem("TOKEN")
        })
        .then(res => {
          if (+res.err.code === 200) {
            let arr = ["TOKEN", "USERNAME", "TIMEFIIL"];
            Object.keys(localStorage).forEach(item => {
              if (arr.includes(item)) {
                localStorage.removeItem(item);
              }
            });
            this.username = ''
          } else {
            this.$message.error(res.err.desc);
          }
        })
        .catch();
    },
    goIndex() {
      this.$router.push('/')
    }
  },
  watch: {
    name(username) {
      this.username = username;
    },
    // 面包屑的路由观察
    $route() {
      console.log(this.$route)
      this.routerName = this.$route.name
    }
  }
};
</script>
<style lang="scss" scoped type="text/css">
#header {
  padding: 20px 10px 10px;
  background-color: #f6f6f6;
  border-bottom: solid 1px rgba(166, 166, 166, 0.3);
  .title {
    display: flex;
    justify-content: space-between;
    .logo {
      width: 430px;
      height: 90px;
      cursor: pointer;
    }
    .oper {
      width: 273px;
      display: flex;
      justify-content: center;
      align-items: center;
      .search-btn {
        margin-left: 10px;
      }
    }
    .person-info {
      padding: 0 20px 0 0;
      .exit-btn {
        cursor: pointer;
        color: red;
      }
    }
  }
  .nav {
    height: 40px;
    background: #09abbf;
    .nav-parent {
      height: 100%;

      .nav-child {
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-right: 40px;
        li {
          z-index: 99;
          text-align: center;
          list-style-type: none;
          color: #fff;
          cursor: pointer;
          line-height: 40px;
          height: 100%;
          flex: 1;
          .extr-txt {
            margin-top: 1px;
            .level2 {
              display: block;
              background-color: #ccc;
              border-bottom: solid 1px #fff;
              color: #fff;
              padding: 0 6px;
            }
          }
        }
        li:hover {
          background-color: #ccc;
          border-bottom: solid 1px #fff;
          // color: #09abbf;
        }
      }
    }
  }
  .breadcrumb {
    padding-top: 15px;
    border-top: solid 1px rgba(166, 166, 166, 0.3);
    margin-top: 30px;
    span {
      color: red;
    }
  }
}
</style>
