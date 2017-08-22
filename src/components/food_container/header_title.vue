<template>
  <div class="header_title">
    <mt-header fixed title="果蔬生鲜">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="navbar">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">分类</mt-tab-item>
        <mt-tab-item id="2">排序</mt-tab-item>
        <mt-tab-item id="3">筛选</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <!-- <mt-cell v-for="n in 10" :title="'content ' + n" /> -->
          <div class="all_shop">
            <ul>
              <li>小吃宵夜<mt-button icon="forward"></mt-button></li>
              <li>异国料理</li>
              <li>甜品饮品</li>
              <li>商店超市</li>
              <li>特色菜式</li>
              <li>快餐便当</li>
              <li>鲜花蛋糕</li>
              <li>果蔬生鲜</li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <li v-for="item in items"><img src="../../assets/logo.png">{{ item }}</li>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div class="filtrate">
            <span class="delivery">配送方式</span>
            <div class="bird"><img src="../../assets/logo.png">蜂鸟专送</div>
            <span class="merchant">商家属性（可以多选）</span>
            <div class="select">
              <ul>
                <li>开发票</li>
                <li>品牌商家</li>
                <li>在线支付</li> 
              </ul>
              <ul>
                <li>准时达</li>
                <li>新店</li>
                <li>外卖保</li>
              </ul>
            </div>
          </div>
          <div class="button">
            <mt-button type="default" size="normal">清空</mt-button>
            <mt-button type="danger" size="normal">确定</mt-button>
          </div>
        </mt-tab-container-item>      
      </mt-tab-container>

    </div>
    
  </div>
</template>

<script>
import { Navbar, TabItem} from 'mint-ui';
import { Button } from 'mint-ui';
// import { Checklist } from 'mint-ui';
import Vue from 'vue';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Button.name, Button);
// Vue.component(Checklist.name, Checklist);
  export default {
    data () {
      return {
        selected: '',
        items: ['智能排序', '距离最近', '销量最高', '起送价最低', '配送速度最快', '评分最高']
      };
    }
  };
</script>

<style scoped>
  .mint-navbar{
    margin-top: -1rem;
  }
  .navbar li {
    list-style: none;
    padding: 1.5rem;
    border-bottom: 0.025rem solid #e4e4e4;
    text-align: left;
    color:#666;
    font-size: 0.9rem;
  }
  .navbar li img{
    width:1rem;
    height:1rem;
  }
  .navbar .filtrate{
    text-align: left;
  }
  .navbar .bird{
    width:7rem;
    height:2rem;
    border:0.025rem solid #e4e4e4;
    text-align: center;
    margin-top: 1rem;
  }
  .navbar .bird img{
    width:1rem;
    height:1rem;
  }
  .navbar .filtrate .select{
    margin-left: -2.5rem;
  }
  .navbar .filtrate .select ul li{
    display: inline-block;
    width:4rem;
    height:0.00065rem;
    border:0.025rem solid #e4e4e4;
    text-align: center;
    /*margin-left: -0.9rem;*/
  }
</style>