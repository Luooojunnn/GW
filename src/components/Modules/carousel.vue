<template>
  <div class="module-carousel">
    <el-carousel :interval="4000" type="card" height="420px">
        <el-carousel-item v-for="item in imgArr" :key="item.id">
        <!-- <h3 @click="aa">{{ item }}</h3> -->
        <!-- <img src="http://p1.xiaoshidi.net/2018/08/31060613751498.jpg" alt=""> -->
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
      aa() {
          alert()
      },
      getDate() {
        this.http
          .get("http://localhost:9000/carouselImgApi")
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
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.module-carousel {
  .carousel-img {
    width: 100%;
    height: 100%;
  }
}
</style>
