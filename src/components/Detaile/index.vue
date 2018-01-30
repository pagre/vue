<template>
    <div class="detailePage">
       <header>
           <div class="header-warp">
               <div class="Return" >
                   <a href="javascript:history.go(-1)" class="left-tubiao"><i></i></a>
                    <router-link to="/" class="details active">商品</router-link>
                    <router-link to="/" class="details">详情</router-link>
                    <router-link to="/" class="details">评价</router-link>
                    <a href="#" class="right-tubiao"><i></i></a>
               </div>
               <div class="Return1">
                    <a href="javascript:history.go(-1)" class="left-tubiao"><i></i></a>
                    <a href="#" class="right-tubiao" >
                        <i></i>
                    </a>
               </div>
           </div>
       </header>
       <div class="detaileSp">
            <detail-swiper :item="item"></detail-swiper>               
        </div>
       <div class="content">
           <detail-bottom v-if="fl" :goodsCommendList ="goodsCommendList"></detail-bottom>
       </div>
       <detail-footer class="datailFooter" ></detail-footer>
    </div>
</template>
<script>
import axios from 'axios'
import detailSwiper from './swiper'
import detailBottom from './detailBottom'
import detailFooter from './detailFooter'
export default {
    name: 'Detaile',
    data(){
        return {
            DetaileList:[],
            imgList:[],
            item:[],
            goodsCommendList:"",
            fl:false,
            ls:this.$route.path            
        }
    },
    watch:{
        ls:function(){
            console.log(this.$route.fullPath)
            // window.location.href=this.$route.fullPath
            // this.DetailePage()
        }
    },
    components:{
        detailSwiper,
        detailBottom,
        detailFooter
    },
    methods:{
        DetailePage(){
            console.log(this)
            axios.get(`/mo_bile/index.php?act=goods&op=goods_detail&goods_id=${this.$route.params.goods_id}&key=`).then(res=>{
                // console.log(res.data.datas)
                this.item = res.data.datas.goods_image.split(",")
                this.goodsCommendList = res.data.datas
                this.fl = true
                console.log(res.data.datas)
            })
        },
    },
    mounted(){
        this.DetailePage()
    },
    beforeUpdate(){
        console.log(this.$route)
        this.ls = this.$route
    },
    updated(){
        // console.log(this.$route)
        // this.$nextTick(function(){
        //     this.DetailePage() 
        // })
               
    }
    
}
    
</script>
<style lang="scss" scoped>
@import "../../assets/components.scss";
@import "./detaile.scss";
</style>

