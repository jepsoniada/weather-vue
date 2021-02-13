<template>
	<div id="sing-in">
		<div id="sing-in-input">
			<input placeholder="login" v-model="login"/>
			<input placeholder="password" v-model="password"/>
		</div>
		<button @click='checkInput'>e</button>
	</div>
</template>

<script lang='ts'>
import Vue from "vue"

export default Vue.extend({
	name: 'SingIn',
	data () {
		return {
			login: "",
			password: "",
		}
	},
	methods: {
		checkInput (): void {
			if (!!this.login && !!this.password) {
				this.$router.push("/home")
			}
		},
	}
})
</script>
