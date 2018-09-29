<template>
  <div class="pages-wrap">
     <div></div>
  </div>  
</template>
<script>
export default {
  created() {
    this.getData()
  },
  components:{
  },
  methods: {
    getData() {
      this.http
        .get("http://localhost:9000/specificPagesApi")
        .then(res => {
          if (+res.err.code === 200) {
            console.log(res)
          } else {
            this.$message.error(res.err.desc);
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
