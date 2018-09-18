<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>修改密码</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form>
            <el-form-item label="用户名:">
                <el-input :disabled="true" v-model="this.$store.state.userinfo.username"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input type="password" v-model="userInfo.password"></el-input>
            </el-form-item>
            <el-form-item label="新密码:">
                <el-input type="password" v-model="userInfo.new_password"></el-input>
            </el-form-item>
            <el-form-item label="再次确认密码:">
                <el-input type="password" v-model="renew_password"></el-input>
            </el-form-item>
        </el-form>
        <el-button @click="handleChange" type="primary">确认修改</el-button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                userInfo:{
                    password:'',
                    new_password:''
                },
                renew_password:''
            }
        },
        methods:{
            handleChange () {
                if(this.userInfo.new_password != this.renew_password){
                    this.$message.success("两次密码不匹配,请重新输入")
                }else{
                    this.$axios.put('/user/password',this.userInfo).then(res => {
                        console.log(res)
                        if(res.code == 200){
                            this.$message.success(res.msg)
                            this.$router.push('/layout/index')
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>