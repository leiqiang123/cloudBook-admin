<template>
    <div>
        <div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>分类列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-table :data="tableData">
            <el-table-column prop="title" label="分类名" width="260"></el-table-column>
            <el-table-column label="分类图标" width="260">
                <template slot-scope="scope">
                    <img :src="scope.row.icon" class="avatar">
                </template>
            </el-table-column>
            <el-table-column prop="index" label="分类排序" width="260"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="primary" @click="handleEdit(scope.row._id)">编辑</el-button>
                    <el-button size="small" type="danger">删除分类</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData:[]
            }
        },
        methods:{
            getData () {
                this.$axios.get('/category').then(res => {
                    console.log(res)
                    this.tableData = res.data
                })
            },
            handleEdit (id) {
                console.log(id)
                this.$router.push({
                    path:'/layout/categoryedit',
                    query:{id}
                })
            }
        },
        created () {
            this.getData()
        }
    }
</script>

<style scoped>
.avatar{
    width: 50px;
    height: 50px;
}
</style>