<template>
  <div class="header">
        <div class="left">
            <a href="javascript:history.go(-1);">
                <i></i>                  
            </a>
        </div>
        <slot name="header"></slot>
        <div class="right"><i></i></div>
    </div>
</template>
<script>
    export default {
        name:"Headers",
    }
</script>
<style lang="scss">
 .header{
    
        position: fixed;
        z-index: 2 !important;
        top: 0;
        bottom: auto;
        left: 0;
        right: 0;
        height:50px;
        background: #ccc;
        display:flex;
        font-size:.14rem;
        width:100%;
        justify-content: space-around;
        line-height: 45px;
        padding:10px;
        slot{
            width:100%;
        }
        div{
            // background: red;
            // flex: 1;
            // width:100%;
            text-align: center;
            line-height: 45px;
            width:100%;
        }
        .left{
            width:.3rem;
            padding-top:12px;            
            // min-width: 320px;
            // max-width: 640px;
            // margin: 0 auto;
            a{
                display: block;
                width:100%;
                height:100%;
            }
            i{
                display:block;
                width:100%;
                height:100%;
                background: url('http://www.hangowa.com/wap/images/arrow_left_b.png') no-repeat center;
                background-size: 80%; 
            }
        
        }
        .right{
            width:.40rem;
            padding-top:12px;
            i{
                // float: right;
                display:block;
                width:50%;
                height:50%;
                font-size:.14rem;
                background: url('http://www.hangowa.com/wap/images/more_b.png') no-repeat left;
                background-size: 80% ;
            }
        }
        .center{
            width:100%;
            flex: 1;
        }
        .box{
            width:80%;
            height:90%;
            border-radius: 20px;
            // background: red;
            // overflow: hidden;
            position: relative;
            .text{
                width:100%;
                border:0;
                outline:none;
                border-radius: 20px;                
                height:45px;
                flex: 1;
            }
            i{
                display: block;
                position: absolute;
                top:0;
                right:-50px;
                background:url('http://www.hangowa.com/wap/images/search_ico.png') no-repeat center;
                background-size: 50%;
                height:100%;
                width:50px;
            }
        }
        
    }
</style>
