<template>
  <div style="width:100%" >
    <mt-header title="购物车" fixed >
    </mt-header>
    <div class="goods_box" >
      <ul class="goods_list">
        <li class="list_li" v-for="(list,index) in shopCartlist">
          <icon  :name="list.checkStatus?'checked':'check'"  scale="2.5" @click.native="changeName(list)"></icon>
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
            <icon name="minus" scale="2.5" @click.native="minus(list.id)"></icon>
            <p style="line-height: 4.5rem;float: left">{{list.num}}</p>
            <icon name="plus"  scale="2.5" @click.native="plus(list.id)"></icon>
          </div>
          <div class="del_btn" @click="removeCart(index)" >删除</div>
        </li>
      </ul>
    </div>
    <div class="pay_box">
      <icon :name="allCheck?'checked':'check'"  @click.native='allCheckStatus()' scale="2.5" style="margin-top: 0.7rem"></icon>
      <span>合计:</span>
      <b>¥ {{totalPrices}}</b>
      <div class="pay_btn" @click="payFun">
        结 算
      </div>
    </div>


  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { MessageBox } from 'mint-ui'
  export default {
    data() {
      return {
        prices:0,
        name:false,
      };
    },
    computed: {
      ...mapState({
        shopCartlist:state => state.shop.shopCartlist,
        PaymentList:state => state.shop.PaymentList
      }),
      totalPrices(){
        if(this.PaymentList.length>=0){
          this.prices=0;
          for(var i=0;i<this.PaymentList.length;i++){
            this.prices+=(this.PaymentList[i].num*this.PaymentList[i].price);
          }
        }
        return this.prices;
      },

      allCheck(){
        if(this.shopCartlist.length==0)return false;
        for(var i=0;i< this.shopCartlist.length;i++){
          if(!this.shopCartlist[i].checkStatus){
            return false;
          }
        }
        return  true;
      }

    },
    methods:{
      changeName(list){
        if(list.checkStatus==true){
          list.checkStatus=!list.checkStatus;
          this.removePay(list);
        }else if(list.checkStatus==false){
          list.checkStatus=!list.checkStatus;
          this.$store.commit('addPaylist',list);
        }
        console.log(this.PaymentList);
      },

      removeCart(index){
        for(var i=0;i<this.PaymentList.length;i++) {
          if(this.PaymentList[i].id==this.shopCartlist[index].id){
            this.$set(this.PaymentList,this.PaymentList.splice(i,1));
          }
        }
        this.shopCartlist=this.$set(this.shopCartlist,this.shopCartlist.splice(index,1));
      },

      removePay(list){
        for(var i=0;i<this.PaymentList.length;i++){
          if(list.id==this.PaymentList[i].id){
            this.$set(this.PaymentList,this.PaymentList.splice(i,1));
            return;
          }
        }
      },

      plus(id){
        for( var i=0;i<this.shopCartlist.length;i++){
          if(this.shopCartlist[i].id==id){
            this.shopCartlist[i].num++;
            this.$store.commit('addCartlist',this.shopCartlist[i]);
          }
        }
      },

      minus(id){
        for( var i=0;i<this.shopCartlist.length;i++){
          if(this.shopCartlist[i].id==id){
            if(this.shopCartlist[i].num>1){
              this.shopCartlist[i].num--;
              this.$store.commit('addCartlist',this.shopCartlist[i]);
            }
          }
        }
      },

      checkfun(list){
        for(var i=0;i<this.PaymentList.length;i++){
          if(list.id==this.PaymentList.id){

            this.name=true;
          }else{
            this.name=false;
          }
        }
      },

      allCheckStatus(){
        if(this.shopCartlist.length==0)return;
        if(this.allCheck==true){
          for(var i=0;i< this.shopCartlist.length;i++) {
            this.shopCartlist[i].checkStatus = false;
            this.removePay(this.shopCartlist[i]);
          }
          console.log(this.PaymentList);
        }else if(this.allCheck==false){
          for(var i=0;i<this.shopCartlist.length;i++) {
            if(!this.shopCartlist[i].checkStatus){
              this.shopCartlist[i].checkStatus = true;
              this.$store.commit('addPaylist', this.shopCartlist[i]);
            }
          }
          console.log(this.PaymentList);
        }
      },

      payFun(){
        if(this.PaymentList.length===0){
          MessageBox('提示','请先选购商品!')
          return;
        }
        MessageBox.confirm('',{
          title: '提示',
          message: '确认购买共:'+this.totalPrices+'元',
          showConfirmButton:true,
          showCancelButton:true,
          cancelButtonClass:'cancelButton',
          confirmButtonClass:'confirmButton',
          confirmButtonText:'购买',
          cancelButtonText:'暂不'
        }).then(() => {
          MessageBox.alert('购买成功')
          for(var i=0;i<this.shopCartlist.length;i++) {
            if(this.shopCartlist[i].checkStatus){
              this.$set(this.shopCartlist,this.shopCartlist.splice(i,1));
              this.$store.commit('addOrderList', this.PaymentList[i]);
            }
          }
          for(var i=0;i<this.PaymentList.length;i++) {
            if(this.PaymentList[i].checkStatus){
              this.$set(this.PaymentList,this.PaymentList.splice(i,1));
            }
          }
        })

      }
    }
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
    left:0px;
  }
  .goods_list{
    width: 100%;
  }
  .list_li{
    width: 100%;
    height:4.5rem;
    float: left;
    border-bottom: 1px solid #E5E5E5;
    margin-left:0;
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

  .cancelButton{
    background: #959595 !important;
    width: 1.6rem !important;
    height: .6rem;
    color: #fff !important;
    border-radius: .05rem;
    border: none;
    margin: .2rem !important;
  }
  .confirmButton{
    background: #d9534f !important;
    width: 1.6rem !important;
    height: .6rem;
    color: #fff !important;
    border-radius: .05rem;
    border: none;
    margin: .2rem !important;
  }
  .mint-msgbox{
    border:1px solid lightslategray;
  }
</style>
