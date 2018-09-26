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
                    <el-button size="small" type="primary" @click="handleDetail(scope.row._id)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="footer-page" @current-change="pageChange" :page-size="5" background layout="prev, pager, next" :total="count"></el-pagination>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tableData:[],
                page:1,
                count:1
            }
        },
        methods:{
            getData () {
                this.$axios.get('/swiper',{pn:this.page,size:5}).then(res => {
                    console.log(res)
                    this.count = res.count
                    this.tableData = res.data
                })
            },
            handleDetail (id) {
                this.$router.push({
                    path:'/layout/editcarousel',
                    query: {name:id}
                })
            },
            handleDelete (id) {
                this.$confirm('此操作将删除该轮播图, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.post('/swiper/delete', {ids:[id]}).then(res => {
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
                console.log(page)
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
.img{
    height: 50px;
    width: 50px;
}
.el-table{
    margin-left: 30px;
    margin-top: 20px;
}
.footer-page{
    margin-left: 320px;
}
</style>