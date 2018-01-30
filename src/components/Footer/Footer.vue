<template>
    <div class="footerPage">
       <div class="footer-nav">
           <router-link to="/">登录</router-link>
           <router-link to="/">注册</router-link>
           <router-link to="/">反馈</router-link>
           <router-link to="/">返回顶部</router-link>
       </div>
       <div class="footer-tubiao">
           <ul>
                <router-link to="/">
                    <li class="client"></li>  
                    <span>客户端</span>
                </router-link>
                <router-link to="/">
                    <li class="screen"></li>  
                    <span>触屏版</span>
                </router-link>
                <router-link to="/">
                    <li class="edition"></li>  
                    <span>电脑版</span>
                </router-link>    
           </ul>
           <div class="bottom-SM">
               Copyright &nbsp;©&nbsp; 2014-2016 汉购网
               <router-link to="/">hangowa.com</router-link>
               版权所有
           </div>
       </div>
       
    </div>
</template>

<script>
  export default {
      name: 'FooterPage'
  }
</script>

<style lang="scss">
.footerPage{
    margin:auto;
    margin-top:0.11rem;
    // height:40px;
    background:#fff;
    max-width:640px;
    
   .footer-nav{
       display:flex;
       height:0.23rem;
       padding:0.16rem 0 0.16rem 0;
       border-bottom:0.01rem solid #EEE; 
       a{
           flex:1;
           color:#555;
           text-align: center;
           line-height: 0.23rem;
       }
       
    }
    .footer-tubiao{
        ul{
            display: flex;
            justify-content: space-around;
            padding: 5px 0;
            border-bottom:0.01rem solid #eee;
            a{
                color:#999;
                li{
                    width:0.27rem;
                    height:0.27rem;
                    border-radius: 50%;
                    border:0.01rem solid #ccc;
                    padding:0.04rem;
                    opacity: 0.4; 
                }
                .client{
                    background: url("http://www.hangowa.com/wap/images/foot_app.png") no-repeat center; 
                    background-size:70%; 
                }
                .screen{
                    background: url("http://www.hangowa.com/wap/images/foot_touch.png") no-repeat center;
                    background-size:70%;                    
                }
                .edition{
                    background: url("http://www.hangowa.com/wap/images/foot_pc.png") no-repeat center;
                    background-size:70%;                    
                }

            }

        }
        .bottom-SM{
            height:0.36rem;
            color:#000;
            text-align: center;
            line-height: 0.36rem;
            font-size:0.1rem;
            a{
                font-weight: 600;
                font-size:0.1rem;
                color:#000;
            }
        }
    }
}
</style>

