
let mixObj = {
  methods: {
    /**
     * @author luojun
     * @desc 将点击文章跳转抽取出来，不用每个组件都进行函数定义
     * @param {string} c - 文章所属类别
     * @param {string} id - 文章序号（id=0，代表当大类下所有文章，!=0，代表具体文章）
    */
    clickPage: function (c, id = 0) {
      console.log(c, id)
      if (+id) {
        this.$router.push({ path: 'pages', query: { c, id } })
      } else {
        this.$router.push({ path: 'allPages', query: { c, id } })
      }
    }
  }
}
export default mixObj
