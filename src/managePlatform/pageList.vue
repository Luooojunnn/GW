<template>
    <div class="page-list">
        <el-row class="row-search">
            <el-col :span='16'>
                <el-input v-model="searchContent" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span='4' :offset='1'>
                <el-button type="primary" @click="searchPages(searchContent)">搜索</el-button>
            </el-col>
        </el-row>
        <el-table
            :data="pageList"
            stripe
            border
            style="width: 100%">
            <el-table-column
            prop="name"
            label="文章名"
            >
            </el-table-column>
            <el-table-column
            prop="person"
            label="作者"
            >
            </el-table-column>
            <el-table-column
            prop="oper"
            label="操作">
            <template slot-scope="scope">
                <el-button @click="delPage(scope.row.pageId)" type="text" size="small">删除</el-button>
                <el-button @click="edit(scope.row.pageId)" type="text" size="small">编辑</el-button>
            </template>
            </el-table-column>
        </el-table>
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
            pageList: [],
            searchContent: '',
            nums: 0
        }
    },
    created() {
        this.getAllPages('', 0)
    },
    methods: {
        getAllPages(v, num = 0) {
           this.http
          .get('http://chstpa.bdpku.com/article/searchArticle', {
              params: {
                  name: String(v),
                  num: num
              }
          })
          .then(res => {
              if (+res.err.code === 200) {
                this.nums = res.data.nums
                this.pageList = res.data.pageList
            }
          })
        },
        delPage(id) {
            let _this = this
            this.http
            .get('http://chstpa.chstpa.com/article/delArticle', {
                params: {
                    id
                }
            })
            .then(res => {
                if (+res.err.code === 200) {
                    this.getAllPages(_this.searchContent, 0)
                }
            })
        },
        searchPages(v) {
            this.getAllPages(v, 0)
        },
        changePage(v) {
            let _this = this
            this.getAllPages(_this.searchContent, (+v-1))
        },
        edit(id) {
            console.log(id)
            this.$router.push({ path: 'publishPage', query: {id: id }});
        }
    }
}
</script>
<style scoped lang='scss'>
    .page-list {
        padding-top: 2em;
        .row-search {
            margin-bottom: 1em;
        }
        .pag {
            text-align: right;
            margin-top: 2em;
        } 
    }
</style>
