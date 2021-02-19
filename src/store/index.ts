import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface cityInfo {
	city: string,
	country: string,
	cityId: number,
}

interface focusedCity {
	city: string,
	country: string,
	cityId: number,
	dt: number,
	temp: number,
	humidity: number,
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
		// need init
		isNewcomer: isNewcomerInit,
		followedList: followedListInit,

		focusedCity: {} as focusedCity,
		weatherOfFocused: new Array<focusedCity>(),
	},
	mutations: {
		addFocusedCity (state, info: cityInfo) {
			state.followedList.push(info)
			localStorage.setItem("followedListStore", JSON.stringify(state.followedList))
			console.log(state.followedList)
		},
		removeFromFocusedCities (state, info: cityInfo) {
			// removes based on city id
			state.followedList.splice(state.followedList.findIndex((e) => e.cityId = info.cityId), 1)
			localStorage.setItem("followedListStore", JSON.stringify(state.followedList))
			console.log(state.followedList)
		},
		setIsNotNewcomer(state) {
			state.isNewcomer = false
			localStorage.setItem("isNewcomerStore", JSON.stringify(state.isNewcomer))
		},
		setFocusedCity(state, newFocus: focusedCity) {
			state.focusedCity = newFocus
		},
		addToWeatherOfFocused(state, value: focusedCity) {
			if (state.weatherOfFocused.findIndex(e => e.cityId == state.focusedCity.cityId) == -1) {
				state.weatherOfFocused.length = 0
			}
			state.weatherOfFocused.push(value)
		},
	},
	actions: {
	},
	modules: {
	}
})
