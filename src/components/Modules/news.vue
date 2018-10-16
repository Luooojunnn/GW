<template>
  <div class="module-news">
     <div class="module-news-notice" @click="clickPage(category, id)">
         <h3>{{title}}</h3>
         <p>{{summary}}</p>
         <span class="module-news-detail">[详情]</span>
     </div>
     <tab-news :tabNewsData='tabNewsData'></tab-news>
  </div>  
</template>
<script>
import tabNews from "./tab-news";
import mix from '../../mixins/clickPage'
export default {
  data() {
    return {
      title: "",
      summary: "",
      id: 0,
      category: '',
      tabNewsData: {}
    };
  },
  components: {
    tabNews
  },
  mounted() {
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
            this.id = res.data.notice.id
            this.category = res.data.notice.category
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
  },
  mixins: [mix]
};
</script>
<style lang="scss" scoped>
.module-news {
//   border: solid 1px red;
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
        text-indent: 2em;
    }
  }
}
</style>
