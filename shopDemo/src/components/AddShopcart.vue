<template>
  <div style="width:100%;" >
    <div @click="addCartClick" style="bottom:0;height:100rem;width: 100%;background:lightslategray;opacity: 0.6;">
    </div>

    <div class="goods_box">

      <div class="box_top">
        <div class="top_left">
          <img  v-if ="goods.img" :src="goods.img[0]" >
          <div style="line-height:6.5rem">{{goods.name}}</div>
          <div style="color:#ff0000; ">¥ {{goods.price}}</div>
        </div>

        <div class="top_right" >
          <icon name="minus" scale="2.5" :class="count >1?'':'icon_color'" @click.native="minus"></icon>
          <p style="line-height: 8rem;float: left">{{count}}</p>
          <icon name="plus"  scale="2.5" @click.native="plus"></icon>
        </div>
      </div>

      <div class="box_bottom">
          <div class="bottom_left">
            合计:
            <span style="color:#ff0000;">¥ {{count*goods.price}}</span>
          </div>
          <div class="bottom_right" @click="goPay()">
                立即支付
          </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
        count:1,
        list:{}
      };
    },
    computed: {
      ...mapState({
        addShopCart:state => state.shop.addShopCart,
        goods:state => state.shop.addShoplist,
      }),

    },
    methods:{
        addCartClick(){
          this.$store.commit("addCartClick")
        },
        plus(){
          this.count+=1;
        },
        minus(){
          if(this.count>1)this.count-=1;
        },
        goPay(){
          this.goods.num=0;
          var list=this.goods;
          list.num= this.count;
          this.count=1;
          this.$store.commit('addCartlist',list);
          this.$store.commit("handleClick");
          this.addCartClick();
          this.$store.state.shop.current='2';
          this.$router.push({ path:'/shop/shopCart'});
        }
    },
  };
</script>

<style scoped>

*{border-sizing:border-box;margin: 0px;padding: 0px;}
svg{
    color:#449fdb;
    margin-top: 3.1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    float: left;
  }
.goods_box{
  position:fixed;
  bottom:0;
  background:#ffffff;
  height:12rem;
  width: 100%;
  font-size: 16px;
}
.box_top{
  height: 8rem;
  width: 100%;
}
.top_left{
  width: 60%;
  height: 8rem;
  float:left;
}
.top_left img{
  width:50%;
  height: 100%;
  float:left;
}
.top_left div{
  width:49%;
  height:4rem;
  line-height:4rem;
  float:left;
}
.top_right{
  float:right;
  width:30%;
  height: 100%;
}
.box_bottom{
  height: 4rem;
  width: 100%;
  border-top: 1px solid #f3f3f3;
}
.bottom_left{
  height: 100%;
  width: 40%;
  float:left;
  margin-left: 0.5rem;
  line-height:4rem
}
.bottom_right{
  height: 100%;
  width: 50%;
  float: right;
  background:#e8380d;
  color:#ffffff;
  text-align: center;
  line-height:4rem
}
.icon_color{
  color: grey;
}

</style>
