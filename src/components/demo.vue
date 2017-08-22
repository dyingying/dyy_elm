<template>
  <div class="shop_demo">
    <div class="demo_header">
      <div class="back_ico">
        <router-link to="/">
          <img src="../assets/back.png">
        </router-link>
      </div>
      <div class="shop_img">
        <img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg">
      </div>
      <div class="demo_description">
        <p class="demo_title1">效果演示</p>
        <p class="demo_title2">商家配送 / 分钟送达 / 配送费￥5</p>
        <p class="demo_title3">公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
      </div>
      <div class="demo_ico">
        <router-link to="/">
          <img src="../assets/more.png">
        </router-link>
      </div>
      <div class="tips">
        <span class="span1">
          <img src="../assets/subtract.png">
          <span class="span_description1">满30减5，满60减8(APP专享)</span>
        </span>
        <span class="span2">
          <span class="span_desciption2">4个活动</span>
          <router-link to="/">
            <img src="../assets/more.png">
          </router-link>
        </span>
      </div>
    </div>
    <div class="demo_content">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">商家</mt-tab-item>
        <mt-tab-item id="2">评价</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="left_aside">
            <ul>
              <li v-for="(list, index) in list" :class="{'active':ind === index}" @click="change(index)">{{list}}</li>
            </ul>
          </div>
          <div class="right_aside">
            <ul>
              <li>热销榜</li>
              <li>优惠</li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'content ' + n" />
        </mt-tab-container-item>
        
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
import Vue from 'vue';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
  export default{
    data () {
      return {
        selected: '',
        active: false,
         list: ['热销榜', '优惠', '好吃又实惠', '盖浇饭', '披萨', '汉堡', '甜点', '饮料', '主食', '蛋糕' ],
         ind: ''

      };
    },
    methods: {
      change: function (index) {
        this.ind = index;
      }
    }
  }
</script>

<style scoped>
  .shop_demo .demo_header{
    width:120%;
    height:7.2rem;
    background: #BEB7C6;
    margin-top: -4rem;
    margin-left: -1rem;
    position: fixed;
    z-index:999;
  }
  .shop_demo .demo_header .back_ico{
    width:1rem;
    height:1rem;
    margin-left: 0.8rem;
    margin-top: 1rem;
    position: absolute;
  }
  .shop_demo .demo_header .shop_img{
    width:4.5rem;
    height:4.5rem;
    margin-left: 1rem;
    float:left;
  }
  .shop_demo .demo_header .shop_img img{
    width:4.5rem;
    height:4.5rem;
  }
  .shop_demo .demo_header .demo_description{
    width:16rem;
    height:4rem;
    float:left;
    margin-top: 1rem;
  }
  .shop_demo .demo_header .demo_description .demo_title1{
    font-size: 1.2rem;
    margin-top: -0.1rem;
    margin-left: -10rem;
    color: #ffffff;
  }
  .shop_demo .demo_header .demo_description .demo_title2{
    font-size: 0.7rem;
    color: #ffffff;
    margin-top: -1rem;
    margin-left: -4.5rem;
  }
  .shop_demo .demo_header .demo_description .demo_title3{
    font-size: 0.7rem;
    color: #ffffff;
    margin-top: -0.5rem;
  }
  .shop_demo .demo_header .demo_ico{
    float:left;
    width:1rem;
    height:1rem;
    margin-left: 0.5rem;
    margin-top: 2.5rem;
  }
  .shop_demo .demo_header .tips{
    width:100%;
    height:2rem;
    float:left;
    position: relative;
  }
  .shop_demo .demo_header .tips .span1 img{
    width:1rem;
    height:1rem;
    margin-left: -15rem;
    margin-top: 0.3rem;
  }
  .shop_demo .demo_header .tips .span1 .span_description1{
    font-size: 0.5rem;
    color: #ffffff;
  }
  .shop_demo .demo_header .tips .span2{
    float:right;
    margin-left: -10rem;
    margin-right: 5rem;
    margin-top: 0.3rem;
    position: relative;
  }
  .shop_demo .demo_header .tips .span2 .span_desciption2{
    font-size: 0.5rem;
    color: #ffffff;
    margin-top: 1rem;
    margin-left: 1rem;

  }
  .shop_demo .demo_content{
    position: absolute;
    margin-top: 3.1rem;
  }
  .mint-navbar{
    position: fixed;
    z-index: 99;
    width: 100%;
    margin-top: -4rem;
  }
  .shop_demo .demo_content .left_aside{
    position: relative;
    width:5.5rem;
    float:left;
    margin-top: 3rem;
    background-color: #F5F5F5;
  }
  .mint-tab-item{
    margin-top: 4rem;
  }
  .shop_demo .demo_content .left_aside ul{
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  .shop_demo .demo_content .left_aside ul li{
    list-style: none;
    margin-left: -2.5rem;
    font-size: 0.8rem;
    color: #666;
    padding: 2rem .3rem;
    border-bottom: 0.025rem solid #ededed;
    position: relative;
  }
  .shop_demo .demo_content .left_aside ul li img{
    width:1rem;
    height:1rem;
  }
  .active{
    border-left: 0.25rem solid #3190e8;
    background-color:#ffffff;
  }
</style>