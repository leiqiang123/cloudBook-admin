<template>
    <div>
        <div>
            <div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>图书列表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <el-table :data="tableData">
                <el-table-column prop="title" label="书名" width="240"></el-table-column>
                <el-table-column label="书籍头像" width="200">
                    <template slot-scope="scope">
                        <img :src="scope.row.img" class="avatar">
                    </template>
                </el-table-column>
                <el-table-column prop="index" label="书籍排序" width="200"></el-table-column>
                <el-table-column label="作者" width="200">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>作者: {{ scope.row.author }}</p>
                            <p>描述: {{ scope.row.desc }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.author }}</el-tag>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <!-- <el-table-column prop="author" label="作者" width="200"></el-table-column> -->
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="small" type="primary" @click="handleEdit(scope.row._id)">编辑</el-button>
                        <el-button size="small" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination class="footer-page" @current-change="pageChange" :page-size="5" background layout="prev, pager, next" :total="100"></el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tableData:[],
                page:1
            }
        },
        methods:{
            getData () {
                this.$axios.get('/book',{pn:this.page, size:5}).then(res => {
                    console.log(res)
                    this.tableData = res.data
                })
            },
            handleEdit (id) {
                console.log(id)
                this.$router.push({
                    path:'/layout/bookedit',
                    query: {name:id}
                })
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
 .avatar{
     width: 50px;
     height: 50px;
 }
 .footer-page{
      margin-left: 320px;
  }
</style>