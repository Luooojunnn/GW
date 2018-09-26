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
              <infoArea></infoArea>
            <infoArea></infoArea>
            </div>
            <div class="wrap-news-col">
              <infoArea></infoArea>
            <infoArea></infoArea>
            </div>
        </div>
        <div>
            <carouselAbout></carouselAbout>
        </div>
        <div class="wrap-bottom">
            <bottomInfo></bottomInfo>
        </div>
        <div>
            <footArea></footArea>
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
import bottomInfo from "../Modules/bottom-info";
import footArea from "../Modules/foot-area";

export default {
  components: {
    carousel,
    news,
    oper,
    tabNews,
    infoArea,
    carouselAbout,
    bottomInfo,
    footArea
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
.wrap-bottom {
  margin-top: 20px;
  border: solid 1px red;
}
</style>