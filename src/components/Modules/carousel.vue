<template>
  <div class="module-carousel">
    <el-carousel :interval="4000" type="card" height="420px">
        <el-carousel-item v-for="item in 6" :key="item">
        <h3 @click="aa">{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
  </div>  
</template>
<script>
export default {
  components: {},
  methods: {
      aa() {
          alert()
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
</style>
