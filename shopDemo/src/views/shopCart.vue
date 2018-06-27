<template>
  <div style="width:100%" >
      <mt-header title="购物车" fixed >
      </mt-header>
      <div class="goods_box" >
            <ul class="goods_list">
              <li class="list_li" v-for="(list,index) in shopCartlist">
                  <icon  :name="name" scale="2.5" @click.native="changeName"></icon>
                  <div class="list_detail">
                    <img :src="list.img[0]">
                    <span>
                      {{list.name}}
                    </span>
                  </div>
                  <div class="price">
                      <span>单价:¥ {{list.price}}</span>
                      <span>合价:¥ {{list.price*list.num}}</span>
                  </div>
                  <div class="price_make" >
                    <icon name="minus" scale="2.5"></icon>
                    <p style="line-height: 4.5rem;float: left">{{list.num}}</p>
                    <icon name="plus"  scale="2.5"></icon>
                  </div>
                  <div class="del_btn" @click="removeCart(index)" >删除</div>
              </li>
            </ul>
      </div>
      <div class="pay_box">
          <icon name="check" scale="2.5" style="margin-top: 0.7rem"></icon>
          <span>合计:</span>
          <b>¥ 100000</b>
          <div class="pay_btn">
            结 算
          </div>
      </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
        name:'check'
      };
    },
    computed: {
      ...mapState({
        shopCartlist:state => state.shop.shopCartlist,
      })
    },
    methods:{
      changeName(){
          if(this.name=='check'){
            this.name='checked';
          }else{
            this.name='check'
          }
      },
      removeCart(index){
        this.shopCartlist=this.shopCartlist.splice(index,1);
      }
    },
  };
</script>

<style scoped>
*{border-sizing:border-box;margin: 0px;padding: 0px;}
.goods_box{
  width: 100%;
  position: fixed;
  top: 3.4rem;
  overflow-y: auto;
  bottom:8.2rem;
}
.goods_list{
  width: 100%;
}
.list_li{
  width: 100%;
  height:4.5rem;
  float: left;
  border-bottom: 1px solid #E5E5E5;
}
.list_detail{
  width: 34%;
  height: 4.5rem;
  float: left;
  margin-left: 0.5rem;
}

.list_detail img{
  width: 4.5rem;
  height: 4rem;
  float: left;
}
.list_detail span{
  float: left;
  font-size: 15px;
  line-height: 4.5rem;
}

svg{
 color:#449fdb;
  margin-top: 1.4rem;
  margin-left: 0.2rem;
  float: left;
}

.list_li .price{
  float: left;
  width: 23%;
  height:  4.5rem;

}
.price span{
  display:block;
  line-height: 2.2rem;
  color:#ee2c2c;
}
.price p{
  display: inline;
}
.price_make{
  float: left;
  width: 22%;
  height:  4.5rem;
}
.del_btn{
  width:12.5%;
  height:  4.5rem;
  background:#ee2c2c;
  color: #ffffff;
  line-height: 4.5rem;
  text-align: center;
  float: right;
}
.pay_box{
  border-top:1px solid #E5E5E5;
  height: 3.2rem;
  width: 100%;
  position:fixed;
  bottom:5rem;
  background: #ffffff;
  font-size: 13px;
}
.pay_box span{
  line-height: 3.2rem;
  margin-left: 1rem;
  color:#000000;

}
.pay_box b{
  color:#ee2c2c;
  margin-left: 1.5rem;
}
.pay_btn{
  height: 3.2rem;
  width: 40%;
  background:#e8380d;
  color: #ffffff;
  line-height: 3.2rem;
  text-align: center;
  float: right;
}
</style>
