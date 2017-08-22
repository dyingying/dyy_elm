<template>
	<div class="login">
		<mt-header fixed title="登录">
			<router-link to="/" slot="left">
    			<mt-button icon="back"></mt-button>
  			</router-link>
		</mt-header>
		<mt-field label="账号" placeholder="请输入账号" v-model="username"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-modal="password"></mt-field>
		<mt-field label="验证码" v-model="captcha" placeholder="请输入验证码">
  			<img src="../assets/logo.png" height="45px" width="100px">
		</mt-field>
	</div>
</template>
	
<script>
import { Field } from 'mint-ui';
import Vue from 'vue';
Vue.component(Field.name, Field);
	export default {
		data () {
			return {

			};
		}
	}
</script>

<style scope></style>