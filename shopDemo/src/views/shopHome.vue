<template>
  <div style="width: 100%;">
<!--
    <mt-header title="首页" fixed>
      <router-link to="/usercenter" slot="left" >
        <mt-button icon="back">返回</mt-button>

      </router-link>
    </mt-header>
-->
    <div style="width: 100%;position: fixed;bottom:5rem;top: 0px;left:0px;overflow: hidden;overflow-y: auto">
      <div style="width: 100%;">
        <div style="width: 100%;height: 200px;float: left;">
          <mt-swipe :auto="4000" style="width: 100%;">
            <mt-swipe-item><img src="http://rrrrrrk.tech/img/banner_1.9cadaedb.jpg"  style="width: 100%;height: 100%;" class="fillimg"></mt-swipe-item>
            <mt-swipe-item><img src="http://rrrrrrk.tech/img/banner_2.2b6495f9.jpg"  style="width: 100%;height: 100%;" class="fillimg"></mt-swipe-item>
            <mt-swipe-item><img src="http://rrrrrrk.tech/img/banner_3.6d7b02af.jpg"  style="width: 100%;height: 100%;" class="fillimg"></mt-swipe-item>
            <mt-swipe-item><img src="http://rrrrrrk.tech/img/banner_4.ba6fcc5f.jpg"  style="width: 100%;height: 100%;" class="fillimg"></mt-swipe-item>
            <mt-swipe-item><img src="http://rrrrrrk.tech/img/banner_5.312da388.jpg"  style="width: 100%;height: 100%;" class="fillimg"></mt-swipe-item>
          </mt-swipe>
        </div>
        <div  class="sort" style="width: 100%;float: left;" >
          <div class="sort_box" v-for="(item,index) in typeList">
            <img class="sort_img" :src="item.url" alt="">
            <p class="sort_txt">{{item.name}}</p>
          </div>
        </div>
        <div style="width: 100%;float: left;" v-for="(classify,index) in goodsLists">
          <div class="goods">
            <h4 class="goods_item">
              {{classify.goods.type}}
              <span class="goods_span">P{{index+1}}</span>
            </h4>
            <ul class="goods_ul">
              <li class="goods_li" v-for="(list,index) in classify.goods.list" @click="goDetail(list)">
                <img class="goods_img" :src="list.img[0]" alt="">
                <div class="goods_txt"  >
                  <span style="color: #ff0000;font-size: 13px;">¥ {{list.price}}</span>
                  <p style="font-size: 15px;">{{list.name}}</p>
                </div>
                <span class="goods_icon" @click="addCartClick(list)">
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  <!--  <mt-tabbar fixed >
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/gift.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/gift.png">
        分类
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/gift.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/gift.png">
        我的
      </mt-tab-item>
    </mt-tabbar>-->

<!--    <div style="width: 100%;height:7rem;position: fixed;bottom: 0px;">
      <div class="tabbar_bottom">
        <div class="tabbar_box">
          <img src="../assets/gift.png" alt="">
          <p>首页</p>
        </div>
        <div class="tabbar_box">
          <img src="../assets/gift.png" alt="">
          <p>分类</p>
        </div>
        <div class="tabbar_box">
          <img src="../assets/gift.png" alt="">
          <p>购物车</p>
        </div>
        <div class="tabbar_box">
          <img src="../assets/gift.png" alt="">
          <p>我的</p>
        </div>
      </div>
    </div>-->
</div>

</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapState({
        count:state => state.shop.count,
        typeList: state => state.shop.typeList,
        goodsLists: state => state.shop.goodsLists,
      })
    },
    methods: {
      goDetail(data){
        this.$store.commit("setDeatils", data);
        this.$store.commit("handleClick");
      },
      addCartClick(data){
        this.$store.commit("addShopCart", data);
        this.$store.commit("addCartClick");
       }
      },
      mounted() {
      },

    }
</script>

<style scoped>

*{border-sizing:border-box;margin: 0px;padding: 0px;}
.sort_box{
  width: 19.6%;
  height: 6.5rem;
  float: left;
  border-right: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;
}
.sort_img{
  width:50%;
  height:4rem;
  margin-left: 25%;
  }
.sort_txt{
  width:100%;
  text-align: center;
}
  .goods{
    width: 100%;
    overflow: hidden;
  }
  .goods h4::before{
    background-color: #e8380d;
    content: "";
    display: inline-block;
    height:12px;
    margin-right:6px;
    width: 4px;
  }
  .goods_item{
    width: 100%;
    font-size: 14px;
    line-height: 36px;
    padding: 0 10px;
  }
  .goods_span{
    margin-right: 20px;
    float: right;
  }
.goods_ul{
  width: 100%;
  display: inline;
}
.goods_li{
  width: 49%;
  display: inline;
  list-style:none;
  float: left;
  border: 1px solid #E5E5E5;
}
.goods_img{
  width: 80%;
  margin-left: 10%;
  height:10rem;
}
.goods_txt{
  float: left;
  margin-left: 10px;
}

.goods_icon::after{
  content: "";
  background: url('../assets/shopcar.png') no-repeat ;
  width: 32px;
  height: 32px;
  display: inline-block;
  margin-right:6px;
  float:right;
  margin-bottom: 0px;
}

.tabbar_bottom{
  width: 100%;
  height:7rem;
 /* position: fixed;
  bottom:0px;*/
  background: #E5E5E5;
}
.tabbar_box{
  width:25%;
  float: left;
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

</style>
