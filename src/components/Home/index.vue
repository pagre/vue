<template>
  <div class="homePage">
      <Header></Header>
      <div class="content">
          <SwiperPage :item="item"></SwiperPage>
          <div class="swiper-nav">
              <ul>
                  <li>
                        <span>
                            <i  class="classification"></i>
                        </span>
                        <div>
                            分类
                        </div>
                  </li>
                  <li>
                        <span>
                          <i class="cart"></i>
                        </span>
                        <div>
                         购物车
                        </div>
                  </li>
                  <li>
                        <span>
                          <i class="business"></i>
                        </span>
                        <div>
                         我的商城
                        </div>
                  </li>
                  <li>
                        <span>
                          <i class="every" ></i>
                        </span>
                        <div>
                         每日签到
                        </div>
                  </li>
              </ul>
          </div>
          <div class="home-list" >
            <div v-for="(value,index) in goods1" :key="index">
                <h2>
                    {{value.goods.title}}
                </h2>
                <p class="recommend">——&nbsp; 推荐以下商品 &nbsp;——</p>                    
                
                <ul >
                    <!-- <div> -->

                    <li v-for="(value,index) in value.goods.item" :key="index"  >
                        <!-- :to='{name:"Detaile",params:{goods_id:value.goodes_id}}' -->
                        <router-link :to='{name:"Detaile",params:{goods_id:value.goods_id}}'>
                            <div class="home-img">
                                <img v-lazy="value.goods_image" alt="">      
                            </div>
                            <p class="name">{{value.goods_name}}</p>
                            <p class="price">￥{{value.goods_promotion_price}}</p>
                        </router-link>
                    </li>
                    <!-- </div>                     -->
                </ul>             
            </div>
          </div>
          <!-- 底部 -->
          <div class="home-bottom">
              <Footer></Footer>
          </div>
      </div>
      <div>
          <Bottom></Bottom>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
    export default {
        name: 'HomePage',
        data(){
            return {
                item:[],
                goods1:[]
            }
        },
        methods:{
            homeList(){
                axios.get('/mo_bile/index.php?act=index')
                .then(res=>{
                    console.log( res.data.datas.list.slice(1,))
                    this.item = res.data.datas.list[0].adv_list.item
                    this.goods1 = res.data.datas.list.slice(1,)
                    console.log(this.goods1)
                })
            }
        },
        mounted(){
            this.homeList()
        }

    }
</script>
<style lang="scss" src="../../assets/scss/home.scss"></style>

