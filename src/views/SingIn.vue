<template>
	<div class="wh-100 d-flex justify-content-center align-items-center">
		<div class="justify-content-center align-items-center">
			<div class="col justify-content-center">
				<div class="mb-3">
					<input v-model="login" class="form-control" id="login" placeholder="login">
				</div>
				<div class="mb-3">
					<input v-model="password" type="password" class="form-control" id="password" placeholder="password">
				</div>
			</div>
			<div class="d-flex justify-content-center">
				<button class="btn btn-primary" @click='checkInput'>sing in</button>
			</div>
		</div>
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