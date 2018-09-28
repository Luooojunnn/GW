<template>
  <div class="module-news">
     <div class="module-news-notice">
         <h3>{{title}}</h3>
         <p>{{summary}}</p>
         <span class="module-news-detail">[详情]</span>
     </div>
     <tab-news :tabNewsData='tabNewsData'></tab-news>
  </div>  
</template>
<script>
import tabNews from "./tab-news";
export default {
  data() {
    return {
      title: "",
      summary: "",
      number: "",
      tabNewsData: {}
    };
  },
  components: {
    tabNews
  },
  created() {
    this.getDate();
  },
  methods: {
    getDate() {
      this.http
        .get("http://localhost:9000/newsApi")
        .then(res => {
          if (+res.err.code === 200) {
            this.title = res.data.notice.title
            this.summary = res.data.notice.summary
            this.number = res.data.notice.number
            this.tabNewsData = {
                learningDynamic: res.data.learningDynamic,
                announcement: res.data.announcement
            }
          } else {
            this.$message.error(res.err.desc);
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.module-news {
  border: solid 1px red;
  margin-left: 30px;
  padding: 10px 12px;
  .module-news-notice {
    cursor: pointer;
    &:hover {
      h3 {
        text-decoration: underline;
      }
      .module-news-detail {
          color: #000;
      }
    }
    .module-news-detail {
      width: 100%;
      display: block;
      text-align: right;
      color: #2c3e50;
    }
    p {
        margin-bottom: 0;
    }
  }
}
</style>
