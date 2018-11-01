<template>
    <div class="publish-wrap">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标题" prop='title'>
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="类别">
                <el-select v-model="form.cateId" placeholder="请选择类别" prop='cateId'>
                    <el-option v-for="item in typeArr" :key='item.val' :label="item.desc" :value="item.val"></el-option>
                </el-select>    
            </el-form-item>
            <el-form-item label="来源" prop='resource'>
                <el-select v-model="form.resource" placeholder="请选择来源">
                    <el-option v-for="item in sourceArr" :key='item.val' :label="item.desc" :value="item.val"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="发布人" prop='editor'>
                <el-input v-model="form.editor"></el-input>
            </el-form-item>
            <el-form-item label="简介" prop='summary'>
                <el-input v-model="form.summary"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop='content'>
                <div id="editorElem"></div>
                <!-- <ueditorOne ref="diseaseFileUeditor"></ueditorOne> -->
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" :disabled='!(this.form.title && this.form.cateId && this.form.editor && this.form.summary && this.form.resource && this.form.content)'>发布</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import E from 'wangeditor'
export default {
    data() {
      return {
        form: {
          title: '',
          cateId: '',
          editor: '',
          summary: '',
          resource: '',
          content: ''
        },
        typeArr: [],
        sourceArr: [],
        // resContent: ''
      }
    },
    methods: {
      onSubmit() {
        this.http
        .post('http://chstpa.chstpa.com/article/saveArticle', this.form)
        .then(res => {
            if (+res.err.code === 200) {
                this.$router.push('pageList')
            } else {
                this.$message.error(res.err.desc);
            }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      httpFc(v) {
          return this.http
          .get(v)
      },
      /**
       * 判断路由有没有参数，有则是编辑跳转过来，没有则是新增发布文章
      */
      routerDetection() {
          let r = this.$route
          if (r.query.c && r.query.id) {
              this.http
                .get('http://chstpa.chstpa.com/article/getArticle', {
                    params: {
                        c: r.query.c,
                        id: r.query.id
                    }
                })
                .then(res => {
                    if (+res.err.code === 200) {
                        this.form.title = res.data.title;
                        this.form.editor = res.data.person;
                        this.form.resource = res.data.fromWhere;

                        var editor = new E('#editorElem')
                        editor.customConfig.uploadImgShowBase64 = true
                        editor.customConfig.zIndex = 1
                        editor.customConfig.onchange = (html) => {
                        console.log(html)
                        this.form.content = html
                        }
                        editor.create()
                        editor.txt.html(res.data.article)
                    } else {
                        this.$message.error(res.err.desc);
                    }
                })
                .catch(e => {
                    console.log(e)
                })
          }
      }
    },
    mounted() {
        if (this.$route.query.c) {
            this.routerDetection()
        } else {
            var editor = new E('#editorElem')
            editor.customConfig.uploadImgShowBase64 = true
            editor.customConfig.zIndex = 1
            editor.customConfig.onchange = (html) => {
            console.log(html)
            this.form.content = html
            }
            editor.create()
        }
    },
    created() {
        this.httpFc('http://chstpa.chstpa.com/article/getArticleCate').then(res => {
            if (+res.err.code === 200) {
                this.typeArr = res.data.data
            }
        })
        this.httpFc('http://chstpa.chstpa.com/article/getArticleResource').then(res => {
            if (+res.err.code === 200) {
                this.sourceArr = res.data.data
            }
        })
    },
    components: {
    }
}
</script>

<style lang='scss' scoped>
    .publish-wrap {
        padding-top: 2em;
    }
    
</style>