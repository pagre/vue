<template>
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
        <div class="immediately-box">
            <router-link to="/">
                <div class="immediately">
                    立即购买
                </div>
            </router-link>
            <router-link to="/">
                <div class="add-cart">
                    加入购物车
                </div>
            </router-link>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"detailFooter"
}
</script>
<style lang="scss" scoped>
    .detailFooter{
        // position: relative;
        // z-index: 1000000;
        height:0.46rem;
        width:100%;
        background: #fff;
        position:fixed;
        bottom:0;
        left:0;
        z-index: 1000;
        display: flex;
        .service-box{
            width:35%;
            font-size:0.12rem;
            height:0.46rem;
            display: flex;  
            text-align: center;
            border-top:0.01rem solid #ddd;
            i{
                display:block;
                width:100%;
                height:100%;
                
            }          
            .service{
                display:block;
                width:100%;
                display: flex;
                flex-direction: column;
                flex: 1;
                font-size: .12rem;
                color:#333;
                i{
                    background: url('http://www.hangowa.com/wap/images/kefu_b.png')no-repeat center;
                    background-size: 35%;
                }
            }
            .cart{
                display:block;
                width:100%;
                flex: 1;
                display: flex;
                flex-direction: column;
                font-size: .12rem; 
                color:#333;
                i{
                    background:url('http://www.hangowa.com/wap/images/cart_b.png')no-repeat center;
                    background-size: 30%;                    
                }               
            }

        }
        .immediately-box{
            flex: 1;
            background: yellow;
            display: flex;
            a{
                color:#fff; 
                font-size:0.16rem;  
                float: left;
                flex: 1;   
                line-height:  0.46rem;
                text-align: center;      
            }
            .immediately{
                display:block;
                width:100%;
                // #ED5564;
                background: #ED5564;
            }
            .add-cart{
                display:block;
                width:100%;
                background:#FB6E52;; 
            }
        }

    }
</style>
