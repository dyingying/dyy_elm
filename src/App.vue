<template>
  <div id="app">
    <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="tab1" @click.native="goTo1('/')">
          <img slot="icon" src="./assets/elm.png">
          外卖
        </mt-tab-item>
        <mt-tab-item id="tab2" @click.native="goTo2('/search')">
          <img slot="icon" src="./assets/search.png">
          搜索
        </mt-tab-item>
        <mt-tab-item id="tab3" @click.native="goTo3('/order')">
          <img slot="icon" src="./assets/order.png">
          <i class="fa fa-envelope" slot="icon" aria-hidden="true"></i>
          订单
        </mt-tab-item>
        <mt-tab-item id="tab4" @click.native="goTo4('/profile')">
          <img slot="icon" src="./assets/user.png">
          我的
        </mt-tab-item>
    </mt-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';
import Vue from 'vue';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
  name: 'app',
  data () {
    return {
      selected: ''
    };
  },
  methods: {
    goTo1: function(path) {
      this.$router.replace('/')
    },
    goTo2: function(path) {
      this.$router.replace('/search')
    },
    goTo3: function(path) {
      this.$router.replace('/order')
    },
    goTo4: function(path) {
      this.$router.replace('/profile')
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
