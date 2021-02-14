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
			console.log(state.followedList)
			state.followedList.push(info)
			// localStorage.setItem("followedCities", JSON.stringify(info))
		},
		// addFocusedCity (state, info: cityInfo) {
		// 	state.count = info.cityId
		// }
	},
	actions: {
	},
	modules: {
	}
})
