<template>
  <div style="width: 100%;">
    <div class="nav" style="width: 28%;float: left;position: fixed;left: 0px;height:100rem;border-right: 1px solid #E5E5E5;">
      <!--              <mt-cell @click.native.prevent="active = '分类1'">
                分类1
              </mt-cell>
              <mt-cell @click.native.prevent="active = '分类2'">
                分类2
              </mt-cell>
              <mt-cell @click.native.prevent="active = '分类3'">
                分类3
              </mt-cell-->
      <div class="menu" id="0" :class="{active_meun:classid==0}" @click="changeid(0)">
        全部
      </div>
      <div class="menu"  v-for="(item,index) in goodsLists" :id="index+1" :class="{'active_meun':classid==(index+1)}" @click="changeid(index+1)">
        {{item.goods.type}}
      </div>
    </div>

    <div style="width:70%;position: fixed;bottom:5rem;overflow: hidden;overflow-y: auto;right: 1%;top:0px;" >
      <!--<div class="page-tab-container">
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>

            <mt-tab-container-item id="分类1">
              <mt-cell title="产品名称1"  v-for="(n, key) in 10" :key="key"  style="border-top: 1px solid #;">
                <img slot="icon"src="../assets/gift.png" style="width: 50px;height: 50px;" >
              </mt-cell>
            </mt-tab-container-item>

            <mt-tab-container-item id="分类2">
                <mt-cell title="产品名称2" v-for="(n, key) in 30" :key="key" style="border-top: 1px solid #;">
                  <img slot="icon"src="../assets/gift.png" style="width: 50px;height: 50px;" >
                  {{key+1}}
                </mt-cell>
            </mt-tab-container-item>

            <mt-tab-container-item id="分类3">
                <mt-cell title="产品名称3" v-for="(n, key) in 20" :key="key" style="border-top: 1px solid #;">
                  <img slot="icon"src="../assets/gift.png" style="width: 50px;height: 50px;" >
                </mt-cell>
            </mt-tab-container-item>

        </mt-tab-container>
      </div>-->
      <div  class="deatils_box"  v-for="(classify,index) in goodsLists" :id="index+1" :class="{'active':classid==0||classid==(index+1)}">
        <div class="deatils"  v-for="(list,k) in classify.goods.list"  @click="goDetail(list)">
          <img :src="list.img[0]" class="deatils_img">
          <span>{{list.name}}</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

  import { mapState, mapActions, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        active:'分类1',
        classid:'0'
      };
    },
    computed: {
      ...mapState({
        goodsLists:state => state.shop.goodsLists,
      })
    },
    mounted() {
    },
    methods: {
      changeid(index){
         this.classid=index.toString();
      },
      goDetail(data){
        this.$store.commit("setDeatils",data);
        this.$store.commit("handleClick");
      }
    }
  };
</script>

<style scoped>
*{border-sizing:border-box;margin: 0px;padding: 0px;}

.menu{
  width:100%;
  height:4rem;
  border-bottom: 1px solid #E5E5E5;
  line-height: 4rem;
  text-align: center;
  font-size: 17px;
}
.tabbar_box img{
  width:70%;
  margin-left: 15%;
  height:5rem;
}
.tabbar_box p{
  font-size: 10px;
  text-align: center;
}

.deatils_box{
  overflow: hidden;
  width: 100%;
  display: none;
}

.deatils{
  width: 100%;
  height:6rem;
  line-height:6rem;
  border-bottom:1px solid #E5E5E5;
}
.deatils_img{
    width:27%;
    height:5rem;
    margin-top:0.5rem;
  float:left;
  }
.deatils span{
  font-size: 14px;
  display: inline-block;
  float:left;
  width: 70%;
  margin-left: 2%;
}
.active{
  display: block;
}
.active_meun{
  color:#e8380d ;
}
</style>
