<template>
	<div id="sing-in">
		<div>
			<input placeholder="login" v-model="login"/>
			<input placeholder="password" v-model="password"/>
		</div>
		<button @click='checkInput'>sing in</button>
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
