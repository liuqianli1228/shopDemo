/* eslint-disable */
import request from 'superagent'
const state = {
  current:'0',
  popupVisible:false,
  addShopCart:false,
  typeList:[
    {"name":"京东超市","url":"http://rrrrrrk.tech/img/market.svg","link":"#"},
    {"name":"全球购","url":"http://rrrrrrk.tech/img/shop.svg","link":"#"},
    {"name":"服装城","url":"http://rrrrrrk.tech/img/clothes.svg","link":"#"},
    {"name":"生鲜","url":"http://rrrrrrk.tech/img/xian.svg","link":"#"},
    {"name":"到家","url":"http://rrrrrrk.tech/img/tohome.svg","link":"#"},
    {"name":"充值中心","url":"http://rrrrrrk.tech/img/recharge.svg","link":"#"},
    {"name":"领京豆","url":"http://rrrrrrk.tech/img/beans.svg","link":"#"},
    {"name":"领券","url":"http://rrrrrrk.tech/img/ticket.svg","link":"#"},
    {"name":"惠赚钱","url":"http://rrrrrrk.tech/img/money.svg","link":"#"},
    {"name":"全部","url":"http://rrrrrrk.tech/img/all.svg","link":"#"}
  ],
  goodsLists:[
    {"goods":{
      "type":"休闲零食",
      "list":[
        {"id":1,"name":"夏威夷果","price":20,"img":["http://rrrrrrk.tech/img/food1.png","http://rrrrrrk.tech/img/food3.png","http://rrrrrrk.tech/img/food5.png"],"explain":"夏威夷果含有丰富的钙，磷 ，铁，维生素B1、B2和人体必需的8种氨基酸。"},
        {"id":2,"name":"好吃的糖果","price":40,"img":["http://rrrrrrk.tech/img/food2.png","http://rrrrrrk.tech/img/food4.png","http://rrrrrrk.tech/img/food6.png"],"explain":"糖果是糖果糕点的一种，指以糖类为主要成份的一种小吃。"}
      ]
    }
    },
    {"goods":{
      "type":"精品服饰",
      "list":[
        {"id":3,"name":"卡通T恤","price":120,"img":["http://rrrrrrk.tech/img/clothes1.png","http://rrrrrrk.tech/img/clothes3.png"]},
        {"id":4,"name":"直男衬衫","price":140,"img":["http://rrrrrrk.tech/img/clothes2.png","http://rrrrrrk.tech/img/clothes4.png"]}
      ]
    }
    },
    {"goods":{
      "type":"手机数码",
      "list":[
        {"id":5,"name":"笔记本电脑","price":5020,"img":["http://rrrrrrk.tech/img/digital1.png","http://rrrrrrk.tech/img/digital3.png"],"explain":"笔记本电脑是一种小型、可方便携带的个人电脑。"},
        {"id":6,"name":"酷炫耳机","price":1140,"img":["http://rrrrrrk.tech/img/digital2.png","http://rrrrrrk.tech/img/digital4.png"]}
      ]
    }
    },
    {"goods":{
      "type":"运动户外",
      "list":[
        {"id":7,"name":"时尚运动鞋","price":520,"img":["http://rrrrrrk.tech/img/sport1.png","http://rrrrrrk.tech/img/sport3.png","http://rrrrrrk.tech/img/sport4.png"]},
        {"id":8,"name":"斯伯丁篮球","price":240,"img":["http://rrrrrrk.tech/img/sport2.png","http://rrrrrrk.tech/img/sport5.png"],"explain":"不易漏气变形，不易开胶起皮，篮球制作工艺复杂严格，球体坚固耐用。"}

      ]
    }
    }
  ],
  goodsDeatils:{},
  //将要加入购物车的商品对象
  addShoplist:{},
  //购物车里的商品数组
  shopCartlist:[],
  //支付的列表
  PaymentList:[],
  OrderList:[]
}

const getters={

}

const mutations = {
  handleClick: function(state) {
    state.popupVisible = !state.popupVisible;
  },
  addCartClick(){
    state.addShopCart = !state.addShopCart;
  },
  setDeatils(state,data){
    state.goodsDeatils=data
  },
  addShopCart(state,data){
    state.addShoplist=data;
  },
  addCartlist(state,data){

    if(state.shopCartlist.length<=0){
      state.shopCartlist=state.shopCartlist.concat(data);
      return;
    }
    for(var i=0;i<state.shopCartlist.length;i++){
      if(state.shopCartlist[i].id==data.id){
        state.shopCartlist[i].num=data.num;
        return;
      }
    }
    state.shopCartlist=state.shopCartlist.concat(data);
  },

  addPaylist(state,data){
    state.PaymentList=state.PaymentList.concat(data);
  },
  addOrderList(state,data){
    state.OrderList=state.OrderList.concat(data);
  }

}



const actions = {

}

export default {
  state,
  mutations,
  getters,
  actions
}
