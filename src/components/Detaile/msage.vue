<template>
  <div class="massage" :class="{show:mask}">
      <div class="mask"></div>
      <div class="mask-box">
        <div class="msg">
            <div class="msg-img">
                <img src="http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05624128842049099_360.jpg" alt="">
            </div>
            <div class="msg-right">
                <p>湖北恩施鹤峰高山精制土豆宽粉400g*2袋包邮</p>
                <p class="price">
                    <span>￥9999</span>
                    <span class="stock">库存：9999件</span>
                </p>
            </div>
        </div>
        <div class="number">
            <p>
                <span class="number-span1">购买数量</span>
                <span class="number-span2">
                    <span class="btn">-</span>
                    <input type="text" value="2">
                    <span class="btn">+</span>
                </span>
            </p> 
        </div> 
        <div class="msg-footer">
            <div class="detailFooter">
                <div class="service-box">
                    <router-link to="/" class="service">
                        <i></i>
                        <p>客服</p>
                    </router-link>
                    <router-link to="" class="cart">
                        <i></i>
                        购物车
                    </router-link>
                </div>
                <div class="immediately-box" >
                    <router-link to="/">
                        <div class="immediately">
                            立即购买
                        </div>
                    </router-link>
                    <router-link to="/" >
                        <div class="add-cart">
                            加入购物车
                        </div>
                    </router-link>
                </div>
                
            </div>                 
        </div>
      </div>
  </div>
</template>
<script>
import detailFooter from "./detailFooter"
    export default {
        name:"massage",
        props:{
            
        },
        data(){
            return{
                mask:true
            }
        },
        components:{
            detailFooter
        }
    }
</script>
<style lang="scss" scoped>
// @import ;
.show{
    display:none;
}
    .massage{
        width:100%;
        height:100%;
        position: fixed;
        top:0;
        left:0;
        z-index: 10000;
        .mask{
            height:100%;
            height:100%;
            background:#000;
            opacity: 0.5;
        }
        .mask-box{
            width:100%;
            position: absolute;
            bottom:0;
            box-sizing: border-box;            
            // padding:15px; 
            background: #fff;          
            .msg{
               width:100%;
               bottom: 0.46rem;
               background: #fff;
               overflow: hidden;
               border-bottom: 0.01rem solid #ccc;
                .msg-img{
                    width:100px; 
                    float: left;
                    img{
                        width:100%;
                        height:auto;
                    }
                }
                .msg-right{
                    box-sizing: border-box;
                    padding:20px 15px 0 140px;
                    font-size:.14rem;
                    height:100px;
                    .price{
                        color:red;
                        .stock{
                            float: right;
                            box-sizing: border-box;
                            padding:5px;
                        }
                    }
                }
            }
        }
        .number{
            margin-top:40px;
            font-size:.14rem;
            border-top:0.01rem solid #ccc;
            overflow: hidden;
            height:50px;
            box-sizing: border-box;
            padding-left:15px;
            padding-top: 5px;
            // height:0;
            input{
                width:20px;
            }
            .number-span1{
                font-size: .14rem;
            }
            .number-span2{
                float: right;
                padding-right:15px;
            }
            .btn{
                display: inline-block;
                width:20px;
                height:20px;
                background: #ccc;
                text-align: center; 
            }
        }
        .msg-footer{
            width:100%;
            // position: absolute;
            // background: #000;
            height:0.46rem;
            margin-bottom:0px;
            bottom:0;
            left:0;
            z-index: 1000000;
        }
    }
</style>
