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
import { mapState } from "vuex"

export default Vue.extend({
	name: 'SingIn',
	data () {
		return {
			login: "",
			password: "",
		}
	},
	computed: {
		...mapState([
			'isNewcomer'
		])
	},
	methods: {
		checkInput (): void {
			if (!!this.login && !!this.password) {
				if (this.isNewcomer) {
					this.$router.push("/home")
				} else {
					this.$router.push("/main")
				}
			}
		},
	}
})
</script>
