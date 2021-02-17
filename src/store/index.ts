import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface cityInfo {
	city: string,
	country: string,
	cityId: number,
}

// init
let followedListInit: cityInfo[] = []
let isNewcomerInit: boolean = true
if (!localStorage.getItem("followedListStore") || (localStorage.getItem("isNewcomerStore") == null)) {
	localStorage.setItem("followedListStore", JSON.stringify(followedListInit))
	localStorage.setItem("isNewcomerStore", JSON.stringify(isNewcomerInit))
} else {
	followedListInit = JSON.parse(<string>localStorage.getItem("followedListStore"))
	isNewcomerInit = JSON.parse(<string>localStorage.getItem("isNewcomerStore"))
}

export default new Vuex.Store({
	state: {
		isNewcomer: isNewcomerInit,
		followedList: followedListInit,
		count: 0,
	},
	mutations: {
		addFocusedCity (state, info: cityInfo) {
			// const FollowedCitiesJson = <string>localStorage.getItem("followedCities")
			// state.followedList = JSON.parse(FollowedCitiesJson)
			state.followedList.push(info)
			localStorage.setItem("followedListStore", JSON.stringify(state.followedList))
			console.log(state.followedList)
			// localStorage.setItem("followedCities", JSON.stringify(info))
		},
		removeFromFocusedCities (state, info: cityInfo) {
			// removes based on city id
			state.followedList.splice(state.followedList.findIndex((e) => e.cityId = info.cityId), 1)
			localStorage.setItem("followedListStore", JSON.stringify(state.followedList))
			console.log(state.followedList)
		},
		// addFocusedCity (state, info: cityInfo) {
		// 	state.count = info.cityId
		// }
		setIsNotNewcomer(state) {
			state.isNewcomer = false
			localStorage.setItem("isNewcomerStore", JSON.stringify(state.isNewcomer))
		}
	},
	actions: {
	},
	modules: {
	}
})
