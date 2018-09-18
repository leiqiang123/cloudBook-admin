<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>轮播图列表页</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="tableData" class="el-table">
            <el-table-column label="头图" width="180">
                <template slot-scope="scope">
                    <img :src="scope.row.img" class="img">
                </template>
            </el-table-column>
            <el-table-column prop="sort" label="类名" width="180"></el-table-column>
            <el-table-column prop="index" label="index" width="180"></el-table-column>
            <el-table-column prop="title" label="标题" width="230"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="primary" @click="handleDetail">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tableData:[]
            }
        },
        methods:{
            getData () {
                this.$axios.get('/swiper').then(res => {
                    console.log(res)
                    this.tableData = res.data
                })
            },
            handleDetail () {
                console.log(1)
            }
        },
        created () {
            this.getData()
        }
    }
</script>

<style scoped>
.img{
    height: 50px;
    width: 50px;
}
.el-table{
    margin-left: 30px;
    margin-top: 20px;
}
</style>