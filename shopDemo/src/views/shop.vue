<template>
<!--
      <div class="tabbar_bottom">
        <router-link to="/" >
              <img src="../assets/gift.png" alt="">
              <p>首页</p>
        </router-link>
        <router-link to="/" >
            <img src="../assets/gift.png" alt="">
            <p>分类</p>
        </router-link>
        <router-link to="/" >
            <img src="../assets/gift.png" alt="">
            <p>购物车</p>
        </router-link>
        <router-link to="/">
            <img src="../assets/gift.png" alt="">
            <p>我的</p>
        </router-link>
      </div>
    <router-view></router-view>  -->
  <div style="width:100%;">
    <router-view></router-view>
    <div class="tabbar_bottom">
      <router-link to="/shop/shopHome" >
        <icon name="home"   :currentIndex="current" index="0" @click.native="switchTo(0)"  ></icon>
        <p :class="{active:current==0}">首页</p>
      </router-link>
      <router-link to="/shop/shopClassify" >
        <icon name="class"  :currentIndex="current" index="1"@click.native="switchTo(1)" ></icon>
        <p :class="{active:current==1}">分类</p>
      </router-link>
      <router-link to="/shop/shopCart" >
        <icon name="cart"   :currentIndex="current" index="2" @click.native="switchTo(2)"></icon>
        <p :class="{active:current==2}">购物车</p>
      </router-link>
      <router-link to="/shop/shopUser">
        <icon name="account" :currentIndex="current" index="3"  @click.native="switchTo(3)"></icon>
        <p :class="{active:current==3}">我的</p>
      </router-link>
    </div>

      <mt-popup v-model="$store.state.shop.popupVisible" position="left" style="width: 100%;height: 100%;">
        <shop-deatil @upup="change" ></shop-deatil>
     </mt-popup>
      <mt-popup v-model="$store.state.shop.addShopCart" position="bottom" style="width: 100%;height: 100%;background:none;">
        <add-shopcart ></add-shopcart>
      </mt-popup>
</div>
</template>
<script>
  import { mapState } from 'vuex';
  import ShopDeatil from '../views/shopDeatil.vue'
  import AddShopcart from '../components/AddShopcart.vue'
  export default {
    data() {
      return {
       //current: this.$store.state.shop.current,
      }
    },
    computed: {
      ...mapState({
        current:state => state.shop.current,
      }),

    },
    components:{ShopDeatil,AddShopcart},
    methods: {
      switchTo(index){
        this.$store.state.shop.current = index.toString();
      },
      change(){
        this.$store.state.shop.popupVisible=!this.$store.state.shop.popupVisible;
      },
      goDetail(data){
        this.$store.commit("setDeatils",data);
      }
    }
  }
</script>

<style scoped>

*{border-sizing:border-box;margin: 0px;padding: 0px;}

.tabbar_bottom{
  width: 100%;
  height:5rem;
  margin: 0 auto;
  position: fixed;
  bottom:0px;
  left:0px;
  background:#ffffff;
}
.tabbar_bottom a{
  width:25%;
  float: left;
  color:#808080;
  border-top:1px solid #dddddd;
}
/* img{
  width:70%;
  margin-left: 15%;
  height:5rem;
}*/
 p{
  font-size: 13px;
  text-align: center;
   line-height: 13px;
}

.active{
   color: #449fdb;
 }
svg{
  color:#808080;
  width:32%;
  margin-left:34%;
  height:3rem;
}

</style>

<!--<template>
  <div class="page-tabbar">
    <div class="page-wrap" >
      <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="首页">
              <shop-home></shop-home>
          </mt-tab-container-item>

          <mt-tab-container-item id="分类">
             <shop-classify></shop-classify>
          </mt-tab-container-item>

          <mt-tab-container-item id="购物车">
             <shop-cart></shop-cart>
          </mt-tab-container-item>

          <mt-tab-container-item id="我的">

          </mt-tab-container-item>

      </mt-tab-container>
    </div>


    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" src="../assets/gift.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="分类">
        <img slot="icon" src="../assets/gift.png">
        分类
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="../assets/gift.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/gift.png">
        我的
      </mt-tab-item>
    </mt-tabbar>


  </div>
</template>

<script>
  import ShopHome from  '../views/shopHome.vue'
  import ShopClassify from  '../views/shopClassify.vue'
  import ShopCart from  '../views/shopCart.vue'

  export default {
    name: 'page-tabbar',
    data() {
      return {
        selected: '购物车'
      }
    },
    components:{ ShopHome,ShopClassify,ShopCart}
  };
</script>

<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>-->
