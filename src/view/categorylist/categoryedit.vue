<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/layout/categorylist'}">分类列表</el-breadcrumb-item>
            <el-breadcrumb-item>分类编辑</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form class="category-name" style="margin-top:20px;">
            <el-form-item label="分类名:">
                <el-input v-model="formData.title"></el-input>
            </el-form-item>
        </el-form>
        <div>
            <span class="category-span">分类图片:</span>
            <uploadcom v-model="formData.icon"></uploadcom>
        </div>
        <div class="sort">
            <span class="category-span">分类排序</span>
            <template>
                <el-input-number v-model="formData.index" :min="1" :max="1000" label="描述文字"></el-input-number>
            </template>
        </div>
        <el-button @click="handleChange" type="primary" class="save-btn">提交修改</el-button>
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
                formData:{}
            }
        },
        methods:{
            getData () {
                const id = this.$route.query.id
                this.$axios.get(`/category/${id}`).then(res => {
                    // console.log(res)
                    this.formData = res.data
                })
            },
            handleChange () {
                const id = this.$route.query.id
                this.$axios.put(`/category/${id}`,this.formData).then(res => {
                    if(res.code == 200){
                        this.$message.success(res.msg)
                        this.$router.push('/layout/categorylist')
                    }
                })
            }
        },
        created () {
            this.getData()
        }
    }
</script>

<style scoped>
.category-name{
    width: 600px;
}
.sort{
    margin-top: 20px;
}
.save-btn{
    margin-top: 20px;
}
.category-span{
    font-size: 14px;
    color: #606266;
}
</style>