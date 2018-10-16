<template>
  <div>
     <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="学会动态" name="first">
          <ul class="new-wrap">
            <li class="new-title" v-for="item in allData.learningDynamic.data" @click="clickPage(category, item.id)">* {{item.title}} <span class="news-date">{{item.date}}</span></li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="公告通知" name="second">
          <ul class="new-wrap">
            <li class="new-title" v-for="item in allData.announcement.data" @click="clickPage(category, item.id)">* {{item.title}} <span class="news-date">{{item.date}}</span></li>
          </ul>
        </el-tab-pane>
    </el-tabs>
     <div class="module-news-more" @click="clickPage(category)">更多 ></div>
  </div>  
</template>
<script>
import mix from '../../mixins/clickPage'
export default {
  props: ['tabNewsData'],
    data() {
      return {
        activeName: 'first',
        allData: {
          learningDynamic:{},
          announcement: {}
        },
        // 类别（默认在第一个：学会动态）
        category: 1
      };
    },
    methods: {
      handleClick(tab, event) {
        let i = +tab.index ? 'announcement' : 'learningDynamic'
        console.log(this.allData)
        this.category = +this.allData[i]['category']
        console.log( this.category)
      }
    },
  components:{
  },
  watch: {
    tabNewsData(n, o) {
      this.allData = n
    }
  },
  mixins: [mix]
}
</script>
<style lang="scss" scoped>
.new-wrap {
  padding-left: 0;
  .new-title {
    list-style-type: none;
    line-height: 2em;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .news-date {
    float: right;
  }
}
.module-news-more {
      text-align: right;
      margin-bottom: 4px;
      margin-right: 10px;
      font-size: 12px;
      cursor: pointer;
      font-weight: bold;
  }
</style>
