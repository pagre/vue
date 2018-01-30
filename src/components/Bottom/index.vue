<template>
    <div class="bottom">
        <div class="footer">
          <ul>
              <router-link to="/">
                <li>
                  <i class="iconfont icon-shouye"></i>
                  <span>首页</span>
                </li>
              </router-link>
              <router-link to="/Find">
                <li>
                  <i class="iconfont icon-gouwuche3"></i>
                  <span>发现</span>
                </li>
              </router-link>
              
              <router-link to="/List">
                <li>
                  <i class="iconfont icon-thlist"></i>
                  <span>类目</span>
                </li>
              </router-link>
             
              <router-link to="/Maypage">
                <li>
                  <i class="iconfont icon-wode-active"></i>
                  <span>我的商城</span>
                </li>
              </router-link>
              
          </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Bottom'
}
</script>
<style lang="scss" scoped>
    .footer{
            width:100%;
            position:fixed;
            bottom:0;
            ul{
                display: flex;
                background: rgba(85,85,85,0.95);
                a{
                    flex:1;                    
                    li{
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        padding:0.04rem 0 0.04rem 0;
                        color:#fff;
                        i{
                            font-size:0.23rem;
                        }
                        span{
                            font-size: 0.12rem;
                            line-height:0.23rem;
                        }
                    }
                }
                
            }
        }
</style>


