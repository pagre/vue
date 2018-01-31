<template>
  <div :class="{loddd:loading}"></div>
</template>
<script>
export default {
    name:'Loading',
    props:{
        loading:{
            required:true
        }
    },
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .loddd{
        width:100%;
        height:100%;
        position: absolute;
        top:0;
        left:0;
        z-index: 100000000;
        opacity: 0.8;
        background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517380876097&di=06a33135a61478057dbe6a01b9d455fa&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201606%2F18%2F20160618173902_VNsaQ.gif") no-repeat center;
        background-size: 100% 100%
    }
</style>

