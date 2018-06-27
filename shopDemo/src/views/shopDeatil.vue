<template>
  <div style="width:100%;overflow: hidden;">
      <div style="width: 100%;position: fixed;top: 0px;bottom: 50px;overflow-y: auto;background: #ffffff;" >
        <mt-header :title="goods.name" fixed >
          <div  @click='handleClick' slot="left">
            <mt-button icon="back" ></mt-button>
          </div>
        </mt-header>
        <div style="width: 100%;height: 250px;float: left;margin-top:3.3rem; ">
          <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="(img,k) in goods.img" :key="k"><img :src="img" class="fillimg" style="width: 100%;height: 250px;"></mt-swipe-item>
          </mt-swipe>
        </div>
        <div style="width: 100%;overflow: hidden;">
          <h1 style="font-size: 19px;font-weight: normal;">{{goods.name}}</h1>
          <h4 style="color:#aaaaaa;">{{goods.explain}}</h4>
          <h2 style="color:#e8380d;font-weight: bold;">¥ {{goods.price}}</h2>
        </div>
        <div class="goods_deatil" style="width: 100%;overflow: hidden;">
              <span style="border-right:1px solid black;">商品详情</span>
              <span>评价</span>
        </div>
        <div style="overflow: hidden;width: 100%;overflow: hidden;" >
          <img src="../assets/noInfo.png" style="width: 100%;" >
        </div>
      </div>
      <div class="order_btn" style="width: 100%;overflow:hidden;position: fixed;bottom: 0;">
          <span style="background: #449fdb;border-right:1px solid #E5E5E5" @click="addCartClick(goods)">
            加入购物车
          </span>
          <span style="background:#e8380d;">
            立即订购
          </span>
    </div>
  </div>
</template>

<script >
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapState({
        count:state => state.shop.count,
        goods:state => state.shop.goodsDeatils,
      })
    },
    methods:{
      handleClick(){
           this.$emit('upup');
      },
      addCartClick(data){
        this.$store.commit("addShopCart", data);
        this.$store.commit("addCartClick");
      }
    }
  };
</script>

<style scoped>
*{
  box-sizing: border-box;
}

.order_btn span{
  height:5rem;
  color: #ffffff;
  width:49.4%;
  line-height: 5rem;
  text-align: center;
  display:inline-block;
  float: left;
  font-size: 15px;
}
.goods_deatil span{
  height:1.5rem;
  width:49.4%;
  line-height: 1.5rem;
  text-align: center;
  display:inline-block;
  float: left;
  font-size: 14px;
}

</style>
