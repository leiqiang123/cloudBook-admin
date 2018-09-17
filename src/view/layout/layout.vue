<template>
    <div class="layout">
        <div class="header ml-200">
            <h1 class="title">云书后台操作系统</h1>
            <el-dropdown class="header-r">
                <span class="el-dropdown-link">
                    <img class="header-img" :src="this.$store.state.userinfo.avatar">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>修改个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="left-bar">
            <el-menu class="el-menu" background-color="#545c64" text-color="#fff" :router="true">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">用户管理</template>
                        <el-menu-item index="/layout/index">首页</el-menu-item>
                        <el-menu-item index="/login">登录页</el-menu-item>
                        <el-menu-item index="/layout/users">用户管理页</el-menu-item>
                        <el-menu-item index="/layout/addusers">添加用户管理</el-menu-item>
                        <el-menu-item index="/layout/changeusers">修改用户信息</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>分类管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分类管理</template>
                        <el-menu-item index="/layout/categorylist">分类列表</el-menu-item>
                        <el-menu-item index="/layout/addcategory">添加分类</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>图书管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">图书管理</template>
                        <el-menu-item index="/layout/bookslist">图书列表</el-menu-item>
                        <el-menu-item index="/layout/addbooks">添加图书</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="4">
                    <i class="el-icon-location"></i>
                    <span slot="title">其他管理</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="main-content ml-200">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
.layout{
    .title{
        text-align: center;
        font-weight: 400;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #f1f1f1;
        font-size: 20px;
    }
    .ml-200{
        margin-left: 200px;
    }
    .left-bar{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 200px;
        padding-top: 60px;
        overflow: hidden;
        background: #545c64;
    }
    .main-content{
        padding: 15px;
    }
    /deep/{
        .el-menu{
            border-right: none;
        }
    }
    .header-r{
        position: fixed;
        top: 0;
        right: 30px;
    }
    .header-img{
        width: 60px;
        height: 60px;
    }
}
</style>