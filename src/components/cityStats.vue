<template>
    <!-- <div class="cityStats col-2 bg-light border m-2 p-3" @click="updateChart"> -->
    <div class="row justify-content-around border-bottom" :class="{'bg-primary': isActive, 'cityStats': isActive, 'text-light': isActive, 'py-1': isActive, 'my-1': isActive,}" @click="updateChart">
        <div>{{cityData.city}}</div>
        <div>{{cityData.country}}</div>
        <div>temp: {{weatherFromApi.main.temp}}</div>
        <div>humidity: {{weatherFromApi.main.humidity}}%</div>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mapMutations, mapState } from 'vuex'

interface focusedCity {
	city: string,
	country: string,
	cityId: number,
	dt: number,
	temp: number,
	humidity: number,
}

interface cityInfo {
	city: string,
	country: string,
	cityId: number,
}

interface currentApiResponse {
    coord: {
        lon: number,
        lat: number ,
    },
    weather: {
        id: number,
        main: string,
        description: string,
        icon: string,
    }[],
    base: string,
    main: {
        temp:number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number
    },
    snow: {
        "1h": number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number 
}

export default Vue.extend({
    name: "cityStats",
    computed: {
        ...mapState([
            'focusedCity'
        ]),
        isActive() {
            if (this.focusedCity.cityId == this.cityData.cityId) {
                return true
            } else {
                return false
            }
        }
    },
    props: {
        cityData: Object as PropType<cityInfo>,
        weatherFromApi: Object as PropType<currentApiResponse>
    },
    watch: {
        weatherFromApi () {
            if (this.focusedCity.cityId == this.cityData.cityId) {
                this.updateChart()
            }
            console.log("weatherFromApi update")
        }
    },
    methods: {
        ...mapMutations([
            "setFocusedCity",
            "addToWeatherOfFocused",
        ]),
        updateChart () {
            const result: focusedCity = {
                city: this.cityData.city,
                country: this.cityData.country,
                cityId: this.cityData.cityId,
                dt: this.weatherFromApi.dt,
                temp: this.weatherFromApi.main.temp,
                humidity: this.weatherFromApi.main.humidity,
            }
            this.setFocusedCity(result)
            this.addToWeatherOfFocused(result)
        }
    },
})
</script>

<style>
    .cityStats {
        border-radius: 100vh;
    }
</style>