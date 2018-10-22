<template>
    <div class="publish-wrap">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标题" prop='name'>
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="类别">
                <el-select v-model="form.type" placeholder="请选择类别" prop='type'>
                    <el-option v-for="item in typeArr" :key='item.val' :label="item.desc" :value="item.val"></el-option>
                </el-select>    
            </el-form-item>
            <el-form-item label="来源" prop='source'>
                <el-select v-model="form.source" placeholder="请选择来源">
                    <el-option v-for="item in sourceArr" :key='item.val' :label="item.desc" :value="item.val"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="发布人" prop='person'>
                <el-input v-model="form.person"></el-input>
            </el-form-item>
            <el-form-item label="简介" prop='introduction'>
                <el-input v-model="form.introduction"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop='editorContent'>
                <div id="editorElem"></div>
                <!-- <ueditorOne ref="diseaseFileUeditor"></ueditorOne> -->
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" :disabled='!(this.form.name && this.form.type && this.form.person && this.form.introduction && this.form.source && this.form.editorContent)'>发布</el-button>
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
          name: '',
          type: '',
          person: '',
          introduction: '',
          source: '',
          editorContent: ''
        },
        typeArr: [],
        sourceArr: []
      }
    },
    methods: {
      onSubmit() {
        this.httpFc('http://localhost:9000/uploadPageApi').then(res => {
            console.log(res)
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      httpFc(v) {
          return this.http
          .get(v)
      }
    },
    mounted() {
        var editor = new E('#editorElem')
        editor.customConfig.uploadImgShowBase64 = true
        editor.customConfig.onchange = (html) => {
          console.log(html)
          this.form.editorContent = html
        }
        editor.create()
    },
    created() {
        this.httpFc('http://localhost:9000/pageSortApi').then(res => {
            if (+res.err.code === 200) {
                this.typeArr = res.data.data
            }
        })
        this.httpFc('http://localhost:9000/pageSourceApi').then(res => {
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


