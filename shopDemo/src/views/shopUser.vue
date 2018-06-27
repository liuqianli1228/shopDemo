<template>
  <div style="width:100%">
      <mt-header title="个人中心" fixed >
      </mt-header>
    <div class="user_box">
      <img src="../assets/user_normal.jpg" class="user_img" alt="">
      <div class="user_message">
        <span>用户名</span>
        <span>等级</span>
      </div>
    </div>
    <div  class="sort" style="width: 100%;float: left;">
      <div class="sort_box">
        <img class="sort_img" src="../assets/gift.png" alt="">
        <p class="sort_txt">分类</p>
      </div>
      <div class="sort_box">
        <img class="sort_img" src="../assets/gift.png" alt="">
        <p class="sort_txt">分类</p>
      </div>
      <div class="sort_box">
        <img class="sort_img" src="../assets/gift.png" alt="">
        <p class="sort_txt">分类</p>
      </div>
      <div class="sort_box">
        <img class="sort_img" src="../assets/gift.png" alt="">
        <p class="sort_txt">分类</p>
      </div>
      <div class="sort_box">
        <img class="sort_img" src="../assets/gift.png" alt="">
        <p class="sort_txt">分类</p>
      </div>
      <div class="sort_box">
        <img class="sort_img" src="../assets/gift.png" alt="">
        <p class="sort_txt">分类</p>
      </div>
      <div class="sort_box">
        <img class="sort_img" src="../assets/gift.png" alt="">
        <p class="sort_txt">分类</p>
      </div>
      <div class="sort_box">
        <img class="sort_img" src="../assets/gift.png" alt="">
        <p class="sort_txt">分类</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },

  };
</script>

<style scoped>

.user_box{
  margin-top: 3.4rem;
  width:100%;
  height: 10rem;
  border-bottom:1px solid #E5E5E5;
  float: left;
}
.user_img{
    width: 30%;
    height: auto;
    margin-left: 2rem;
    border-radius: 50%;
    float: left;
  }
.user_message{
  width:40%;
  height: 10rem;
  font-size: 17px;
  margin-left: 2rem;
  line-height: 4rem;
  float: left;
}
.user_message span{
  display: block;
}
.sort_box{
  width: 24.3%;
  height: 7.5rem;
  float: left;
  border: 1px solid #E5E5E5;
}
.sort_img{
  width:80%;
  height:5rem;
  margin-left: 10%;
}
.sort_txt{
  width:100%;
  text-align: center;

}
</style>
