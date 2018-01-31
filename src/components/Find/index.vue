<template>
    <div class="findPage" >
        <loading :loading = loading></Loading>
        <div v-if="ls">
            <headers>
                <div slot ="header" class="center">{{find}}</div>
            </headers>
            <!-- <div class="header">
                <div class="left">
                    <a href="javascript:history.go(-1);">
                        <i></i>                  
                    </a>
                </div>
                <div class="center">{{find}}</div>
                <div class="right"><i></i></div>
            </div> -->
            <div class="content">
                <div>
                    <SwiperPage :item="item"></SwiperPage>
                </div>
                <div class="content-top"  >
                    <div class="top">
                        {{list[0].explode3.title}}
                    </div>
                    <ul>
                        <li  v-for="(values,index) in list[0].explode3.item" :key="index">
                            <a :href="values.data">
                                <img :src="values.image" alt="">
                            </a>
                        </li>
                    </ul>
                    <div class="content-top-center">
                        <ul>
                            <li v-for="(value,index) in list[1].home3.item" :key="index">
                                <router-link to="/">
                                    <img :src="value.image" alt="">
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="selection-goods">
                    <div v-for="(value,index) in FindList" :key="index">
                        <div class="top">
                        {{value.goods.title}}
                        </div>
                        <ul>
                            <li v-for="(values,indexs) in value.goods.item" :key="indexs">
                                <router-link :to='{name:"Detaile",params:{goods_id:values.goods_id}}'>
                                    <dl>
                                        <dd>
                                            <img   v-lazy="values.goods_image" alt=""/>
                                        </dd>
                                        <dt>
                                            <p class="name">
                                                {{values.goods_name}}
                                            </p>
                                            <p class="price">
                                                ￥{{values.goods_promotion_price}}
                                            </p>
                                    </dt>
                                </dl>
                            </router-link> 
                        </li>
                    </ul>
                </div>           
            </div>
            <Footer></Footer>
            <Bottom></Bottom>
        </div>
    </div>
    </div>
</template>
<script>
import headers from './Header'
import axios from 'axios'
    export default {
        name:'Find',
        data(){
            return {
                item:[],
                find:'',
                list:{},
                FindList:[],
                ls:false,
                loading:true

            }
        },
        components:{
            headers
        },
        methods:{
            FindSwiper:function(){
                axios.get('/mo_bile/index.php?act=index&op=special&special_id=1')
                .then(res=>{
                    // console.log(res)
                    this.item = res.data.datas.list[0].adv_list.item
                    this.find = res.data.datas.special_desc
                    this.list = res.data.datas.list.slice(1,3)
                    this.FindList = res.data.datas.list.slice(3,)
                    this.ls=true
                    this.loading = false
                    console.log(this.FindList)
                })
            }
        },
        mounted(){
            this.FindSwiper()
        }
    }
</script>
<style lang="scss" src="./Find.scss" scoped></style>


