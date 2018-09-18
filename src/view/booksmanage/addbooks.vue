<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>添加图书</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="margin-top: 20px;">
            <span class="book-span">图书分类</span>
            <template>
                <el-select v-model="bookData.typeId" clearable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.title"
                    :value="item._id">
                    </el-option>
                </el-select>
            </template>
        </div>
        <el-form>
            <el-form-item label="爬虫链接">
                <el-input v-model="bookData.url"></el-input>
            </el-form-item>
        </el-form>
        <div>
            <!-- <span class="book-span">头像:</span> -->
            <el-switch
                v-model="isShow"
                active-text="填写头图链接"
                inactive-text="手动上传头图"
                :change="handleSwitch(isShow)">
            </el-switch>
            <el-form v-if="isShow" style="margin-top: 20px">
                <el-form-item>
                    <el-input v-model="imgLink"></el-input>
                </el-form-item>
            </el-form>
            <div v-if="!isShow">
                <!-- <span>手动上传</span> -->
                <uploadcom v-model="bookData.img"></uploadcom>
            </div>
        </div>
        <el-form>
            <el-form-item label="作者">
                <el-input v-model="bookData.author"></el-input>
            </el-form-item>
        </el-form>
        <el-button @click="handleSave" type="primary" class="save-btn">确认添加</el-button>
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
                options:[],
                bookData:{
                    author:'',
                    img:'',
                    url:'',
                    typeId:""
                },
                imgLink:'',
                isShow:true,
            }
        },
        methods:{
            handleSwitch (isShow) {
                isShow = !isShow
            },
            handleSave () {
                // console.log(this.bookData.typeId)
                // this.$axios.post('/book',this.bookData).then(res => {
                //     console.log(res)
                // })
            },
            getData () {
                this.$axios.get('/category').then(res => {
                    console.log(res)
                    this.options = res.data
                })
            }
        },
        created () {
            this.getData()
        }
    }
</script>

<style scoped>
.book-span{
    font-size: 14px;
    color: #606266;
}
.save-btn{
    margin-top: 20px;
}
</style>