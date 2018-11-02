<template>
  <div class="module-carousel">
    <el-carousel class='lbt' :interval="4000" height="430px" indicator-position="outside">
        <el-carousel-item v-for="item in imgArr" :key="item.id">
          <img :src="item.address" class="carousel-img">
        </el-carousel-item>
    </el-carousel>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      imgArr: []
    }
  },
  components: {},
  created() {
    this.getDate()
  },
  methods: {
      getDate() {
        this.http
          .get("http://chstpa.chstpa.com/slideShow")
          .then(res => {
            if (+res.err.code === 200) {
              this.imgArr = res.data.carouselData
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
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .carousel-img {
    width: 100%;
    height: 100%;
  }
  .lbt {
    width: 700px;
  }
</style>
