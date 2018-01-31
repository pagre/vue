<template>
  <div class="listPage">
      <headers>
          <div slot="header" class="center">
              <div class="box">
                    <input type="text" class="text" value="亲输入关键字">
                    <i></i>
              </div>
          </div>
      </headers>
      <div class="content">
          <!-- left -->
          <div class="cont-left">
              <ul>
                  <li v-for="(value,index) in list" :key="index">
                      <i class="xing"></i>
                      {{value.cat_name}}
                        <div class="cont-right" v-for="(values,indexs) in  value.child" :key="indexs">
                            <div >
                                <p class="meat">
                                    <i></i>
                                    {{values.cat_name}}
                                    <span class="right-r">></span>
                                </p>
                                <!-- <p class="meat-list" v-for="(lis,indes) in values.child" :key="indes">
                                    <span>{{lis.cat_name}}</span>
                                </p> -->

                            </div>
                        </div>
                  </li>
              </ul>

          </div>
          
      </div>
  </div>
</template>
<script>
import axios from 'axios';
import headers from '../Find/Header'
export default {
    name:'List',
    data(){
        return {
            list:[]
        }
    },
    components:{
        headers
    },
    methods:{
        ListAjax: function(){
            axios.get('/mo_bile/index.php?act=goods_class')
            .then(res=>{
                this.list = res.data.datas.category_list
                console.log(res)
                console.log(this.list)
            })
        }
    },
    mounted(){
        this.ListAjax()
    }
}
</script>
<style scoped lang="scss" src="../../assets/scss/List.scss"></style>


