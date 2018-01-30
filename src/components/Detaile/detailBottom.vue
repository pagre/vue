<template>    
    <div class="detailBottom">
        <div class="top">
            <p class="detaileName">name</p>
            <span class="Size">大小</span>
            <p class="price">￥<em>999</em><span>销量：13件</span></p>
            <p class="delivery">送至<span class="country">全国</span><span class="stock">有货</span></p>
            <p class="freight">免运费</p>
            <div class="choice"><span>已选</span><span>默认</span><span>></span></div>
        </div>
        商品评价
        <div class="evaluation1">
            <span class="span1">商品评价 </span><span class="span2">好评率100%</span><span class="span3">（0人评价）<span>></span></span>
        </div>
        <!-- 店铺 -->
        <div class="shop">
            <h3><i></i><span>云南特产专营店</span> <span class="fanhui">></span></h3>
            <div>
                <p>
                    描述相符
                    <span>4.9</span>
                </p> 
                <p>
                    服务态度
                    <span>4.9</span>
                </p>
                <p>
                    发货速度
                    <span>4.9</span>
                </p>  
            </div>
        </div>
        <!-- 店铺推荐 -->
        <div class="recommendation">
            <p>店铺推荐</p>
            <ul>
                <li v-for="(value,index) in goodsCommendList" :key="index">
                    <router-link to='{name:"Detaile",params:{goods_id:value.goods_id}}'>
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
        background: #fff;     
        p{
            width:100%;
            color:#888;
            font-size:0.14rem;
            padding:0.09rem;
        }
        ul{
            width:100%;
            box-sizing: border-box; 
            // padding-left:           

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

