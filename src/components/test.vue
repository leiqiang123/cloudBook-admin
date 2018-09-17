<template>
    <div>
        <h1>上传图片测试页</h1>

        <!-- <h2>传统表单上传</h2>
        <div>
            <form action="https://upload-z1.qiniup.com" method="post" enctype="multipart/form-data">
                <input type="file" name="file">
                <br>
                <input type="text" name="token" v-model="token">
                <br>
                <button>上传</button>
            </form>
        </div> -->
        <h2>ajax上传图片</h2>
        <input type="file" @change="handleChange">
        <img :src="imgData">
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                token:'',
                imgData:''
            }
        },
        methods:{
            getToken() {
                axios.get("http://upload.yaojunrong.com/getToken").then(res => {
                    console.log(res)
                    this.token = res.data.data
                })
            },
            handleChange (event) {
                let file = event.target.files[0]
                let forData = new FormData()
                forData.append('file',file,file.name)
                forData.append('token',this.token)
                axios.post('https://upload-z1.qiniup.com', forData, {
                    'Content-Type':'multipart/form-data'
                    // 'Content-Type':'application/x-www-form-urlencoded',
                    // 'Content-Type':'multipart/json'
                }).then(res => {
                    this.imgData = res.data.url
                })
            }
        },
        created () {
            this.getToken()
        }
    }
</script>

<style scoped>

</style>