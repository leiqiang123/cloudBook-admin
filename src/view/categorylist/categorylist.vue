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
                    <el-button size="small" type="danger" @click="handleDelete(scope.row._id)">删除分类</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="footer-page" @current-change="pageChange" :page-size="5" background layout="prev, pager, next" :total="count"></el-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData:[],
                page:1,
                count:1
            }
        },
        methods:{
            getData () {
                this.$axios.get('/category',{pn:this.page, size:5}).then(res => {
                    console.log(res)
                    this.count = res.count
                    this.tableData = res.data
                })
            },
            handleEdit (id) {
                console.log(id)
                this.$router.push({
                    path:'/layout/categoryedit',
                    query:{id}
                })
            },
            handleDelete (id) {
                this.$confirm('此操作将删除一个分类, 是否继续?', '警告', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.delete(`/category/${id}`).then(res => {
                        if(res.code == 200){
                            this.$message.success(res.msg)
                            this.getData()
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });             
            },
            pageChange (page) {
                this.page = page
                this.getData()
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
.footer-page{
      margin-left: 320px;
  }
</style>