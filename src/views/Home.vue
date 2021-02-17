<template>
	<div>
		<div v-if="isNewcomer">
			<h1>before you go...</h1>
			<h2>pick your cities</h2>
		</div>
		<div v-else>
			<h1>pick your cities</h1>
		</div>
		<CityNode v-for="city in staticCities" :key="city.id" :isChecked="shouldBeChecked(city.id)" :cityId="city.id" :city="city.name" :country='countryNamespace[city.country]'/>
		<button @click='goToMain'>submit</button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import CityNode from "../components/CityNode.vue"
import iso3166 from "../../iso3166.json"
import { mapMutations, mapState } from 'vuex'
// const countryNamespace = JSON.parse(iso3166)

// interface city {
// 	id: Number,
// 	name: String,
// 	state: String,
// 	country: String,
// 	coord: {
// 		lon: Number,
// 		lat: Number
// 	}
// }

export default Vue.extend({
	name: "Home",
	components: {
		CityNode
	},
	data () {
		return {
			countryNamespace: iso3166,
			// to replace
			staticCities: [
				{
					"id": 756135,
					"name": "Warsaw",
					"state": "",
					"country": "PL",
					"coord": {
						"lon": 21.01178,
						"lat": 52.229771
					}
				},
				{
					"id": 2950158,
					"name": "Berlin",
					"state": "",
					"country": "DE",
					"coord": {
						"lon": 10.45,
						"lat": 54.033329
					}
				},
				{
					"id": 2968815,
					"name": "Paris",
					"state": "",
					"country": "FR",
					"coord": {
						"lon": 2.3486,
						"lat": 48.853401
					}
				},
				{
					"id": 3143244,
					"name": "Oslo",
					"state": "",
					"country": "NO",
					"coord": {
						"lon": 10.74609,
						"lat": 59.912731
					}
				},
				{
					"id": 2325314,
					"name": "Owo",
					"state": "",
					"country": "NG",
					"coord": {
						"lon": 5.58681,
						"lat": 7.1962
					}
				},
			]
		}
	},
	computed: {
		...mapState([
			"isNewcomer",
			"followedList"
		])
	},
	methods: {
		...mapMutations([
			"setIsNotNewcomer"
		]),
		goToMain () {
			this.setIsNotNewcomer()
			this.$router.push("/main")
		},
		shouldBeChecked (id: number): boolean {
			if (this.followedList.findIndex((e: {id: number}) => e.id = id) != -1) {
				return true
			} else {
				return false
			}
		}
	}
})
</script>