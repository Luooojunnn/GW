<template>
  <div class="bottom-info">
    <div class="wrap-item">
        <img src="../../assets/bottom.jpg" class="img-bot">
        <p>地址：北京市朝阳区东三环北路甲2号京信大厦1334室</p>
        <p>邮编：100027</p>
        <p>备案号：京ICP备18045235号-1</p>
    </div>
    <div class="wrap-item">
        <p>电话：010-62057688</p>
        <p>网址：<a href="http://www.chstpa.com">www.chstpa.com</a></p>
        <p>邮箱：bangongshi@chstpa.com</p>
    </div>
  </div>
</template>


<script>
// import bottomInfoData from "../../data/bottomInfo";
export default {
    data() {
        return {
            // infoData: [1,2,3]
        }
    },
  components:{
  },
  created() {
    //   this.infoData = bottomInfoData.bottomInfoDate;
    //   console.log(bottomInfoData)
  }
}
</script>
<style lang="scss" scoped>
    .bottom-info {
        padding-top: 20px;
        border: solid 4px #f6f6f6;
        background-color: #fff;
        display: flex;
        height: 198px;
        border-left: solid 1px #70cad6;
        border-right: solid 1px #70cad6;
        .wrap-item {
            text-indent: 20%;
            flex: 1;
            padding-top: 4em;
            position: relative;
            .img-bot {
                width: 60px;
                height: 60px;
                position: absolute;
                left: 2em;
            }
            p {
                text-indent: 20%;
                font-size: 13px;
                color: rgb(102, 102, 102);
                font-family: 微软雅黑;
            }
        }
    }
</style>
