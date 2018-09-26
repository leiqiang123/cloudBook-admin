<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>添加轮播图</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form>
            <el-form-item label="标题:" style="width:500px;">
                <el-input v-model="carouselData.title"></el-input>
            </el-form-item>
            <el-form-item label="轮播图书籍:">
                <el-select v-model="carouselData.category" @change="categoryChange">
                    <el-option v-for="(item, index) in categoryData" :key="index" :label="item.title" :value="item._id"></el-option>
                </el-select>

                <div class="book-item clearfix" v-if="getBookItem[0]">
                    <div class="img-wrap">
                        <img :src="getBookItem[0].img">
                    </div>
                    <div class="book-desc">
                        <div class="title">
                            标题： {{getBookItem[0].title}}
                        </div>
                        <div class="author">
                            作者： {{getBookItem[0].author}}
                        </div>
                    </div>
                </div>

            </el-form-item>
            <el-form-item label="轮播图片:">
                <uploadcom v-model="carouselData.img"></uploadcom>
            </el-form-item>
            <el-form-item label="index:">
                <template>
                    <el-input-number v-model="carouselData.index" :min="1" :max="1000" label="描述文字"></el-input-number>
                </template>
            </el-form-item>
        </el-form>
        <el-dialog title="书籍列表" :visible.sync="isShow">
            <el-table :data="bookData">
                <el-table-column property="title" label="书名" width="150"></el-table-column>
                <el-table-column property="name" label="书籍头图" width="120">
                    <template slot-scope="scope">
                        <img :src="scope.row.img" class="img-item">
                    </template>
                </el-table-column>
                <el-table-column property="author" label="作者"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" size="small" @click="handleAddBook(scope.row._id)">添加</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
        <!-- <el-button @click="handleAdd" type="primary" v-else>确定添加</el-button> -->
        <el-button @click="handleSave" type="primary" v-if="this.$route.path == '/layout/editcarousel'">保存更改</el-button>
        <el-button @click="handleAdd" type="primary" v-else>确定添加</el-button>
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
                carouselData:{
                    title:'',
                    img:'',
                    index:'',
                    book:'',
                    category:''
                },
                categoryData:[],
                isShow:false,
                bookData:[],
                bookCount:0
            }
        },
        methods:{
            getcategory () {
                this.$axios.get('/category').then(res => {
                    this.categoryData = res.data
                })
            },
            async getBookData () {
                const res = await this.$axios.get(`/category/${this.carouselData.category}/books`)
                this.bookData = res.data.books
                this.bookCount = res.count
            },
            categoryChange () {
                this.isShow = true
                this.getBookData()
            },
            handleAddBook (id) {
                this.carouselData.book = id
                this.isShow = false
            },
            handleAdd () {
                let isCanSubmit = true
                for(let key in this.carouselData){
                    if(!this.carouselData[key]){
                        isCanSubmit = false
                    }
                }
                if(isCanSubmit){
                    this.$axios.post('/swiper',this.carouselData).then(res => {
                        if(res.code == 200){
                            this.$message.success(res.msg)
                            this.$router.push('/layout/carousel')
                        }
                    })
                }else{
                    this.$message.error('缺少必要参数')
                }
            },
            getInitData () { //编辑页面下用
                this.$axios.get(`/swiper/${this.$route.query.name}`).then(res => {
                    this.carouselData = {
                        ...this.carouselData,
                        ...res.data,
                        book:res.data.book._id, //回填书籍id
                        category:res.data.book.type  // 回填分类id
                    }
                    this.getBookData()
                    console.log(this.categoryData)
                })
            },
            handleSave () { //在编辑页面下保存更改
                this.$axios.put(`/swiper/${this.$route.query.name}`, this.carouselData).then(res => {
                    if(res.code == 200) {
                        this.$message.success(res.msg)
                        this.$router.push('/layout/carousel')
                    }
                })
            }
        },
        created () {
            this.getcategory()
            console.log(this.$route.path)
            if(this.$route.path == '/layout/editcarousel') { //编辑页面
                this.getInitData()
            }else{  
                console.log(1)
                this.carouselData = {
                    title:'',
                    img:'',
                    index:'',
                    book:'',
                    category:''
                }
            }
        },
        computed: {
            getBookItem () {
                if(this.carouselData.book){
                    return this.bookData.filter(item => item._id == this.carouselData.book)
                }else{
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.img-item{
    width: 100px;
    height: 80px;
}
.book-item{
    margin-top: 20px;
    width: 430px;
    padding: 15px;
    border: 1px solid #999;
    border-radius: 4px;
}
.img-wrap{
    float: left;
    width: 100px;
    height: 120px;
}
.img-wrap img{
    display: block;
    width: 100%;
    height: 100%;
}
.book-desc{
    float: left;
    margin-left: 20px;
}
.title{
    color: #333;
    font-weight: 700;
    font-size: 15px;
}
.author{
    color: #555;
}
</style>