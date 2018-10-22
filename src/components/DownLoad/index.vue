<template>
  <div class="pages-wrap">
     <div class="all-pages">
         <div v-for="item in pagesData" class="title-item">
             <a :download='item.title' :href="item.downloadAdd"> <img :src="item.icon" class="pre-cion"> {{item.title}} <span class="time">{{item.date}}</span></a>
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
      .get('http://localhost:9000/tableDownloadListApi', {
          params: {
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
        this.initNum = +v - 1
        this.getData()
    },
    // tableDownload(id) {
    //     console.log(id)
    //     this.http
    //     .get('http://localhost:9000/tableDownloadApi', {
    //         params: {
    //             id: id
    //         }
    //     })
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(e => {
    //         console.log(e)
    //     })
    // }
  }
}
</script>
<style lang="scss" scoped>
.pages-wrap {
    .all-pages {
        .title-item {
            text-decoration: none;
            padding: 14px 0;
            padding-right: 1em;
            .time {
                float: right;
            }
            a {
                font-size: 16px;
                font-weight: 400;
                cursor: pointer;
                padding-left: 1em;
                margin: 0;
                text-decoration: none;
            }
            &:nth-child(2n+1) {
                background-color: #b0bcdc;
                border-radius: 4px;
            }
            &:hover {
                text-decoration: underline;
            }
            .pre-cion {
                display: inline-block;
                width: 1em;
            }
        }
    }
    .pag {
        text-align: right;
        margin-top: 2em;
    }
}
    
</style>
