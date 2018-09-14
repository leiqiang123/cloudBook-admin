<template>
    <div class="login">
        <h1 class="title">欢迎来到cloudBook 后台操作系统</h1>
        <div class="login-box">
            <h2 class="login-box-title">请登录</h2>
            <el-form>
                <el-form-item label="用户名:">
                    <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                    <el-input type="password" v-model="formData.password" placeholder="请输入密码"></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="handleLogin" type="primary" class="login-btn" :loading="isLoading">登录</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                formData: {
                    username:'',
                    password:''
                },
                isLoading:false
            }
        },
        methods:{
            handleLogin(){
                this.isLoading = true
                this.$axios.post('/login',this.formData).then(res => {
                    console.log(res)
                    if(res.code == 200){
                        this.$message.success('登录成功')
                        setTimeout(() => {
                            this.$router.push('/layout/index')
                        },1000)
                    }else{
                        this.$message.error(res.msg)
                    }
                    this.isLoading = false
                }).catch(res => {
                    this.isLoading = false
                })
            }
        }
    }
</script>

<style scoped>
.login{
    height: 100vh;
    background: #545c64;
    overflow: hidden;
}
.title{
    margin-top: 50px;
    color: #fff;
    text-align: center;
}
.login-box{
    width: 400px;
    height: 300px;
    border: 1px solid #e8e8e8;
    background: #fff;
    border-radius: 6px;
    padding: 40px;
    margin: 20px auto 0;
}
.login-box-title{
    text-align: center;
    font-weight: 400;
    color: #333;
}
.login-btn{
    width: 100%;
    box-sizing: border-box;
}
</style>