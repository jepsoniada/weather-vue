import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import SingIn from '../views/SingIn.vue'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Chart from '../views/Chart.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'SingIn',
		component: SingIn,
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
	},
	{
		path: '/main',
		name: 'Main',
		component: Main,
	},
	{
		path: '/chart',
		name: 'Chart',
		component: Chart,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
