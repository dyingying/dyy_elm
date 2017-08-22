<template>
	<div class="home">
  <!-- 头部 -->
		<mt-header fixed title="饿了么">
			<router-link to="/search" slot="left">
    		<mt-button icon="search"></mt-button>
  		</router-link>
  		<router-link to="/login" slot="right">
    		<p>登录|注册</p>
  		</router-link>
		</mt-header>
   <!--  轮播 -->
    <mt-swipe :auto="0">
      <mt-swipe-item class="slide1">
       <ul>
         <li>
            <router-link to="/food_container/header_title">
              <img src="https://fuss10.elemecdn.com/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg">
              <p v-for="item in items1">{{ item.list1 }}</p>
            </router-link>
          </li>         
          <li>
            <router-link to="/order">
              <img src="https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg">
              <p v-for="item in items1">{{ item.list2 }}</p>
            </router-link>
          </li>
          <li>
            <router-link to="/search">
              <img src="https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg">
              <p v-for="item in items1">{{ item.list3 }}</p>
            </router-link>
          </li>
          <li>
            <router-link to="/search">
              <img src="https://fuss10.elemecdn.com/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg">
              <p v-for="item in items1">{{ item.list4 }}</p>
            </router-link>
         </li>
        </ul>
        <ul>
          <li>
            <router-link to="/search">
              <img src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg">
             <p v-for="item in items1">{{ item.list5 }}</p>
            </router-link>
          </li>
          <li>
            <router-link to="/search">
              <img src="https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg">
             <p v-for="item in items1">{{ item.list6 }}</p>
            </router-link>
          </li>
          <li>
            <router-link to="/search">
              <img src="https://fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg">
              <p v-for="item in items1">{{ item.list7 }}</p>
            </router-link>
          </li>
          <li>
            <router-link to="/search">
              <img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg">
              <p v-for="item in items1">{{ item.list8 }}</p>
            </router-link>
          </li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item class="slide2">
        <ul>
          <li>
            <router-link to="/food_container/header_title">
              <img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg">
              <p v-for="item2 in items2">{{ item2.list1 }}</p>
            </router-link>
          </li>        
          <li>
            <router-link to="/search">
              <img src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg">
              <p v-for="item2 in items2">{{ item2.list2 }}</p>
            </router-link>
          </li>
          <li>
            <router-link to="/search">
              <img src="https://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg">
              <p v-for="item2 in items2">{{ item2.list3 }}</p>
            </router-link>
          </li>
          <li>
            <router-link to="/search">
              <img src="https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg">
              <p v-for="item2 in items2">{{ item2.list4 }}</p>
            </router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/search">
              <img src="https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg">
              <p v-for="item2 in items2">{{ item2.list5 }}</p>
            </router-link>
          </li>
          <li>
            <router-link to="/search">
              <img src="https://fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg">
              <p v-for="item2 in items2">{{ item2.list6 }}</p>
            </router-link>
          </li>
          <li>
            <router-link to="/search">
              <img src="https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg">
              <p v-for="item2 in items2">{{ item2.list7 }}</p>
            </router-link>
          </li>
          <li>
            <router-link to="/search">
              <img src="https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg">
              <p v-for="item2 in items2">{{ item2.list8 }}</p>
            </router-link>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 内容 -->
    <div class="shop_header">
      <span class="shop_ico"><img src="../assets/center.png"></span>
      <span class="shop_header_title">附近商家</span>
    </div>
    <div class="content">
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-distance="10">
      <router-link to="/demo">
        <li v-for="item in list"><!-- {{ item }} -->
          <img src="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg">
          <div class="text">
            <div class="title">
              <span class="brand">品牌</span>
              <span class="demo">效果演示</span>
              <ul>
                <li>保</li>
                <li>准</li>
                <li>票</li>
              </ul>
            </div>
            <div class="five_star">
              <div class="star">
                <img src="../assets/favor_fill.png">
              </div>
              <div class="star">
                <img src="../assets/favor_fill.png">
              </div>
              <div class="star">
                <img src="../assets/favor_fill.png">
              </div>
              <div class="star">
                <img src="../assets/favor_fill.png">
              </div>
              <div class="star">
                <img src="../assets/favor_fill.png">
              </div>
              <span class="rate">4.6</span>
              <span class="sale">月售532单</span>
              <span class="bird">蜂鸟专送</span>
              <span class="on_time">准时达</span>
            </div>
            <!-- <p class="fee_distance">￥20起送<span class="signition">/</span>配送费约￥5</p>  -->
            <p class="order_time">
              <span class="distance">1387.6公里</span>
              <span class="signition">/</span>
              <span class="time">21小时54分钟</span>
            </p>           
          </div>
        </li>
        </router-link>
      </ul>
    </div>
	</div>
</template>

<script>
import { Header} from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
import Vue from 'vue';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(InfiniteScroll);
	export default {
		data () {
			return {
				items1: [],
        items2: [],
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			}
		},
    methods: {
      loadMore: function() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      }
    },
    created () {
      this.$http.get('../static/listData.json').then((response) => {             // mark
        this.items1 = response.body.data.items1;
        this.items2 = response.body.data.items2;
        console.log(this.items1, this.items2);
      }, response => {
        // error callback
        alert('数据请求失败');
      });
    }
	};
</script>

<style>
  body{
    background: #F5F5F5;           /*//去掉scoped才有效果？*/
  }
  .header .mint-header-button > a{
    text-decoration: none;
  }
	.mintui{
		font-size: 1.5rem;
	}
  .mint-swipe {
    width: 100%;
    height: 15rem;
    color: #fff;
    font-size: 2.3rem;
    text-align: center;
    top: -1.2rem;
    border-bottom: 0.025rem solid #e4e4e4;
    background: white;
  }
  .mint-swipe a {
    display: block;
    height: 15rem;
  }
  .slide1,.slider2 {
    color: #fff;
    position: relative;
  }
  .slide1 ul{
    margin-top: 1rem;
    margin-left: -2rem;
  }
  .slide1 ul li{
    width: 5rem;
    height: 5rem;
    display: inline-block; 
  }
  .slide1 ul li a{
    width: 5rem;
    height: 5rem;
    text-decoration: none;
  }
  .slide1 ul p{
    text-decoration: none;
    text-align: center;
    font-size: 0.8rem;
    color: #666;
  }
  .slide2 ul{
    margin-top: 1rem;
    margin-left: -2rem;
  }
  .slide2 ul li{
    width: 5rem;
    height: 5rem;
    display:inline-block; 
  }
  .slide2 ul li a{
    width: 5rem;
    height: 5rem;
    text-decoration: none;
  }
  .slide2 ul p{
    text-decoration: none;
    text-align: center;
    font-size: 0.8rem;
    color: #666;
  }
  .home img{
    width: 2.5rem;
    height: 2.5rem;
  } 
  .mint-swipe-indicator.is-active{
    opacity: 1;
    background: #007aff !important; /* 改变小圆点没有效果？样式覆盖*/
    width: 0.5rem;
    height: 0.5rem;  
  }
  .shop_header{
    width:100%;
    height:3rem;
    background: white;
    border-top: 0.025rem solid #e4e4e4;
    margin-top: -0.5rem;
  }
  .shop_header .shop_ico{
    margin-left: -15rem;

  }
  .shop_header .shop_ico img{
    width:1.5rem;
    height:1.5rem;
    margin-top: 0.5rem;
  }
  .shop_header .shop_header_title{
    color: #999;
    font-size: 0.9rem;
  }
  .content{
    background: white;
    margin-top: -1rem;
  }
  .content ul li{
    list-style: none;
    width:100%;
    height: 5rem;
    line-height: 5rem;
    border-bottom: 0.025rem solid #f1f1f1;
    padding: 0.5rem;
    text-align: center;
    
  }
  .content ul li img{
    float: left;
    width: 4rem;
    height: 4rem;
    display: block;
    margin-left: -2.7rem;
    margin-top: 0.5rem;
  }
  .content .text{
    width: 18rem;
    height: 5rem;
    margin-left: 1.5rem;
    margin-top: 0.1rem;
  }
  .content .text .title{
    margin-left: 0.01rem;
    margin-top: -1.5rem;   
    width: 18rem;
  }
  .content .text .title .brand{
    background: #FFD930;
    font-weight: bold;
    font-size: 0.8rem;
    margin-left: -11rem;
    color:#333;
  }
  .content .text .title .demo{
    font-weight: bold;
    color:#666;
  }
  .content .text .title ul{
    margin-top: -5.3rem;   
    margin-left: 12rem;
    height: 1.5rem;
  }
  .content .text .title ul li{
    display: inline-block;
    width:0.1rem;
    height:0.01rem;
    color: #999;
    list-style: none;
    font-size: 0.1rem;
    padding: 0 0.3rem;
    margin-left: 0.05rem;
  }
  .content .five_star{
    margin-left: 2.2rem;
  }
  .content .star{
    margin-left: 0.8rem;
    margin-top: 2rem;
    float: left;
  }
  .content .star img{
    width: 0.7rem;
    height: 0.7rem;    
  }
  .content .text .rate{
    display: inline-block;
    float: left;
    font-size: 0.1rem;
    color: #e0620d;
    margin-top: 0.4rem;
    margin-left: -1.5rem;
    height: 0.7rem; 
  }
  .content .text .sale{
    display: inline-block;
    float: left;
    font-size: 0.4rem;
    margin-top: 0.4rem;
    margin-left: 0.2rem;
    color:#666;
    height: 0.7rem; 
  }
  .content .text .five_star .bird{
    font-size: 0.4rem;
    color:#fff;
    background-color: #3190e8;
    border: 0.025rem solid #3190e8;
    border-radius: 0.08rem;
    margin-left: 1.75rem;
  }
  .content .text .on_time{
    font-size: 0.4rem;
    margin-top: -10rem;
    color: #3190e8;
    border: 0.025rem solid #3190e8
  }
  .content .fee_distance{
    height: 1rem;
    font-size: 0.4rem;
    margin-left: 15rem;
    margin-top: -3.5rem;
  }
  .content .order_time{
    height: 1rem;
    font-size: 0.4rem;
    margin-left: 8rem;
    margin-top: -3rem;
  }
  .content .order_time .distance{
    color: #999;
  }
  .content .order_time .time{
    color:#3190e8;
  }
  a{
    text-decoration: none;
  }
</style>