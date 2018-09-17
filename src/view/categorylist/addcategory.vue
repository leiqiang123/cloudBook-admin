<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>添加分类</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form>
            <el-form-item label="分类名:">
                <el-input v-model="categoryData.title"></el-input>
            </el-form-item>
            <el-form-item label="分类图片:">
                <uploadcom v-model="categoryData.icon"></uploadcom>
            </el-form-item>
        </el-form>
        <el-button @click="handleAdd" type="primary">添加分类</el-button>
    </div>
</template>

<script>
    import uploadcom from '@/components/uploadcom'
    export default {
        components:{
            uploadcom
        },
        data () {
            return {
                categoryData:{
                    title:'',
                    icon:''
                }
            }
        },
        methods:{
            handleAdd () {
                this.$axios.post('/category',this.categoryData).then(res => {
                    if(res.code == 200){
                        this.$message.success(res.msg)
                        this.$router.push('/layout/categorylist')
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>