<template>
  <div class="bottom-info">
    <div class="wrap-item" v-for="item in infoData">
        <h3>{{item.title}}</h3>
        <ul>
            <li v-for="i in item.detail">{{i.childTit}}</li>
        </ul>
    </div>
  </div>  
</template>


<script>
import bottomInfoData from "../../data/bottomInfo";
export default {
    data() {
        return {
            infoData: []
        }
    },
  components:{
  },
  created() {
      this.infoData = bottomInfoData.bottomInfoDate;
      console.log(bottomInfoData)
  }
}
</script>
<style lang="scss" scoped>
    .bottom-info {
        display: flex;
        height: 198px;
        .wrap-item {
            flex: 1;
            h3 {
                text-align: center;
            }
            ul {
                li {
                    cursor: pointer;
                    font-size: 14px;
                    padding-bottom: 8px;
                }
                li:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>
