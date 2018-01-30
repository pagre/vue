<template>
    <div class="detailePage">
       <header>
           <div class="header-warp">
               <div class="Return">
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
           <detail-bottom  :goodsCommendList ="goodsCommendList"></detail-bottom>
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
            goodsCommendList:[]
        }
    },
    components:{
        detailSwiper,
        detailBottom,
        detailFooter
    },
    methods:{
        DetailePage(){
            // console.log(this)
            axios.get(`/mo_bile/index.php?act=goods&op=goods_detail&goods_id=${this.$route.params.goods_id}&key=`).then(res=>{
                console.log(res.data.datas.goods_image)
                this.item = res.data.datas.goods_image.split(",")
                this.goodsCommendList = res.data.datas.goods_commend_list
                console.log(res.data.datas.goods_commend_list)
            })
        },

    },
    mounted(){
        this.DetailePage()
    }
}
    
</script>
<style lang="scss" scoped>
@import "../../assets/components.scss";
    *{
        margin:0;
        padding:0;
    }
    .detailePage{
        overflow: hidden;
    }
    header{
        height:40px;
        width:100%;
        // background: red;
        position: absolute;
        top:0;
        left:0;
        z-index: 2;
    }
    .Return{
        // background: blue;
        height:0.448rem;
        box-sizing: border-box;
        padding-top:0.09rem;
        display: flex;
        background: #eee;
        display: none;
        a{
            font-size:0.16px;
            flex: 1;
        }
        .details{
            flex: 1;
            text-align: center;
            line-height:0.22rem;
            font-size:0.16rem;
            color:#333;
        }
        .left-tubiao {
            display:block;
            width:0.13rem;
            height:0.23rem;
            padding-left:10px;
            i{
                display:block;
                width:50%;
                height:80%;
                background:url("http://www.hangowa.com/wap/images/arrow_left_b.png") no-repeat center;
                background-size:100%;
            }
        }
        .right-tubiao{
            display:block;
            float: right;
            width:0.23rem;
            height:0.23rem;
            padding-left:10px;
            padding:10px 10px 0;
            i{
                float:right;
                margin-left:5px;
                display:block;
                width:40%;
                height:50%;
                background:url("http://www.hangowa.com/wap/images/more_b.png") no-repeat center right;
                background-size:100%;
            }
        }
        .active{
            color:#ED5564;
            border-bottom: solid 0.01rem #ED5564;
        }
    }
    .Return1{
        width:100%;
        height:100%;
        background: blue;
        padding-top:0.09rem;        
        .left-tubiao{
            display:block;
            width:0.23rem;
            height:0.23rem;
            // background: 
            i{
                display:block;
                width:50%;
                height:80%;
                background: url("http://www.hangowa.com/wap/images/arrow_left_r.png") no-repeat center;
            }
        }
        .right-tubiao{
            
        }
    }
    .content{
        margin:0;
        padding-top:3.67rem;
        overflow-y: auto;
        
    }
    .detaileSp{
            // height:3.67rem;
            width:100%;
            position: fixed;
            top:0;
            left:0;
            // z-index: 4;
            box-sizing: border-box;
            // height:2.67rem;
            padding:0 5px;
            overflow: hidden;
        }
</style>

