<template>
  <div class="pages-wrap">
     <div class="all-pages">
         <div v-for="item in pagesData" class="title-item">
             <p>{{item.title}} <span class="time">{{item.date}}</span></p>
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
export default {
    data() {
        return {
            pagesData: [],
            initNum: 1,
            nums: 0
        }
    },
  created() {
    this.getData()
    console.log(this.$route)
  },
  components:{
  },
  methods: {
    getData() {
      this.http
      .get('http://localhost:9000/allPagesApi', {
          params: {
              c: this.$route.query.c,
              id: this.$route.query.id,
              num: this.initNum
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
        this.initNum = +v
        this.getData()
    }
  }
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
            }
            &:nth-child(2n) {
                background-color: #cee4e4;
                border-radius: 4px;
            }
        }
    }
    .pag {
        text-align: right;
    }
}
    
</style>
