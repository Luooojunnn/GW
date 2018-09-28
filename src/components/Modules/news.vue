<template>
  <div class="module-news">
     <div>
         <h3>2018世界公众科学素质促进大会</h3>
         <p>大会于2018 年9 月17-19 日在中国北京国家会议中心举办, 包括会议、展览和专项活动等三大部分50 余项安排，同期将举办全球参与人数最多的科普活动——全国科普日。</p>
     </div>
     <tab-news></tab-news>
  </div>  
</template>
<script>
import tabNews from './tab-news';
export default {
  components:{
      tabNews
  },
  created() {
      this.getDate()
  },
  methods: {
      getDate() {
          this.http
          .get('http://localhost:9000/newsApi')
          .then(res => {
            console.log(res)
          })
          .catch(e => {
              console.log(e)
          })
      }
  }
}
</script>
<style lang="scss" scoped>
    .module-news {
        border: solid 1px red;
        margin-left: 80px;
    }
</style>
