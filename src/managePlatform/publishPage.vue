<template>
    <div class="publish-wrap">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标题" prop='name'>
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="类别">
                <el-select v-model="form.type" placeholder="请选择类别" prop='type'>
                    <el-option label="类别一" value="shanghai"></el-option>
                    <el-option label="类别二" value="beijing"></el-option>
                </el-select>    
            </el-form-item>
            <el-form-item label="发布人" prop='person'>
                <el-input v-model="form.person"></el-input>
            </el-form-item>
            <el-form-item label="简介" prop='introduction'>
                <el-input v-model="form.introduction"></el-input>
            </el-form-item>
            <el-form-item label="来源" prop='source'>
                <el-select v-model="form.source" placeholder="请选择来源">
                    <el-option label="来源一" value="shanghai"></el-option>
                    <el-option label="来源二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="内容" prop='editorContent'>
                <!-- <div id="editorElem"></div> -->
                <!-- <ueditorOne ref="diseaseFileUeditor"></ueditorOne> -->
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">发布</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
// import E from 'wangeditor'
// import {UEditor} from '../mixins/udeitor.js'
import ueditorOne from '../mixins/ueditor.vue'

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
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        console.log(this.form)
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
        // var editor = new E('#editorElem')
        // editor.customConfig.onchange = (html) => {
        //   this.form.editorContent = html
        // }
        // editor.create()
    },
    components: {
        ueditorOne
    }
}
</script>

<style lang='scss' scoped>
    .publish-wrap {
        padding-top: 2em;
    }
</style>


