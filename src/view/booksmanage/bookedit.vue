<template>
    <div>
        <div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/layout/bookslist'}">图书列表</el-breadcrumb-item>
                <el-breadcrumb-item>图书编辑</el-breadcrumb-item>
            </el-breadcrumb>
            <el-form>
                <el-form-item label="书籍名:">
                    <el-input v-model="formData.title"></el-input>
                </el-form-item>
                <el-form-item label="作者:">
                    <el-input v-model="formData.author"></el-input>
                </el-form-item>
                <el-form-item label="图书头图">
                    <h3>暂时先放着</h3>
                </el-form-item>
                <el-form-item label="书籍简介:">
                    <el-input v-model="formData.desc"></el-input>
                </el-form-item>
                <div>
                    <span class="book-span">图书分类</span>
                    <template>
                        <el-select v-model="value" clearable placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.title"
                            :value="item.title">
                            </el-option>
                        </el-select>
                    </template>
                </div>
                <el-button @click="handleSave" type="primary" class="save-btn">保存更改</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                formData:{
                    // bookname:'',
                    // author:'',
                    // desc:''
                },
                options:[],
                value:''
            }
        },
        created () {
            this.getData()
        },
        methods:{
            getData () {
                const id = this.$route.query.name
                this.$axios.get(`/book/${id}`).then(res => {
                    console.log(res.data)
                    this.formData = res.data
                })
                this.$axios.get('/category').then(res => {
                    console.log(res)
                    this.options = res.data
                })
            },
            handleSave () {

            }
        }
    }
</script>

<style scoped>
.book-span{
    font-size: 14px;
    color: #606266;
}
.save-btn{
    margin-top: 20px;
}
</style>