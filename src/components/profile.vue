<template>
  <div class="profile">
    <div class="header">
      <router-link to="/" slot="left">
        <img class="img1" src="../assets/back.png">
      </router-link>
      <p class="title">我的</p>
      <span class="login_header">
        <img class="img4" src="../assets/header.png">
      </span>
      <div class="login_text">
        <p class="login_register">登录/注册</p>
        <img class="img2" src="../assets/phone.png">
        <span class="phone_text">暂无绑定手机号</span>
      </div>
      <div class="more_ico">
        <router-link to="/login">
          <img class="img3" src="../assets/foward.png">
        </router-link>
      </div>
    </div>
    <div class="content1">
      <ul>
        <li>
          <span class="number1"><b>0.00</b>元</span>
          <p class="money">我的余额</p>
        </li>
        <li>
          <span class="number2"><b>0</b>个</span>
          <p class="cheap">我的优惠</p>
        </li>
        <li>
          <span class="number3"><b>0</b>分</span>
          <p class=" credit">我的积分</p>
        </li>
      </ul>
    </div>
    <div class="content2">
      <ul>
        <li>
          <span class="img"><img src="../assets/myOrder.png"></span>
          <span class="text">我的订单</span>
          <router-link to="/order">
            <span class="ico"><img src="../assets/more.png"></span>
          </router-link>
        </li>
        <li>
          <span class="img"><img src="../assets/integration.png"></span>
          <span class="text">积分商城</span>
          <span class="ico"><img src="../assets/more.png"></span>
        </li>
        <li>
          <span class="img1"><img src="../assets/vip.png"></span>
          <span class="text1">饿了么会员卡</span>
          <span class="ico1"><img src="../assets/more.png"></span>
        </li>
      </ul>      
    </div>
    <div class="content3">
      <ul>
        <li>
          <span class="img"><img src="../assets/center.png"></span>
          <span class="text">服务中心</span>
          <span class="ico"><img src="../assets/more.png"></span>
        </li>
        <li>
          <span class="img1"><img src="../assets/elm.png"></span>
          <span class="text1">下载饿了么APP</span>
          <span class="ico1"><img src="../assets/more.png"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Cell } from 'mint-ui';
import Vue from 'vue';
Vue.component(Cell.name, Cell);
  export default {
    data () {
      return {

      };
    }
  }
</script>

<style scoped>
  body{
    background: #F5F5F5;           /*//去掉scoped才有效果？*/
  }
  .profile .header{
    width:120%;
    height:10rem;
    background: #3190E8;
    margin-top: -4rem;
    margin-left: -1rem;
  }
  .profile .header .img1{
    margin-left: -23rem;
    margin-top: 1rem;   
  }
  .profile .title{
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
    margin-left: -1rem;
    margin-top: -1rem;
  }
  .profile .login_header img{
    margin-left: -20rem;
    width:4rem;
    height:4rem;
  }
  .profile .header .login_text{
    width: 16rem;
    height:5rem;
    margin-left: 6rem;
    margin-top: -4.5rem;
  }
  .profile .header .login_text .login_register{
    font-weight: 700;
    font-size: 1.2rem;
    color: #fff;
    margin-left: -10rem;
    margin-top: 1rem;
  } 
  .profile .header .login_text .img2{
    margin-left: -22rem;
    margin-top: -1rem;
  }
  .profile .header .login_text .img2 img{
    width:0.5rem;
    height:0.5rem;
  }
  .profile .header .login_text .phone_text{
    display: inline-block;
    font-size: 0.8rem;
    color: #fff;
    margin-left: 2.5rem;
    margin-top: -0.5rem;
    float:left;
  }
  .profile .header .more_ico{
    width: 1rem;
    height:1rem;
    float: right;
    margin-left: 10rem;
    margin-top: -3rem;
  }
  .profile .header .more_ico .img3{
    margin-left: -7rem;
    width:1rem;
    height: 1rem;
    margin-top: -2rem;
  }
  .content1{
    width:100%;
    height:5rem;
    margin-top: -1rem;
  }
  .content1 ul{
    margin-left: -2rem;
    width:100%;
    height:5rem;
  }
  .content1 ul li{
    display: inline-block;
    float: left;
    list-style: none;
    width: 33.05%;
    height:5rem;
    border-right: 1px solid #f1f1f1;
  }
  .content1 ul li .number1 b{
    display: inline-block;
    font-size: 1.8rem;
    color: #f90;
    font-weight: 700;
    line-height: 1rem;
    font-family: Helvetica Neue,Tahoma;
    margin-top: 1rem;
  }
  .content1 ul li .number2 b{
    color: #ff5f3e;
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: Helvetica Neue,Tahoma;
    margin-top: 1rem;
  }
  .content1 ul li .number3 b{
    color: #6ac20b;
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: Helvetica Neue,Tahoma;
    margin-top: 1rem;
  }
  .content1 ul li p{
    font-size: 0.9rem;
    color: #666;
    font-weight: 400;
    padding-bottom: .453333rem;
  }
  .content2{
    width: 100%;
    height:10.5rem;
    margin-top: 0.5rem;
  }
  .content2 ul li{
    list-style: none;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #f1f1f1;
    margin-top: 0.6rem;
  }
  .content2 ul li .img{   
    margin-left: -15rem;
    text-align: left;
  }
  .content2 ul li .text{
    padding-left: 0.5rem;
  }
  .content2 ul li .ico{
    float: right;
  }
  .content2 ul li .img1{
    float:left;
    margin-left:-1rem;
  }
  .content2 ul li .text1{
    margin-left: -11rem;
  }
   .content2 ul li .ico1{
    float: right;
  }
  .content2 ul li img{
    width: 1.2rem;
    height: 1.2rem;
  }
  .content3{
    width: 100%;
    height:6rem;
    margin-top: 0.5rem;
  }
  .content3 ul li{
    list-style: none;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #f1f1f1;
    margin-top: 0.6rem;
  }
  .content3 ul li .img{   
    margin-left: -15rem;
    text-align: left;
  }
  .content3 ul li .text{
    padding-left: 0.5rem;
  }
  .content3 ul li .ico{
    float: right;
  }
  .content3 ul li .img1{
    float:left;
    margin-left:-1rem;
  }
  .content3 ul li .text1{
    margin-left: -11rem;
  }
   .content3 ul li .ico1{
    float: right;
  }
  .content3 ul li img{
    width: 1.2rem;
    height: 1.2rem;
  }
</style>