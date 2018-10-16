<template>
  <div class="vip-search-form">
    <div class="vip-search-form-wrap">
      <el-form class="vip-search-table" ref="form" :model="form" label-width="100px">
       <el-form-item label="姓名">
        <el-input class="name-search" size='small' v-model="form.personNum"></el-input>
        <el-button size='small' type="primary" @click="submitFc">查询</el-button>
      </el-form-item>
      
     </el-form>
    </div>
    <div class="result-info">
        <ul>
          <li v-for="item in infoList">
            {{item.name}} &nbsp;
            {{item.sex}} &nbsp;
            {{item.hospital}} &nbsp;
            {{item.rankName}}
          </li>
        </ul>
      </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      form: {
        personNum: ""
      },
      infoList: []
    };
  },
  components: {},
  methods: {
    submitFc() {
      this.form.personNum && this.http
        .post(
          "http://localhost:9000/vipSearchApi",
          {
            name: this.form.personNum
          }
        )
        .then(res => {
          if (+res.err.code === 200) {
            this.infoList = res.data.vipInfo
          }
        })
        .catch(e => {
          console.log(e);
        });
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
    .name-search {
      width: 60%;
    }
    button {
      float: right;
      margin-top: 4px;
    }
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
  .result-info {
    width: 70%;
    margin: 0 auto;
    background-color: white;
    border-radius: 4px;
    box-shadow: 4px 4px 2px #ccc;
    padding-left: 2em;
    ul {
      padding: 1em 0 1em 0;
      list-style-type: none;
      li {
        margin-bottom: 1em;
      }
    }
  }
}
</style>
