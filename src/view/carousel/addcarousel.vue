<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>添加轮播图</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form>
            <el-form-item label="标题:">
                <el-input v-model="carouselData.title"></el-input>
            </el-form-item>
            <el-form-item label="轮播图片:">
                <uploadcom v-model="carouselData.img"></uploadcom>
            </el-form-item>
            <el-form-item label="index:">
                <template>
                    <el-input-number v-model="carouselData.index" :min="1" :max="1000" label="描述文字"></el-input-number>
                </template>
            </el-form-item>
        </el-form>
        <el-button @click="handleAdd" type="primary">确定添加</el-button>
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
                carouselData:{
                    title:'',
                    img:'',
                    index:''
                }
            }
        },
        methods:{
            handleAdd () {

            }
        }
    }
</script>

<style scoped>

</style>