import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface cityInfo {
	city: string,
	country: string,
	cityId: number,
}

export default new Vuex.Store({
	state: {
		followedList: new Array<cityInfo>(),
		count: 0,
	},
	mutations: {
		addFocusedCity (state, info: cityInfo) {
			// const FollowedCitiesJson = <string>localStorage.getItem("followedCities")
			// state.followedList = JSON.parse(FollowedCitiesJson)
			state.followedList.push(info)
			console.log(state.followedList)
			// localStorage.setItem("followedCities", JSON.stringify(info))
		},
		removeFromFocusedCities (state, info: cityInfo) {
			// removes based on city id
			state.followedList.splice(state.followedList.findIndex((e) => e.cityId = info.cityId), 1)
			console.log(state.followedList)
		}
		// addFocusedCity (state, info: cityInfo) {
		// 	state.count = info.cityId
		// }
	},
	actions: {
	},
	modules: {
	}
})
