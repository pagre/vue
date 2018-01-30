<template>
<div>
    <div class="swiperPage">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(value,index) in item" :key="index">
                <img :src="value.image" alt="">
            </mt-swipe-item> 
        </mt-swipe>
    </div>
</div>
</template>
<script>
import 'mint-ui/lib/style.css'
    export default {
        name: 'SwiperPage',
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
<style lang="scss">
    .swiperPage{
        background: #fff;
        height:1.67rem;
        img{
            width:100%;
            height:auto;
            border:0;
        }
    }

</style>

