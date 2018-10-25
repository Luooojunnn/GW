<template>
  <div class="pages-wrap">
     <div class="all-pages">
         <div v-for="item in pagesData" class="title-item">
             <p @click="clickPage(item.category, item.id)">{{item.title}} <span class="time">{{item.date}}</span></p>
         </div>
     </div>
     <div class="pag">
         <el-pagination
            background
            layout="prev, pager, next"
            :total="nums"
            @current-change="changePage">
        </el-pagination>    
     </div>
  </div>  
</template>
<script>
import mix from '../../mixins/clickPage'
export default {
    data() {
        return {
            pagesData: [],
            initNum: 0,
            nums: 0
        }
    },
  created() {
    this.getData()
  },
  components:{
  },
  methods: {
    getData() {
      this.http
      .get('http://http://chstpa.chstpa.com/article/getArticle', {
          params: {
              c: this.$route.query.c,
              id: this.$route.query.id,
              num: this.initNum,
              all: 1
          }
      })
      .then(res => {
          if (+res.err.code === 200) {
              this.nums = res.data.nums
              this.pagesData = res.data.pages
          } else {
              this.$message.error(res.err.desc);
          }
      })
      .catch(e => {
          console.log(e)
      })
    },
    changePage(v) {
        this.initNum = +v - 1
        this.getData()
    }
  },
  mixins: [mix]
}
</script>
<style lang="scss" scoped>
.pages-wrap {
    .all-pages {
        .title-item {
            padding: 14px 0;
            .time {
                float: right;
            }
            p {
                font-size: 16px;
                font-weight: 400;
                cursor: pointer;
                padding-left: 1em;
                margin: 0;
                padding-right: 1em;
            }
            &:nth-child(2n+1) {
                background-color: #cee4e4;
                border-radius: 4px;
            }
        }
    }
    .pag {
        text-align: right;
        margin-top: 2em;
    }
}
    
</style>
