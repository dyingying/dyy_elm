<template>
	<div class="search">
		<mt-header fixed title="搜索">
			<router-link to="/" slot="left">
    			<mt-button icon="back"></mt-button>
  			</router-link>
		</mt-header>
		<!-- <mt-search v-model="value" placeholder="请输入商家或美食名称"></mt-search> -->
    <input type="search" class="search_input" name="search" placeholder="请输入商家或美食名称">
		<mt-button type="primary" @click="sumbit">提交</mt-button>
	</div>
</template>

<script>
import { Search } from 'mint-ui';
import { Button } from 'mint-ui';
import Vue from 'vue';
Vue.component(Search.name, Search);
Vue.component(Button.name, Button);
	export default {
		data () {
			return {

			};
		},
    methods: {
      sumbit () {
        console.log('提交成功');
      }
    }
	}
</script>

<style scope>
	.mint-searchbar{
		position: fixed;
	}
  .search_input{
    border: 0.325rem solid #e4e4e4;
    font-size: 0.9rem;
    color: #333;
    border-radius: 0.125rem;
    background-color: #f2f2f2;
    width:18rem;
    height:2.3rem;
    font-weight: bold;
  }
	.mint-button{
    height:2.3rem;
	}
</style>