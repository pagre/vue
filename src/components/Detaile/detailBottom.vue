<template>    
    <div class="detailBottom">
        <div class="top">
            <p class="detaileName">{{goodsCommendList.goods_info.goods_name}}</p>
            <span class="Size">{{goodsCommendList.goods_info.goods_jingle}}</span>
            <p class="price">￥<em>{{goodsCommendList.goods_info.goods_price}}</em><span>销量：{{goodsCommendList.goods_info.goods_salenum}}件</span></p>
            <p class="delivery">送至&nbsp;<span class="country">&nbsp;{{goodsCommendList.goods_hair_info.area_name}}&nbsp;</span><span class="stock">&nbsp;{{goodsCommendList.goods_hair_info.if_store_cn}}</span></p>
            <p class="freight">{{goodsCommendList.goods_hair_info.content}}</p>
            <div class="choice"><span>已选</span><span>默认</span><span>></span></div>
        </div>
        <!-- 商品评价 -->
        <div class="evaluation1">
            <span class="span1">商品评价 </span><span class="span2">好评率100%</span><span class="span3">（0人评价）<span>></span></span>
        </div>
        <!-- 店铺 -->
        <div class="shop">
            <h3><i></i><span>{{goodsCommendList.store_info.store_name}}</span> <span class="fanhui">></span></h3>
            <div>
                <p>{{goodsCommendList.store_info.store_credit.store_desccredit.text}}
                    相符
                    <span>{{goodsCommendList.store_info.store_credit.store_desccredit.credit}}</span>
                </p> 
                <p>{{goodsCommendList.store_info.store_credit.store_desccredit.text}}
                    态度
                    <span>{{goodsCommendList.store_info.store_credit.store_desccredit.credit}}</span>
                </p>
                <p>
                    {{goodsCommendList.store_info.store_credit.store_desccredit.text}}速度
                    <span>{{goodsCommendList.store_info.store_credit.store_desccredit.credit}}</span>
                </p>  
            </div>
        </div>
        <!-- 店铺推荐 -->
        <div class="recommendation">
            <p>店铺推荐</p>
             <ul>
                <li v-for="(value,index) in goodsCommendList.goods_commend_list" :key="index">
                    <router-link :to='{name:"Detaile",params:{goods_id:value.goods_id}}'>
                        <dl>
                            <dt>
                                <img :src="value.goods_image_url" alt="">
                            </dt>
                            <dd>
                                <p class="name">{{value.goods_name}}</p>
                                <p>￥{{value.goods_price}}</p>
                            </dd>
                        </dl>
                    </router-link>
                </li>
            </ul>
            <div>
                <router-link to="/">点击查看商品详情</router-link>
            </div>
        </div>
    </div>   
</template>
<script>
import axios from 'axios'
import detailSwiper from './swiper'
export default {
    name:'detailBottom',
    props:{
        goodsCommendList:{
            required:true
        }
    },
    mounted(){
        console.log(this)
    }
}
    
</script>
<style lang="scss" scoped>
*{
    box-sizing: border-box;
}
.detailBottom{
    position: absolute;
    z-index: 1000;
    width:100%;
    font-size:.16rem;
    background: #eee;
    .top{
        box-sizing: border-box;
        padding-left:15px;
        background: #fff;
         padding-top:.15rem;
        .price{
            font-size: .12rem;
            em{
                font-size:.26rem;
                font-style: normal;
                 line-height: 0.3rem;
            }
            span{
                display:block;
                width:1.5rem;
                float: right;
                color:#333;
                text-align: right;
                font-size: .12rem;
                line-height: 0.3rem;
            }

        }
        .delivery{
            font-size:.16rem;
            .country{
                font-weight: 600;
            }
            .stock{
                color:#ff0000;
            }
        }
        .freight{
            font-size: .12rem;
            line-height: .3rem;
        }
        .choice{
            .span1{

            }
        }

    }
// name
    .detaileName{
        font-size:0.16rem;
        font-weight: 600;
        line-height:0.2rem;
    }
    .Size{
        width:100%;
        color:#888;
        font-size: 0.12rem;
    }
    // 价格
    .price{
        color:red;
        font-size:.2rem;

    }
    // 商品评价
    .evaluation1{
        box-sizing: border-box;
        padding-left: 15px; 
        background: #fff;
        margin-top:.2rem;
        line-height:.4rem;       
        span{
            display:inline;
        }
        .span1{
            color:#333;
        }
        .span2{
            color:#ff0000;
        }
        .span3{
            display: inline-block;
            float: right;
            box-sizing: border-box;
            padding-right:15px;
            text-align: right;
        }
    }
    // 店铺
    .shop{
        font-size: .16rem;
        margin:.25rem 0;
        background:#fff;
        h3{
            box-sizing: border-box;
            padding-left:15px;
            font-size: 0.16rem;
            padding-top:2px;
            line-height:0.2rem;
            i{
                display: inline-block;
                width:.2rem;
                height:.25rem;
                background:url('http://www.hangowa.com/wap/images/store_b.png')no-repeat ;
                background-size:80%;
                background-position-y: 10px;
            }
            .fanhui{
                float: right;
                padding-right:15px;
                color:#ccc;
                font-size:.2rem;
            }
        }
        div{
            padding:15px;
            display: flex;
            p{
                flex: 1;
            }
        }
    }
    // 商品评价
    .evaluation{
        height:0.2rem;
        margin-top:.11rem;
    }
    // 店铺推荐
    .recommendation{
        box-sizing: border-box;   
        padding-left:.12rem;
        overflow: hidden; 
        margin-bottom:0.5rem;    
        div{
            text-align: center;
            // line-height:0.3rem;
            // font-size:.16rem;
            a{
                line-height:0.3rem;
                font-size:.16rem;
                color:#333;
            }
        }
        p{
            width:100%;
            color:#888;
            font-size:0.14rem;
            padding:0.09rem;
            background: #fff;
        }
        ul{
            width:100%;
            box-sizing: border-box; 
            // padding-left: 
            overflow: hidden;
            background: #fff;
                      

            li{
                width:22%;
                float: left;
                // padding:5px;
                margin:0 3% 0.09rem 0;
                background: #fff;
                
                a{
                    display:block;
                    dl{
                        width:100%;
                        dt{
                            border:0.01rem solid #ccc;
                            img{
                                width:100%;
                            }
                        }
                        dd{
                            .name{
                                height:.30rem;
                                overflow: hidden;
                                line-height: .12rem;
                                font-size: .10rem;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>

