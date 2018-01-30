<template>
    <div class="header">
        <div class="logo">
            <!-- http://www.hangowa.com/wap/images/home_logo.png -->
            <!-- <img src="../../assets/images/logo.jpg" /> -->
        </div>
        <div class="input">
            <router-link to="/" class="souSuo">
                <i class="iconfont icon-search"></i>
            </router-link>
            <router-link to="/" class="header-tobiao">
                <i class="iconfont icon-gouwuche1 tuu-icon"></i>
            </router-link>
        </div>
       
    </div>
</template>

<script>
  export default {
      name: 'Header'
  }
</script>



<style lang="scss">
@import "../../assets/components.scss";
$fontSize:14px;
$backgroundColor:red;
.header{
    position: fixed;
    top:0;
    left:0;
    z-index: 1000;
    width:100%;
    height:0.56rem;
    padding:10px;
    background: #e7e7e9;
    box-sizing: border-box;
    .logo{
        width:32%;
        height:45px;
        float: left;
        background: url("http://www.hangowa.com/wap/images/home_logo.png") no-repeat center;
    }
    .input{
        float: left;
        width:66.6%;
        max-width:640px;
        line-height:45px;
        padding:5px 0;
        text-align: center;
        .souSuo{
            float:left;
            display:inline-block;
            margin-left:6px;
            // margin-top:2px;
            width:70%;
            height:35px;
            background: #fff;
            border:1px solid #ccc;
            border-radius: 20px;
            line-height:45px;
            i{
                float:right;
                display:block;
                width:35px;
                height:35px;
                line-height: 35px;
                font-size: 20px;
                color:#ccc;
            }

        }
        .header-tobiao{
            float: right;
            display:block;
            width:40px;
            height:45px;
            text-align: center;
            .tuu-icon{
                font-size:30px !important;  
            }
        }
    }
    
}
</style>

