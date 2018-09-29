<template>
  <div>
    <div class="wrap-top">
      <carousel class="caro"></carousel>
      <news class="news"></news>
    </div>
    <div>
      <oper></oper>
    </div>
    <div class="wrap-news">
      <div class="wrap-news-col">
        <infoArea title='meeting'></infoArea>
        <infoArea title='member'></infoArea>
      </div>
      <div class="wrap-news-col">
        <infoArea title='library'></infoArea>
        <infoArea title='learningData'></infoArea>
      </div>
    </div>
    <div>
      <carouselAbout></carouselAbout>
    </div>
  </div>
</template>
<script>
import carousel from "../Modules/carousel";
import news from "../Modules/news";
import oper from "../Modules/oper";
import tabNews from "../Modules/tab-news";
import infoArea from "../Modules/info-area";
import carouselAbout from "../Modules/carousel-about";

export default {
  components: {
    carousel,
    news,
    oper,
    tabNews,
    infoArea,
    carouselAbout,
  }
};
</script>
<style lang="scss" scoped>
.wrap-top {
  display: flex;

  .caro {
    flex: 3;
  }

  .news {
    flex: 2;
  }
}

.wrap-news {
  padding: 0 5%;

  .wrap-news-col {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
}

</style>