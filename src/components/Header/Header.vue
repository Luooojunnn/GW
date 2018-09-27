<template>
  <div id='header'>
    <div class="title">
        <img class="logo" src="../../assets/logo.jpg" alt="LOGO">
        <div class="oper">
            <!-- <el-input v-model="input" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input> -->
            <el-button class="search-btn" size='small' type="primary" @click="loginFc(0)">注册</el-button>
            <el-button class="search-btn" size='small' @click="loginFc(1)">登录</el-button>
        </div>
        <div class="person-info" style="display: none">
          <p>梁朝伟 ▼</p>
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
  </div>  
</template>
<script>
export default {
  data() {
    return {
      input: "",
      navInfo: [],
      showStatus: []
    };
  },
  created() {
    console.log(this.$route);
    this.getData("http://localhost:9000/navInfoApi");
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
        if (+res.status === 200) {
          this.navInfo = res.data.navInfo;
          this.showStatus.length = this.navInfo.length;
          this.showStatus.fill(0);
        }
      })
      .catch(e => {
        console.log(e);
      });
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
}
</style>
