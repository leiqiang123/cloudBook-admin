<template>
    <div class="user-manage">
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-table :data="tableData">
            <el-table-column prop="username" label="用户名" width="180"></el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column label="昵称" width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>邮箱: {{ scope.row.email }}</p>
                        <p>个性签名: {{ scope.row.desc }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.nickname }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="用户头像" width="180">
                <template slot-scope="scope">
                    <img :src="scope.row.avatar" class="avatar">
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="small" type="primary" @click="handleDetail">查看详细</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="footer-page" @current-change="pageChange" :page-size="7" background layout="prev, pager, next" :total="count"></el-pagination>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tableData:[],
            count:1,
            page:1
        }
    },
    methods:{
        getData () {
            this.$axios.get('/user',{pn: this.page, size: 7}).then(res => {
                console.log(res)
                if(res.code == 200){
                    this.count = res.count
                    // this.tableData = res.data
                    this.tableData = res.data.map(item => {
                        let time = new Date(item.createdTime)
                        let year = time.getFullYear()
                        let mon = time.getMonth()
                        let day = time.getDate()
                        let hour = time.getHours()
                        let min = time.getMinutes()
                        let sec = time.getSeconds()
                        item.date = `${year}-${mon + 1}-${day} ${hour}:${min}:${sec}`
                        return item
                    })
                }
            })
        },
        handleDetail(){
            this.$router.push('/layout/userDetails')
        },
        handleDelete(id){
            this.$confirm('此操作将删除一位管理员, 是否继续?', '警告', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$axios.post('/user/delete',{userIds:[id]}).then(res => {
                    this.$message.success(res.msg)
                    this.getData()
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
    created(){
        this.getData()
    }
};
</script>
<style scoped lang="scss">
.user-manage {
  .avatar{
      widows: 60px;
      height: 60px;
  }
  .footer-page{
      margin-left: 320px;
  }
}
</style>