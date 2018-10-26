<!--
import { clearInterval } from 'timers';
import { setInterval } from 'timers';
    底部相关信息轮播图
-->
<template>
  <div class="carousel-about-wrap" @mouseover="stopAni(1)" @mouseout="stopAni(0)">
     <div class="carousel-about-parent" :style="{'left': '-'+changeNum + 'px'}">
         <div class="carousel-about-item">
             <img class="c-img" src="../../assets/1.jpg" />
         </div>
         <div class="carousel-about-item">
             <img class="c-img" src="../../assets/2.jpg" />
         </div>
         <div class="carousel-about-item">
             <img class="c-img" src="../../assets/3.jpg" />
         </div>
         <div class="carousel-about-item">
             <img class="c-img" src="../../assets/4.jpg" />
         </div>
         <div class="carousel-about-item">
             <img class="c-img" src="../../assets/5.jpg" />
         </div>
         <div class="carousel-about-item">
             <img class="c-img" src="../../assets/6.jpg" />
         </div>
         <div class="carousel-about-item">
             <img class="c-img" src="../../assets/7.jpg" />
         </div>
     </div>
  </div>  
</template>
<script>
export default {
    data() {
        return {
            changeNum: 0,
            ani: '',
            // imgArr: ['../../assets/1.jpg', '../../assets/2.jpg', '../../assets/3.jpg', '../../assets/4.jpg', '../../assets/5.jpg', '../../assets/6.jpg', '../../assets/7.jpg']
        }
    },
  components: {},
  created() {
      this.changeNumFc();
  },
    methods: {
        changeNumFc() {
            this.ani = setInterval(() => {
               this.changeNum += 1
               if (this.changeNum === 3*300) {
                   this.changeNum = 0;
               }
            },60)
        },
        stopAni(v){
            v ? clearInterval(this.ani) : this.changeNumFc();
        },
        clickItem(v) {
            console.log(v)
        }
    }
};
</script>
<style lang="scss" scoped>
.carousel-about-wrap {
  height: 120px;
  border: solid 1px #fff;
  // display: flex;
  // white-space: nowrap;
  overflow: hidden;
  position: relative;
  .carousel-about-parent {
    margin-top: 10px;
    position: absolute;
    height: 100px;
    white-space: nowrap;
    .carousel-about-item {
      display: inline-block;
      width: 280px;
      height: 100%;
      margin-left: 20px;
      background: gray;
      .c-img {
          width: 100%;
          height: 100%;
      }
    }
  }
}
</style>
