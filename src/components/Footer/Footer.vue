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

<style scoped lang="scss"  src="./Footer.scss"></style>

