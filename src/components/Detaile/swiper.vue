<template>

    <div class="swiperPage">
        <mt-swipe >
            <mt-swipe-item v-for="(value,index) in item" :key="index">
                <img :src="value" alt="">
            </mt-swipe-item> 
        </mt-swipe>
    </div>

</template>
<script>
import 'mint-ui/lib/style.css'
    export default {
        name: 'DetailSwiper',
        props:{
           item:{
               required:true
           }
        },
        data(){
            return {
              
            }
        },
        mounted(){
            console.log(this.item)
        }
    }
</script>
<style lang="scss" scoped>
    .swiperPage{
        background: #fff;
        box-sizing: border-box;
        // padding:0 1px;
        width:100%;
        height:3.67rem;
        img{
            width:90%;
            height:100%;
            border:0;
            margin:0 auto;
        }
    }

</style>

