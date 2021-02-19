import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
	mounted () {
		if (!!localStorage.getItem("followedCities")) {
			localStorage.setItem("followedCities", JSON.stringify([]))
		}
	}
}).$mount('#app')
