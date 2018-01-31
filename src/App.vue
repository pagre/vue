<template>
  <div id="app">
    <div :class="{laddd:tabla}"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return{
        tabla:false,
      }
  }
}
</script>

<style lang="scss">
@import "./assets/components.scss";
#app {
  height:100%;
  .laddd{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    z-index: 100000000;
    opacity: 0.8;
    background: #000 url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517375599332&di=6c4fcf3959223abc53f3e473b147066a&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160302%2Fmp61485056_1456920769159_13.gif') no-repeat center;
    background-size: 100% 100%
  }
}
</style>
