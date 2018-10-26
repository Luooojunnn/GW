<template>
  <div class="info-area">
     <h3>{{tit}}</h3>
     <ul class="tit-wrap">
         <li v-for="item in pages" @click="clickPage(category, item.id)">- {{item.title}} <span class="news-date">{{item.date}}</span></li>
     </ul>
     <div class="info-area-more" @click="clickPage(category)">更多 ></div>
  </div>  
</template>
<script>
import mix from '../../mixins/clickPage'
export default {
  props: ['title'],
  data() {
    return {
      tit: '',
      pages: [],
      category: ''
    }
  },
  created() {
    switch (this.title) {
      case 'meeting': 
        this.tit = '会议'
        this.getData('http://chstpa.chstpa.com/article/getArticle?c=4&id=0')
        break
      case 'member':
        this.tit = '会员风采'
        this.getData('http://chstpa.chstpa.com/article/getArticle?c=5&id=0')
        break
      case 'library':
        this.tit = '医用组织库'
        this.getData('http://chstpa.chstpa.com/article/getArticle?c=6&id=0')
        break
      case 'learningData':
        this.tit = '学术资料'
        this.getData('http://chstpa.chstpa.com/article/getArticle?c=7&id=0')
        break
    }
  },
  components:{
  },
  methods: {
    getData(apiUrl) {
      this.http
      .get(apiUrl)
      .then(res => {
        if (+res.err.code === 200) {
          this.pages = res.data.pages
          this.category = res.data.category
        }
        // console.log(res)
      })
      .catch(e => {
        console.log(e)
      })
    }
  },
  mixins: [mix]
}
</script>
<style lang="scss" scoped>
  .info-area {
    display: inline-block;
    background-color: #eaeaea;
    border-radius: 4px;
    width: 48%;
    box-shadow: 2px 2px 2px #ccc;
    h3 {
      text-align: center;
      margin-bottom: 0;
    }
    .tit-wrap {
      margin-top: 12px;
      padding: 0 10px 0 10px;
      line-height: 2em;
      list-style-type: none;
      li:hover {
        text-decoration: underline;
        cursor: pointer;
      }
      .news-date {
        float: right;
      } 
    }
    .info-area-more {
      text-align: right;
      margin-bottom: 4px;
      margin-right: 10px;
      font-size: 12px;
      cursor: pointer;
      font-weight: bold;
    }
  }
</style>
