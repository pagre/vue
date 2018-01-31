<template>
  <div class="mayPage">
        <loading :loading = loading></Loading>
        <header class="header">
            <div class="left">
                <i></i>
            </div>
            <div class="right">
                <i></i>                
            </div>
        </header>
        <div class="content">
            <!-- 头部 -->
            <div class="con">
                <div class="con-top">
                    <a class="con-my">
                        <i></i>
                        <p>点击登录</p>
                    </a>
                </div>
                <div class="con-bottom">
                    <div><span class="collection"></span><p>商品收藏</p></div>
                    <div><span class="Store "></span><p>店铺收藏</p></div>
                    <div><span class="Tracks"></span><p>我的足迹</p></div>
                </div>
            </div>
            <div class="Order">
                <h3>
                    <span></span>
                    我的订单
                    <a href="#">查看全部订单&nbsp;></a>
                </h3>
                <div class="con-list">
                    <div>
                        <i class="Order-01"></i>
                        <span>待付款</span>
                    </div>
                    <div>
                        <i class="Order-02"></i>
                        <span>待付款</span>
                    </div>
                    <div>
                        <i class="Order-03"></i>
                        <span>待付款</span>
                    </div>
                    <div>
                        <i class="Order-04"></i>
                        <span>待付款</span>
                    </div>
                    <div>
                        <i class="Order-05"></i>
                        <span>待付款</span>
                    </div>
                </div>
            </div>
            <div class="property">
                <div>
                    <i></i>
                    我的财产
                    <span>查看全部财产></span>
                </div>
            </div>
            <!-- 管理 -->
            <div class="Administration">
                <div>
                    <i class="i-1"></i>
                    我的分销管理
                    <span>></span>
                </div>
                <div>
                    <i class="i-2"></i>
                    我的分销管理
                    <span>></span>
                </div>
                <div>
                    <i class="i-3"></i>
                    我的分销管理
                    <span>></span>
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
    export default {
        name:'Maypage',
        data(){
            return {
                loading:true
            }
        },
        methods:{

        },
        mounted(){
            this.loading = false
        }
    }
</script>
<style scoped lang="scss" src="./maypage.scss"></style>
