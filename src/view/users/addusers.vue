<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>添加管理员</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form>
            <el-form-item label="用户名:">
                <el-input v-model="userInfo.username"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input type="password" v-model="userInfo.password"></el-input>
            </el-form-item>
            <el-form-item label="再次确认密码:">
                <el-input type="password" v-model="repassword"></el-input>
            </el-form-item>
            <el-form-item label="描述:">
                <el-input v-model="userInfo.desc"></el-input>
            </el-form-item>
            <el-form-item label="添加头像:">
                <uploadcom v-model="userInfo.avatar"></uploadcom>
            </el-form-item>
            <el-form-item label="邮箱:">
                <el-input v-model="userInfo.email"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
                <el-input v-model="userInfo.nickname"></el-input>
            </el-form-item>
        </el-form>
        <el-button @click="handleAdd" type="primary">确认添加</el-button>
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
                userInfo:{
                    username:'',
                    password:'',
                    desc:'',
                    avatar:'',
                    email:'',
                    nickname:''
                },
                repassword:''
            }
        },
        methods:{
            handleAdd () {
                if(this.repassword != this.userInfo.password){
                    this.$message.success("两次密码不匹配,请重新输入")
                }else{
                    this.$axios.post('/user',this.userInfo).then(res => {
                        if(res.code == 200) {
                            this.$message.success('登录成功')
                            this.$router.push('/layout/users')
                        }else{
                        this.$message.error(res.msg)
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>