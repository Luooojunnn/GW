<template>
    <div class="oper-col">
        <div class="oper-col-item" @click="join(0)">
            <img class="item-img" src="../../assets/join.png" alt="join">
            <p>加入协会</p>
        </div>
        <div class="oper-col-item" @click="jumpTo('VIPSearch')">
            <img class="item-img" src="../../assets/person.png" alt="person">
            <p>会员查询</p>
        </div>
        <div class="oper-col-item">
            <img class="item-img" src="../../assets/apply.png" alt="apply">
            <p>项目申请</p>
        </div>
        <div class="oper-col-item" @click="jumpTo('downLoad')">
            <img class="item-img" src="../../assets/download.png" alt="download">
            <p>表格下载</p>
        </div>
    </div>
</template>
<script>
export default {
  components: {},
  methods: {
      jumpTo(path) {
          this.$router.push(path)
      },
      join(v) {
          this.$emit("loginToast", v);
      }
  }
};
</script>
<style lang="scss" scoped>
.oper-col {
  // height: 136px;
  margin-top: 16px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;

  .oper-col-item {
    text-align: center;
    cursor: pointer;
    width: 20%;
    background-color: #70cad6;
    border-radius: 12px;
    padding-top: 12px;
    .item-img {
      width: 56px;
      height: 56px;
    }
    p {
        color: #f6f6f6;
        margin-top: 0;
        font-weight: bold;
    }
    &:hover {
        background-color: #09abbf;
    }
  }
}
</style>