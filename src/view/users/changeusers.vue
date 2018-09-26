<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>修改用户信息</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form>
            <el-form-item label="用户名:">
                <el-input :disabled="true" v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item label="昵称:">
                <el-input v-model="formData.nickname"></el-input>
            </el-form-item>
            <el-form-item label="邮箱:">
                <el-input v-model="formData.email"></el-input>
            </el-form-item>
            <el-form-item label="头像:">
                <uploadcom v-model="formData.avatar"></uploadcom>
            </el-form-item>
            <el-form-item label="描述:">
                <el-input v-model="formData.desc"></el-input>
            </el-form-item>
        </el-form>
        <el-button @click="handleClick" type="primary">提交修改</el-button>
        <el-button @click="handleReset" type="primary">重置</el-button>
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
                formData:{
                    username:'',
                    nickname:'',
                    email:'',
                    avatar:'',
                    desc:''
                }
            }
        },
        methods:{
            initData () {
                this.formData = {
                ...this.$store.state.userinfo
                }
            },
            handleClick () {
                this.$axios.put('/user/userInfo',this.formData).then(res => {
                    if(res.code == 200){
                        let userinfo = res.data
                        this.$store.commit('CHANGE_USERINFO',userinfo)
                        this.initData()
                        this.$message.success(res.msg)
                    }
                })
            },
            handleReset () {
                this.formData = {
                    username:'',
                    nickname:'',
                    email:'',
                    avatar:'',
                    desc:''
                }
            }
        },
        created () {
            this.initData()
        }
    }
</script>

<style scoped>

</style>