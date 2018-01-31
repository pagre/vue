<template>
    <div class="detailePage">
        <!-- :class="{logind:fl}" -->
         <loading :loading = loading></Loading>
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
           <massage></massage>
           <detail-bottom v-if="fl" :goodsCommendList ="goodsCommendList"></detail-bottom>
       </div>
       <div class="detallFooter-bottom">
           <!-- @click.native="Msg()" -->
            <detail-footer class="datailFooter" ></detail-footer>           
       </div>
    </div>
</template>
<script>
import axios from 'axios'
import detailSwiper from './swiper'
import detailBottom from './detailBottom'
import detailFooter from './detailFooter'
import massage from './msage'
export default {
    name: 'Detaile',
    data(){
        return {
            DetaileList:[],
            imgList:[],
            item:[],
            goodsCommendList:"",
            fl:false,
            ms:true,
            ls:true  ,
            loading:true       
        }
    },
    watch:{
        "$route"(to, from){
            console.log("相应")
            // this.ls = false
            this.$router.go(0)
            console.log(this)
        }
    },
    components:{
        detailSwiper,
        detailBottom,
        detailFooter,
        massage
    },
    methods:{
        DetailePage(){
            console.log(this)
            axios.get(`/mo_bile/index.php?act=goods&op=goods_detail&goods_id=${this.$route.params.goods_id}&key=`).then(res=>{
                console.log(res)   
                if(res.data.code==400){
                    this.fl=false 
                } else{
                    this.item = res.data.datas.goods_image.split(",")
                    this.goodsCommendList = res.data.datas
                    this.fl = true  
                    this.ls = false
                    this.loading = false
                }          
               
            })
        },
        Msg(){
            this.ms = !this.ms
        }
    },
    mounted(){
        this.DetailePage()
    },
    beforeUpdate(){
        console.log(this.$route)
        this.ls = this.$route
    },
    
}

    
</script>
<style lang="scss" scoped>
@import "../../assets/components.scss";
@import "./detaile.scss";
</style>

